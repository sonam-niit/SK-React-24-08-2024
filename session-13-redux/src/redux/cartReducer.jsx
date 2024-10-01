const initialState={
    items:[]
}
function CartReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_ITEM':
            return {...state,items:[...state.items,action.payload]};
        case 'REMOVE_ITEM':
            console.log(action.payload);
            
            return {...state,items:state.items.filter(item=>item.product.id!=action.payload)};
        default:
            return state;
    }
}
export default CartReducer;