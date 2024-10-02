import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

function Header() {
    const cart = useSelector(state => state.cart.items);
    return (
        <div className="mt-3">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to='counter'>Counter</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='products'>Products</Link>
                </li>
                <li className="nav-item">
                    <Link type="button" className="btn btn-primary position-relative" to='cart'>
                        Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;