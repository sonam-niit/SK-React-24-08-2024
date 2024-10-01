import { useDispatch, useSelector } from "react-redux"
function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}

export default Counter;