import cookieParser from "cookie-parser";
import express from "express"
const app= express()
const PORT =5000;
app.use(express.json())
app.use(cookieParser())
app.use(cors())