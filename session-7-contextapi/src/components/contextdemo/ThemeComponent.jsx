import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CounterContext } from "../../context/CounterContext";

function ThemeComponent() {
    const {theme}=useContext(ThemeContext);
    const {increment} = useContext(CounterContext);
    return ( 
        <div style={{
            background:theme==='light'?'#fff':'#333',
            color:theme==='light'?'#333':'#fff',
            padding:'20px',
            textAlign:'center'
        }}>
            <h3>Theme Component</h3>
            <button onClick={increment}>Add</button>
        </div>
     );
}

export default ThemeComponent;