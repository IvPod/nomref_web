import mongoose from 'mongoose'

const connectDb = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log(`Подключение к MongoDB: ${conn.connection.host}`)
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

export default connectDb;