import express from 'express'
import {
  getUsers,
  getUserById,
  createUser,
  authUser,
  getMyProfile,
  logout,
  deleteMyProfile,
  updateMyProfile,
  uploadPhoto,
} from '../controllers/usersController.js'
import { protect, isAdmin } from '../middleware/auth.js'

const router = express.Router()

router
  .route('/')
  .get(protect, isAdmin, getUsers)
  .post(createUser)
router.route('/id/:id').get(protect, isAdmin, getUserById)
router
  .route('/myProfile')
  .get(protect, getMyProfile)
  .delete(protect, deleteMyProfile)
  .put(protect, updateMyProfile)
router.route('/login').post(authUser)
router.route('/logout').get(protect, logout)
router.route('/photo').put(protect, uploadPhoto)

export default router
