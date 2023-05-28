import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import "../Product.css"
import { CartContext } from "../CartProvider";
import Layout from "../components/Layout";

export default function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { items, setItems } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id])


    return (
        <Layout>
            <div className="product">
                <div className="product__card">
                    <img src={product?.imageUrl} alt={product?.title} />
                    <div className="product__card__info">
                        <h1>{product?.title}</h1>
                        <h3>Rating: <span>{product?.rating}</span></h3>
                        <h2>{
                            product?.price === product?.discountedPrice ?
                                `$${product?.price}` : <>
                                    <span className="product__card__info-price-no-discount">{`$${product?.price}`}</span>
                                    <span className="product__card__info-price-discount">{`$${product?.discountedPrice}`}</span>
                                </>
                        }</h2>
                        <p>{product?.description}</p>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" onChange={(e) => setQuantity(e.target.value)} defaultValue={0} name="quantity" min="0" />
                        <button onClick={() => {
                            if (quantity <= 0) {
                                return;
                            }
                            const id = product.id;
                            items.find(item => item.id === id) ?
                                setItems(items.map(item => item.id === id ? { ...item, quantity }
                                    : item)) :
                                setItems([...items, { ...product, quantity: quantity }])
                            navigate("/")
                        }
                        }>Add to Cart</button>
                    </div>
                </div>

                {product?.reviews.length > 0 &&
                    (<div className="product__reviews">
                        {
                            product?.reviews.map(review => (
                                <div key={review.id} className="product__reviews__card">
                                    <p>
                                        <span>
                                            {review.username}
                                        </span>
                                        <span>
                                            {review.rating}
                                        </span>
                                    </p>
                                    <p>"{review.description}"</p>
                                </div>
                            )
                            )
                        }
                    </div>)}
            </div>
        </Layout>
    )
}