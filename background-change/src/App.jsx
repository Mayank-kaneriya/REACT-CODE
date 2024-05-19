import { useState } from 'react'


function App() {
  const [color,setColor]=useState("olive");

  return (

   <div className="h-screen w-screen" style={{backgroundColor:color}}>
    test
   </div>

   
  
  );
}

export default App
