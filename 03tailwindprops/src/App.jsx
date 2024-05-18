import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"mayank kaneriya",
    age:21
  }
  let myarr=[1,2,3];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
    <br />

    <Card username="chaiaurcode" btntext="submit"  newarray={myarr} /* someobj={myobj} newarray={myarr}/> */ />

    <br />

    <Card username="chaisuttabar" /* btntext="visit"/> */ />



     



    </>
  )
}

export default App
