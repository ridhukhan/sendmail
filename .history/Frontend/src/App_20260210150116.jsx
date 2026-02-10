
function App() {

  return (
    <>
    <h1>send Mail </h1>
    <form className="flex-col  align-middle justify-center">
<label htmlFor="subject">subject</label><br />
<input type="text" name="subject" id="" placeholder='subject' className="bg-gray-600 text-white border-amber-50 rounded-2xl"/>

<label htmlFor="email">receiver email</label><br />
<input type="email" name="email" id="" placeholder='to' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5" />

<label htmlFor="text"></label>
<input type="text" name="text" id="" placeholder='text' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5"/><br />
<button className="bg-amber-200 mt-3 rounded-3xl border-2 ml-25">SEND</button>
    </form>
       </>
  )
}

export default App
