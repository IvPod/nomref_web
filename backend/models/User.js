import fs from 'fs'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import geocoder from '../utils/geocoder.js'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
      formattedAddress: String,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } else {
    next()
  }
})

UserSchema.pre('save', async function (next) {
  if (this.address) {
    const loc = await geocoder.geocode(this.address)
    this.location = {
      type: 'Point',
      coordinates: [loc[0].longitude, loc[0].latitude],
      formattedAddress: loc[0].formattedAddress,
    }

    this.address = undefined
  }
  next()
})

// Каскадное удаление созданных пользователем станций перед удалением пользователя
UserSchema.pre('remove', async function (next) {
  console.log(
    `Удаляем станции по пользователю # ${this._id}`
  )
  await this.model('Station').deleteMany({
    user: this._id,
  })
  next()
})

// Удаление фото перед удалением пользователя
UserSchema.pre('remove', async function (next) {
  if (this.image) {
    fs.unlink(
      `${process.env.FILE_UPLOAD_PATH}/${this.image}`,
      (err) => {
        if (err) {
          console.log(
            `Проблема при удалении старого файла`,
            err
          )
        }
      }
    )
  }
  next()
})

UserSchema.methods.matchPassword = async function (
  password
) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  )
}

const User = mongoose.model('User', UserSchema)

export default User
