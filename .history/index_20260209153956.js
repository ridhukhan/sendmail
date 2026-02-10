import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
const app= express()
const PORT =5000;
app.use(express.json())
app.use(cookieParser())
app.use(cors())























app.listen(PORT,()=>{
console.log(`your Backend is running at http://localhost:${PORT}`)
})