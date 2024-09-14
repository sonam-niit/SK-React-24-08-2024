import { useContext } from "react";
import CounterChild from "./CounterChild";
import { CounterContext } from "../../context/CounterContext";

function CounterParent() {
    const {count}=useContext(CounterContext);
    return ( 
        <div>
            <h3>Counter Parent: {count}</h3>
            <CounterChild />
        </div>
     );
}

export default CounterParent;