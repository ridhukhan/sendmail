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
        "https://personalmail.vercel.app"
    ],
    credentials:true,
}))

app.get("/", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is running" })
})



app.use("/send",sendRoute)



app.listen(PORT,'0.0.0.0',()=>{
console.log(`your Backend is running at http://localhost:${PORT}`)
})