import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

const addvalue=()=>{
  //counter=counter+1
  if(counter<20)
  setCounter(counter+1)
  console.log(counter)
}
function subvalue()
{
    if(counter>0)
    setCounter(counter-1)
    console.log(counter)
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>SET COUNTER BETWEEN 0 T0 20</h3>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={addvalue}>INCREASE COUNT</button>
        <br />
        <br />
        <button onClick={subvalue}>DECREASE COUNT</button>
      </div>
     
    </>
  )
}

export default App
