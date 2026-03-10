const mongoose = require("mongoose")
const asyncHandler = require("../utils/asyncHandler")

const connecDB = asyncHandler(async() => {
    try {

        await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`)
        console.log("Database connected successfully")
        
    } catch (error) {
        console.log("connection to database failed!!!")
    }
})