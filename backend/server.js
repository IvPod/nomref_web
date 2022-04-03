import express from 'express'
import cors from 'cors'
import path from 'path'
import fileupload from 'express-fileupload'

import connectDb from './config/db.js'
import userRoutes from './routes/user.js'
import stationRoutes from './routes/station.js'
import {
  errorHandler,
  notFound,
} from './middleware/error.js'

connectDb()

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json({ extended: false }))

const __dirname = path.resolve()
app.use(fileupload())
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'public/uploads'))
)

app.use('/api/users', userRoutes)
app.use('/api/stations', stationRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(path.join(__dirname, '/frontend/build'))
  )
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(
        __dirname,
        'frontend',
        'build',
        'index.html'
      )
    )
  )
} else {
  app.get('/', (req, res) => {
    res.send('API running...')
  })
}

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  )
})
