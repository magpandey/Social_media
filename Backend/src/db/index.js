import mongoose from "mongoose"

const connectDB = async() => {
    try {

        await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`)
        console.log("Database connected successfully")
        
    } catch (error) {
        console.log("connection to database failed!!!")
    }
}
export {connectDB}