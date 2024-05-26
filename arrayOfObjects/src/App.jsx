import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length,setLength]=useState(8);
  const [numbersAllowed,setNumbersAllowed]=useState(false);
  const [charactersAllowed,setCharactersAllowed]=useState(false);
  const [password,setPassword]=useState("");


  const passwordref=useRef(null);

  const passwordGenerator=useCallback(()=>{
    console.log("password generator call")
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str+="123456789"

    if(charactersAllowed) str+="!@#$%^&*()"

    for (let i=0;i<length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);

    }
    setPassword(pass)

  },[length,numbersAllowed,
  charactersAllowed,setPassword])

  useEffect(()=>{ console.log("rerender");
    passwordGenerator()},[length,numbersAllowed,charactersAllowed,passwordGenerator])

  const copyToClipboard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)

  },[password])

  
  
  
  return (
    
    <>

    <h1 style={{background:"black",textAlign:"center",color:"white"}}>Password Generator</h1>

    <div style={{marginLeft:"300px",background:"black",gap:"1rem",textAlign:"center",height:"100px",width:"800px", borderRadius:"2rem",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

      <div>
        <input type="text" value={password}  placeholder='Password' ref={passwordref}/>
        <button onClick={copyToClipboard}>Copy</button>

      </div>

      <div style={{display:"flex",color:"white",gap:"0.3rem"}}>
        <input type="range" min={6} max={100} value={length} onChange={(e)=> setLength(e.target.value)}/>
        <label>Length ({length})</label>
        <input type="checkbox" defaultChecked={numbersAllowed} onChange={()=> { setNumbersAllowed((prev)=> !prev)} }/>
        <label>Numbers</label>
        <input type="checkbox" defaultChecked={charactersAllowed} onChange={()=> {setCharactersAllowed((prev)=> !prev)} } />
        <label>Characters</label>
      </div>


    </div>

    </>

    

    

   
    


     
    
  )
}

export default App
