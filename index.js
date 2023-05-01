import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"

const PORT = 80
const DB_URL = "mongodb://127.0.0.1:27017"
const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(router)
app.use("/quest", express.static("stories"))

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server is working"))
    } catch (error) {
        console.log(error)
    }
}

startApp()