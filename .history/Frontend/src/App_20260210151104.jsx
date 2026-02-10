import { useState } from "react"

function App() {
const [subject,setSubject]=useState("")
const [email,setEmail]=useState("")
const [text,setText]=useState("")
const [loading,setLoading]=useState(false)
const handlesubmit =(e)=>{
e.preventDefault()




}
  return (
    <>
    <h1>send Mail </h1>
    <form  onSubmit={handlesubmit}   className="flex-col text-2xl align-middle justify-center">
<input type="text"
value={subject}
 name="subject" id="" placeholder='subject' className="bg-gray-600 text-white border-amber-50 rounded-2xl"/>

<input type="email" 
value={email}
name="email" id="" placeholder='to' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5" />

<input type="text" 
value={text}
name="text" id="" placeholder='text' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5"/><br />
<button className="bg-amber-200 mt-3 rounded-3xl border-2 ml-25">SEND</button>
    </form>
       </>
  )
}

export default App
