import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../Checkout.css"

export default function Checkout() {
    return (
        <Layout>
            <div className="checkout__container">
                <div className="checkout">
                    <h1>Checkout Successfull!</h1>
                    <Link to="/">Return to Home</Link>
                </div>
            </div>
        </Layout>
    )
}