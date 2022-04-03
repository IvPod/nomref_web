import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'

import User from '../models/User.js'

//=======================================================================================
//    ВЫВЕСТИ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
//=======================================================================================
/**
 * @route   GET api/users
 * @desc    GET ALL USERS
 * @access  Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.status(200).json({
    success: true,
    data: users,
  })
})

//=======================================================================================
//    ВЫВЕСТИ ПОЛЬЗОВАТЕЛЯ ПО ID
//=======================================================================================
/**
 * @route   GET api/users/id/:id
 * @desc    GET USER BY Id
 * @access  Admin
 */
const getUserById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: `Ошибка в коде пользователя ${req.params.id}`,
    })
  }
  const user = await User.findById(req.params.id)
  if (user) {
    res.status(200).json({
      success: true,
      data: user,
    })
  } else {
    res.status(404).json({
      message: `Пользователь с кодом ${req.params.id} не найден`,
    })
  }
})

//=======================================================================================
//    ДОБАВИТЬ НОВОГО ПОЛЬЗОВАТЕЛЯ
//=======================================================================================
/**
 * @route   POST api/users
 * @desc    CREATE NEW USER
 * @access  Private
 */
const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      location: user.location,
      email: user.email,
      token: user.getSignedJwtToken(),
    },
  })
})

//=======================================================================================
//    АВТОРИЗАЦИЯ ПОЛЬЗОВАТЕЛЯ (LOGIN)
//=======================================================================================
/**
 * @route   POST api/users/login
 * @desc    AUTH USER
 * @access  Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select(
    '+password'
  )
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        token: user.getSignedJwtToken(),
      },
    })
  } else {
    res.status(401)
    throw new Error('Неверные данные login-password')
  }
})

//=======================================================================================
//    ВЫВЕСТИ ПРОФИЛЬ ЗАРЕГИСТРИРОВАННОГО ПОЛЬЗОВАТЕЛЯ
//=======================================================================================
/**
 * @route   GET api/users/myProfile
 * @desc    GET REGISTERED USER'S PROFILE
 * @access  Private
 */
const getMyProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({
      message: `Пользователь с кодом ${req.user._id} не найден`,
    })
  }
})

//=======================================================================================
//    ВЫХОД ПОЛЬЗОВАТЕЛЯ ИЗ СИСТЕМЫ
//=======================================================================================
/**
 * @route   GET api/users/logout
 * @desc    LOGOUT USER
 * @access  Private
 */
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {},
  })
})

//=======================================================================================
//    УДАЛИТЬ ПРОФИЛЬ ЗАРЕГИСТРИРОВАННОГО ПОЛЬЗОВАТЕЛЯ
//=======================================================================================
/**
 * @route   DELETE api/users/myProfile
 * @desc    DETETE CURRENTLY REGISTERED USER
 * @access  Private
 */
const deleteMyProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  await user.remove()
  res.status(200).json({
    success: true,
    data: {},
  })
})

//=======================================================================================
//    ИЗМЕНИТЬ ПРОФИЛЬ ЗАРЕГИСТРИРОВАННОГО ПОЛЬЗОВАТЕЛЯ
//=======================================================================================
/**
 * @route   PUT api/users/myProfile
 * @desc    UPDATE CURRENTLY REGISTERED USER
 * @access  Private
 */
const updateMyProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  user.set({ ...req.body })
  await user.save()
  const updated = await User.findById(req.user._id)
  res.status(200).json({
    success: true,
    data: updated,
  })
})

//=======================================================================================
//    ЗАГРУЗИТЬ ФОТО АВТОРИЗОВАНОГО ПОЛЬЗОВАТЕЛЯ
//=======================================================================================
// @desc      Upload photo
// @route     PUT /api/users/photo
// @access    Private
const uploadPhoto = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (!req.files) {
    return res.status(400).json({
      success: false,
      message: `Не найден файл фото`,
    })
  }
  const file = req.files.file

  // Убедимся, что пришёл файл с фото
  if (!file.mimetype.startsWith('image')) {
    return res.status(400).json({
      success: false,
      message: `Загрузите файл с изображением`,
    })
  }

  // Проверим размер
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return res.status(400).json({
      success: false,
      message: `Загрузите файл с изображением размером не больше ${process.env.MAX_FILE_UPLOAD} байт`,
    })
  }

  // Сделаем новое имя для файла, например: photo_5fd61a2898aba54074885504.jpg
  const file_name = `photo_${req.user._id}${
    path.parse(file.name).ext
  }`

  if (user.image) {
    // Уже есть какое-то фото
    fs.unlink(
      `${process.env.FILE_UPLOAD_PATH}/${user.image}`,
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

  file.mv(
    `${process.env.FILE_UPLOAD_PATH}/${file_name}`,
    async (err) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: false,
          message: `Проблема с загрузкой файла с изображением`,
        })
      }
      user.image = file_name
      const updated = await user.save()

      res.status(200).json({
        success: true,
        data: updated,
      })
    }
  )
})

export {
  getUsers,
  getUserById,
  createUser,
  authUser,
  getMyProfile,
  logout,
  deleteMyProfile,
  updateMyProfile,
  uploadPhoto,
}
