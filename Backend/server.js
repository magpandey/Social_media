const dotenv = require("dotenv").config()
const app = require("./app")

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("Failed to connect to database, server is not running!!!")
})