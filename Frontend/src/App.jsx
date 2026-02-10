import { useState } from "react"
import { server } from "./main"
import axios from "axios"
import {toast, Toaster} from "sonner"
function App() {
const [subject,setSubject]=useState("")
const [email,setEmail]=useState("")
const [text,setText]=useState("")
const [loading,setLoading]=useState(false)
const handlesubmit = async (e)=>{
  setLoading(true)
e.preventDefault()
try {
const {data}=await axios.post(`${server}/send/sendmail`,{
subject,
email,
text
})
toast.success(data.message)
} catch (error) {
  toast.error(error.message)
}finally{
  setLoading(false)
}


}
  return (
    <>
    <Toaster/>
    <h1>sendMail</h1>
    <form  onSubmit={handlesubmit}   className="flex-col text-2xl align-middle justify-center">
<input type="text"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
 name="subject" id="" placeholder='subject' className="bg-gray-600 text-white border-amber-50 rounded-2xl"/>

<input type="email" 
value={email}
onChange={(e)=>setEmail(e.target.value)}

name="email" id="" placeholder='to' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5" />

<input type="text" 
value={text}
onChange={(e)=>setText(e.target.value)}

name="text" id="" placeholder='text' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5"/><br />
<button className="bg-amber-200 mt-3 rounded-3xl border-2 ml-25 " disabled={loading}>
    {loading && (
    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  )}
  
  {loading?  "sending..":"SEND"}</button>
    </form>
       </>
  )
}

export default App
