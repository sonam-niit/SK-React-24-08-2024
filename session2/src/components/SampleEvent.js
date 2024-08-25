function SampleEvent() {
    
    const handleClick=()=>{
        alert('Button clicked')
    }
    return ( 
        <div>
            <button onClick={handleClick}>Alert</button>
            <button onClick={()=>alert("Triggered CLick")}>
                Click Me</button>
        </div>
     );
}

export default SampleEvent;