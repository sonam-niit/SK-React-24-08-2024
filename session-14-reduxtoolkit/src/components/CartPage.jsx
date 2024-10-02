import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

function CartPage() {
    const items = useSelector(state => state.cart.items);
    const dispatch=useDispatch();

    return (
        <div>
            <h3>Cart Page</h3>
            {
                items.length == 0 ? <p>Cart is Empty</p> :

                    <div className="row">
                        {items.map((item) => (
                            <div className="col-12 col-lg-3 col-md-6" key={item.product.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={item.product.thumbnail} className="card-img-top" alt={item.product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product.price}</h5>
                                        <button className="btn btn-primary" 
                                        onClick={()=>dispatch(increaseQuantity(item.product.id))}>+</button> 
                                        <span>Quantity: {item.quantity}</span>
                                        <button className="btn btn-primary" onClick={()=>dispatch(decreaseQuantity(item.product.id))}>-</button>
                                        <button className="btn btn-primary" 
                                        onClick={()=>dispatch(removeFromCart(item.product.id))}>Remove From Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
            }
        </div>
    );
}

export default CartPage;