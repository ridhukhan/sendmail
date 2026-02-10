import {createTransport} from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
export const sendmail= async(req,res)=>{
const {subject,email,html}=req.body

const transport =createTransport({
  host:"smtp.gmail.com",
  port:465,
  auth:{
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS
  },
});

  await transport.sendMail({
    from:process.env.SMTP_USER,
    to:email,
    subject,
    html
  })
  return res.status(200).json({
   message:"send successfully"
  })
}