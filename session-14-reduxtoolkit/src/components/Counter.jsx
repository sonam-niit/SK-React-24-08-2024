import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/CounterSlice";

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter Comp: {count}</h3>
            <button className="btn btn-primary"
                onClick={() => dispatch(increment())}>+</button>

            <button className="btn btn-warning ms-2"
                onClick={() => dispatch(decrement())}>-</button>

            <button className="btn btn-secondary ms-2"
                onClick={() => dispatch(incrementByAmount(3))}>Increment by 3</button>

            <button className="btn btn-success ms-2"
                onClick={() => dispatch(decrementByAmount(2))}>Increment by 2</button>
        </div>
    );
}

export default Counter;