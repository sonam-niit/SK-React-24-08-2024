import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import CartReducer from "./cartReducer";

const RootReducer= combineReducers({
    counter:CounterReducer,
    cartReducer:CartReducer
})

export default RootReducer;