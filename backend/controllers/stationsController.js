import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'

import Station from '../models/Station.js'
import geocoder from '../utils/geocoder.js'

//=======================================================================================
//    ВЫВЕСТИ ВСЕ СТАНЦИИ
//=======================================================================================
/**
 * @route   GET api/stations
 * @desc    GET ALL STATIONS
 * @access  Public
 */
const getStations = asyncHandler(async (req, res) => {
  const stations = await Station.find()
  stations.forEach((station) =>
    station.location.coordinates.reverse()
  )
  res.status(200).json({
    success: true,
    count: stations.length,
    data: stations,
  })
})

//=======================================================================================
//    ВЫВЕСТИ СТАНЦИЮ ПО ID
//=======================================================================================
/**
 * @route   GET api/stations/:id
 * @desc    GET STATION BY Id
 * @access  Public
 */

const getStationById = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id)
  if (station) {
    station.location.coordinates.reverse()
    res.json({
      success: true,
      data: station,
    })
  } else {
    res.status(404).json({
      success: false,
      message: `Станция с кодом ${req.params.id} не найдена`,
    })
  }
})

//=======================================================================================
//    ДОБАВИТЬ НОВУЮ СТАНЦИЮ
//=======================================================================================
/**
 * @route   POST api/stations
 * @desc    CREATE NEW STATION
 * @access  Private
 */
const createStation = asyncHandler(async (req, res) => {
  req.body.user = req.user._id
  req.body.location.coordinates.reverse()
  const station = await Station.create(req.body)
  station.location.coordinates.reverse()

  res.status(201).json({
    success: true,
    data: station,
  })
})

//=======================================================================================
//    УДАЛИТЬ СТАНЦИЮ
//=======================================================================================
/**
 * @route   DELETE api/stations/:id
 * @desc    DELETE STATION
 * @access  Private
 */
const deleteStation = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id)
  if (!station) {
    return res.status(404).json({
      success: false,
      message: `Станция с кодом ${req.params.id} не найдена`,
    })
  }
  if (
    station.user.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin'
  ) {
    return res.status(401).json({
      success: false,
      message: `У Вас нет прав на удаление станции с кодом ${req.params.id}`,
    })
  }
  station.remove()
  res.status(200).json({
    success: true,
    data: {},
  })
})

//=======================================================================================
//    ПОЛУЧИТЬ ЛОКАЦИЮ ПО ВВЕДЕННОМУ АДРЕСУ
//=======================================================================================
/**
 * @route   GET api/stations/address/:address
 * @desc    GET LOCATION BY ADDRESS STRING
 * @access  Public
 */
const getLocationByAddress = asyncHandler(
  async (req, res) => {
    const loc = await geocoder.geocode(req.params.address)
    res.status(200).json({ success: true, data: loc })
  }
)

//=======================================================================================
//    ПОЛУЧИТЬ АДРЕС ПО ВВЕДЕННЫМ КООРДИНАТАМ
//=======================================================================================
/**
 * @route   GET api/stations/latlng/:latlng
 * @desc    GET LOCATION BY ADDRESS STRING
 * @access  Public
 */
const getLocationByCoords = asyncHandler(
  async (req, res) => {
    const alatlng = req.params.latlng.split(',')
    const loc = await geocoder.reverse({
      lat: alatlng[0],
      lon: alatlng[1],
    })
    res.status(200).json({ success: true, data: loc })
  }
)

//=======================================================================================
//    ВЫВЕСТИ ВСЕ СТАНЦИИ ПО ПОЛЬЗОВАТЕЛЮ
//=======================================================================================
/**
 * @route   GET api/stations/user/:uid
 * @desc    GET ALL STATIONS BY CERTAIN USER
 * @access  Public
 */
const getStationsByUser = asyncHandler(async (req, res) => {
  const stations = await Station.find({
    user: req.params.uid,
  })
  stations.forEach((station) =>
    station.location.coordinates.reverse()
  )

  res.status(200).json({
    success: true,
    count: stations.length,
    data: stations,
  })
})

//=======================================================================================
//    ВЫВЕСТИ ВСЕ СТАНЦИИ В РАДИУСЕ ... КМ
//=======================================================================================
/**
 * @route   GET api/stations/radius/:center/:distance
 * @desc    GET ALL STATIONS IN RADIUS BY CERTAIN CENTER
 * @access  Public
 */
const getStationsInRadius = asyncHandler(
  async (req, res) => {
    const scoords = req.params.center.split(',')
    const coords = [
      parseFloat(scoords[1]),
      parseFloat(scoords[0]),
    ]

    const stations = await Station.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: coords },
          $maxDistance: req.params.distance * 1000,
        },
      },
    })

    stations.forEach((station) =>
      station.location.coordinates.reverse()
    )
    res.status(200).json({
      success: true,
      count: stations.length,
      data: stations,
    })
  }
)

//=======================================================================================
//    ВЫВЕСТИ ВСЕ СТАНЦИИ В ГРАНИЦАХ
//=======================================================================================
/**
 * @route   GET api/stations/box/:bl/:tr
 * @desc    GET ALL STATIONS IN BOX
 * @access  Public
 */
const getStationsInBox = asyncHandler(async (req, res) => {
  const scoords_bl = req.params.bl.split(',')
  const coords_bl = [
    parseFloat(scoords_bl[1]),
    parseFloat(scoords_bl[0]),
  ]

  const scoords_tr = req.params.tr.split(',')
  const coords_tr = [
    parseFloat(scoords_tr[1]),
    parseFloat(scoords_tr[0]),
  ]

  const stations = await Station.find({
    location: {
      $geoWithin: {
        $box: [coords_bl, coords_tr],
      },
    },
  })
  stations.forEach((station) =>
    station.location.coordinates.reverse()
  )

  res.status(200).json({
    success: true,
    count: stations.length,
    data: stations,
  })
})

//=======================================================================================
//    ИЗМЕНИТЬ ПРОФИЛЬНЫЕ ДАННЫЕ СТАНЦИИ # ID
//=======================================================================================
/**
 * @route   PUT api/stations/:id
 * @desc    PUT DATA OF STATION #id
 * @access  Private
 */
const updateStationProfile = asyncHandler(
  async (req, res) => {
    const station = await Station.findById(req.params.id)
    if (!station) {
      return res.status(404).json({
        success: false,
        message: `Станция с кодом ${req.params.id} не найдена`,
      })
    }

    if (
      station.user.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(401).json({
        success: false,
        message: `У Вас нет прав на изменение профиля станции #${req.params.id}`,
      })
    }

    req.body.location.coordinates.reverse()
    const updated = await Station.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
    updated.location.coordinates.reverse()

    res.json({
      success: true,
      data: updated,
    })
  }
)

export {
  getStations,
  getStationById,
  createStation,
  getLocationByAddress,
  getLocationByCoords,
  getStationsByUser,
  getStationsInRadius,
  getStationsInBox,
  deleteStation,
  updateStationProfile,
}
