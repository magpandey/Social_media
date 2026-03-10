import { connectDB } from "./src/db/index.js"
import {app} from "./src/app.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log("Failed to connect to database, server is not running!!!")
    process.exit(1)
})