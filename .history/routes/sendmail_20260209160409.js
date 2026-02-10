import express from "express"
import { sendmail } from "../controller/send"

const router = express.Router()

router.post("/sendmail",sendmail)