import {useState,useCallback} from 'react'
import './App.css'


function App() {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*";
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=char;

    }
  },[length,numberAllowed,charAllowed,setPassword]);

  setPassword(pass);
  


  return (
    <>
    <h1 className="text-center text-white text-4xl py-3 ">Password Generator</h1>
    </>
  )
}

export default App
