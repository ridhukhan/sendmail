import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import sendRoute from "./routes/sendmail.js"
const app= express()
const PORT =process.env.PORT  || 5000;
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[
        "https://personalmail.vercel.app",
    ],
    credentials:true,
}))

app.use("/send",sendRoute)





















app.listen(PORT,()=>{
console.log(`your Backend is running at http://localhost:${PORT}`)
})