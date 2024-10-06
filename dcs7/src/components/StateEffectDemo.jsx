import { useEffect, useState } from "react"

function StateEffectDemo() {

  const [name,setName]=useState('Skill Academy');
  useEffect(()=>{
    console.log('Component Mounted');
  },[])
  useEffect(()=>{
    console.log('name updated ',name);
  },[name])
  return (
    <>
      <h2>State Demo: {name}</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)} 
      value={name}/>
    </>
  ) 
}

export default StateEffectDemo
