import { useContext, useState } from "react"
import { CartContext } from "../CartProvider"
import Layout from "../components/Layout"
import "../Cart.css"
import { Link } from "react-router-dom"

function ItemRow({ idx, setTotal, item }) {
    const { setItems } = useContext(CartContext)
    const [quantity, setQuantity] = useState(item.quantity)

    return (<tr key={item.id}>
        <td className="cart__table-id">{idx + 1}</td>
        <td className="cart__table-item-name">
            <img src={item.imageUrl} alt={item.title} className="cart__table-item-image" />
            <div>
                <h1>{item.title}</h1>
                <button onClick={() => {
                    setTotal(prev => prev - (item.discountedPrice * quantity))
                    setItems(prev => prev.filter(i => i.id !== item.id))
                }}>Remove</button>
            </div>
        </td>
        <td className="cart__table-item-price">${item.discountedPrice}</td>
        <td className="cart__table-item-quantity">
            <input type="number" min={1} value={quantity} onChange={e => {
                setTotal(prev => prev - (item.discountedPrice * quantity) + (item.discountedPrice * e.target.value))
                setQuantity(e.target.value)
            }} />
        </td>
        <td className="cart__table-item-total">${Math.round(quantity * item.discountedPrice * 100) / 100}</td>
    </tr>)
}

export default function Cart() {
    const { items, setItems } = useContext(CartContext)
    const [total, setTotal] = useState(items.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0) || 0);

    return (
        <Layout>
            <div className="cart">
                <div className="cart__table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, idx) => <ItemRow key={idx} idx={idx} setTotal={setTotal} item={item} />)}
                        </tbody>
                    </table>
                </div>
                <div className="cart__total">
                    <h1>Total: ${Math.round(total * 100) / 100}</h1>
                    <Link to="/checkout" onClick={() => {
                        setItems([])
                    }}>Checkout</Link>
                </div>
            </div>
        </Layout>
    )
}