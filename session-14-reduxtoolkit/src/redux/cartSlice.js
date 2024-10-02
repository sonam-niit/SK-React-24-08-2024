import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'Cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const index=state.items.findIndex(item=>item.product.id==action.payload.product.id);
            if(index<0){
                state.items=[...state.items,action.payload]
            }else{
                state.items[index].quantity+=1;
            }
            
        },
        removeFromCart:(state,action)=>{
            state.items= state.items.filter(item=>item.product.id!=action.payload);
        },
        increaseQuantity:(state,action)=>{
            const index=state.items.findIndex(item=>item.product.id==action.payload);
            state.items[index].quantity+=1;
        },
        decreaseQuantity:(state,action)=>{
            const index=state.items.findIndex(item=>item.product.id==action.payload);
            state.items[index].quantity-=1;
        }
    }
})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions
export default cartSlice.reducer;