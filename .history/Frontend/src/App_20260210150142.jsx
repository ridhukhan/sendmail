
function App() {

  return (
    <>
    <h1>send Mail </h1>
    <form className="flex-col text-2xl align-middle justify-center">
<input type="text" name="subject" id="" placeholder='subject' className="bg-gray-600 text-white border-amber-50 rounded-2xl"/>

<input type="email" name="email" id="" placeholder='to' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5" />

<input type="text" name="text" id="" placeholder='text' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5"/><br />
<button className="bg-amber-200 mt-3 rounded-3xl border-2 ml-25">SEND</button>
    </form>
       </>
  )
}

export default App
