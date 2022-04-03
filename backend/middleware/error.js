const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  let emessage = err.message
  if (err.name === 'CastError') {
    emessage = `Ошибка в коде объекта ${err.value}`
    res.status(404)
  }
  if (err.name === 'ValidationError') {
    emessage = Object.values(err.errors).map(
      (val) => val.message
    )
    res.status(400)
  }
  if (err.code === 11000) {
    let dups = ''
    for (const prop in err.keyValue) {
      dups += err.keyValue[prop]
    }
    emessage = `Ошибка-повторение ключевого поля ${dups}`
    res.status(400)
  }

  res.json({
    success: false,
    message: emessage,
  })
}

const notFound = (req, res, next) => {
  const error = new Error(
    `Не найден путь - ${req.originalUrl}`
  )
  res.status(404)
  next(error)
}

export { errorHandler, notFound }
