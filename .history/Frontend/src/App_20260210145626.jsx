
function App() {

  return (
    <>
    <h1>send Mail </h1>
    <form className="flex-col text-2xl align-middle justify-center">
<input type="text" name="" id="" placeholder='subject' className="bg-gray-600 text-white border-amber-50 rounded-2xl"/>


<input type="email" name="" id="" placeholder='to' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5" />
<input type="text" name="" id="" placeholder='text' className="bg-gray-600 text-white border-amber-50 rounded-2xl mt-5"/><br />
<button className="bg-amber-200 mt-3 rounded-3xl">SEND</button>
    </form>
       </>
  )
}

export default App
