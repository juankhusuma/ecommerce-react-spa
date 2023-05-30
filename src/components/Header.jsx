import { Link } from "react-router-dom"
import { ReactComponent as Cart } from "../Cart.svg"
import "../Header.css"
import { useContext } from "react"
import { CartContext } from "../CartProvider"

export default function Header() {
    const { items } = useContext(CartContext);
    return (
        <header className="header">
            <div>
                <Link to="/" className="header__logo">Home</Link>
                <Link to="/contacts" className="header__logo">Contact Us</Link>
            </div>
            <div className="header__cart">
                <Link to="/carts">
                    <span>
                        {items.length}
                    </span>
                    <span>
                        <Cart />
                    </span>
                </Link>
            </div>
        </header>
    )
}