import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  
let [counter,setCounter]=useState(0);

const addValue=()=>{
  if(counter>=0 && counter<=19)
  {
    counter=counter+1
    console.log(counter);
    // setCounter(counter);
    // setCounter(counter);

    setCounter(previousCounter =>  previousCounter+1)
    setCounter(previousCounter =>  previousCounter+1)
    setCounter(previousCounter =>  previousCounter+1)
    setCounter(previousCounter =>  previousCounter+1)

  }
    

  
 
}


  
  const removeValue=()=>{
    if(counter<=0)
    {
      setCounter(0);

    } 
    else
    {
      counter=counter-1;
      console.log(counter);
      setCounter(counter);

    }
     
    
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button 
    onClick={addValue}>    
    Add Value {counter}
    </button>
    <br />
    <br />
    <button onClick={removeValue}
    >Remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>
   
  )
}

export default App
