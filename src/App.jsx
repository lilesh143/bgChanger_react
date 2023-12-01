import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className='w-full flex text-red-600 h-screen justify-center m-auto' style={{backgroundColor: color}}>
      Main Screen
      <div className='flex flex-wrap inset-x-0 fixed bottom-5 h-20 w-10/12 m-auto bg-white justify-center py-2 rounded-2xl'>
        <button onClick={() => setColor("red")} className='h-16 w-32 mx-2 bg-black text-white  rounded-3xl'>
          Red
        </button>

        <button onClick={() => setColor("orange")} className='h-16 w-32 mx-2 bg-black text-white  rounded-3xl'>
          Orange
        </button>

        <button onClick={() => setColor("blue")} className='h-16 w-32 mx-2 bg-black text-white  rounded-3xl'>
          Blue
        </button>

        <button onClick={() => setColor("white")} className='h-16 w-32 mx-2 bg-black text-white  rounded-3xl'>
          White
        </button>

        <button onClick={() => setColor("green")} className='h-16 w-32 mx-2 bg-black text-white  rounded-3xl'>
          Green
        </button>
        
      </div>
     </div>
    </>
  )
}

export default App
