import { Link } from "react-router-dom"
import { ReactComponent as Cart } from "../Cart.svg"
import { ReactComponent as Contact } from "../Contact.svg"
import "../Header.css"

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">Home</Link>
            <nav className="header__nav">
                <Link to="/carts">
                    <Cart />
                </Link>
                <Link to="/contacts">
                    <Contact />
                </Link>
            </nav>
        </header>
    )
}