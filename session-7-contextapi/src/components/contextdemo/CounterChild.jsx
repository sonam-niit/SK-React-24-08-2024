import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

function CounterChild() {
    const {increment,decrement}=useContext(CounterContext);
    return ( 
        <div>
            <h3>Counter Child</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
     );
}

export default CounterChild;