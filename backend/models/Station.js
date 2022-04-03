import mongoose from 'mongoose'
import sensorTypes from '../config/sensorTypes.js'

const StationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
    sensors: {
      type: [String],
      enum: sensorTypes,
    },
  },
  {
    timestamps: true,
  }
)

StationSchema.index({ location: '2dsphere' })
const Station = mongoose.model('Station', StationSchema)
export default Station
