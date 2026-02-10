import express from "express"
import { sendmail } from "../controller/send.js"

const router = express.Router()

router.post("/sendmail",sendmail)

export default router