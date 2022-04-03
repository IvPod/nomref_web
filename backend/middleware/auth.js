import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import asyncHandler from 'express-async-handler'

/**
 * Модуль промежуточного ПО авторизации, middleware.
 * @module middleware/auth
 * @see module:middleware/auth
 */
//=======================================================================================
//    PROTECT
//=======================================================================================
/**
 * @function      protect(request, response, next)
 * @description   protect access using JWT auth
 */
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET
      )
      const user = await User.findById(decodedToken.id)
      req.user = user
    } catch (error) {
      res.status(401)
      throw new Error('Ошибка в данных авторизации')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error(
      'Ошибка авторизации, отсутствует доступ'
    )
  }
  next()
})

//=======================================================================================
//    IsAdmin
//=======================================================================================
/**
 * @function      isAdmin(request, response, next)
 * @description   prohibit access for no admin user
 */
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(401)
    throw new Error('У Вас нет прав на операцию')
  }
}

export { protect, isAdmin }
