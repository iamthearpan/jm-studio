import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import adminRouter from "./routes/admin.routes.js"
import { path } from "./global/path.js"

//routes declaration
app.use(`${path.api}/admin`, adminRouter);


export { app }