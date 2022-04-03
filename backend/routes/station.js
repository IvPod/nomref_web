import express from 'express'
import {
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
} from '../controllers/stationsController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router
  .route('/')
  .get(getStations)
  .post(protect, createStation)
router
  .route('/:id')
  .get(getStationById)
  .delete(protect, deleteStation)
  .put(protect, updateStationProfile)
router.route('/user/:uid').get(getStationsByUser)
router
  .route('/radius/:center/:distance')
  .get(getStationsInRadius)
router.route('/box/:bl/:tr').get(getStationsInBox)
router.route('/address/:address').get(getLocationByAddress)
router.route('/latlng/:latlng').get(getLocationByCoords)

export default router
