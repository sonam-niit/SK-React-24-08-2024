import { useState } from "react"
import Example2 from "./components/Example2"
import Example1 from "./components/UseCase1"
import Example3 from "./components/Example3";
import Timer from "./components/Timer";
import Example4 from "./components/Example4";

function App() {
  const [flag,setFlag]=useState(false);
  return (
    <div className="container">

      <Example4 />
      {/* <Timer /> */}
      {/* <h3>Use Effect Examples</h3>
      <button onClick={()=>setFlag(!flag)}
      >{flag?'Hide Comp':'Show Comp'}</button>

      {flag ? <Example3 />:''} */}

      {/* <Example2 /> */}
      {/* <Example1 /> */}
    </div>
  )
}

export default App
