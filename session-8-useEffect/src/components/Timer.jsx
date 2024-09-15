import { useEffect, useState } from "react";

function Timer() {
    const [time,setTime]= useState(new Date());
    useEffect(()=>{

        const interval= setInterval(()=>{
            setTime(new Date());
        },1000)

        return(()=>{
            clearInterval(interval);
        })
    },[])
    return ( 
        <div>
            <h2>Real Time Clock</h2>
            <h3>Current Time:{time.toLocaleDateString()} {time.toLocaleTimeString()}</h3>
        </div>
     );
}

export default Timer;