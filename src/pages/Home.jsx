import { useEffect, useRef, useState } from 'react';
import "../Home.css"
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const productRef = useRef(null);


    useEffect(() => {
        fetch('https://api.noroff.dev/api/v1/online-shop')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            });
    }, [])

    return (
        <Layout>
            <div className="home">
                <div className="home__header">
                    <div className='home__header-text'>
                        <h1 className='home__header-text-1'>Shop Smart</h1>
                        <h1 className='home__header-text-2'>Shop Easy</h1>
                        <a onClick={() => {
                            window.scrollTo({
                                top: productRef.current.offsetTop - 100,
                                behavior: "smooth"
                            })
                        }} className='home__header-text-link' href='#products'>Explore Now</a>
                    </div>
                    <img className='home__header-image' src='/pexels-suzy-hazelwood-2536965 1.png' alt='Header' />
                </div>
                <div className='home__body'>
                    <div className='home__search' >
                        <div>
                            <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} className='home__search' placeholder='Search...' />
                            <ul className='home__search-autocomplete'>
                                {
                                    products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())).slice(0, 5).map(product => (
                                        <li key={product.id} onClick={() => setSearch(product.title)} className='home__search-autocomplete-item'>{product.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div ref={productRef} className='home__products' id='#products'>
                        {
                            products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())).map(product => (
                                <div key={product.id} className='home__products-card'>
                                    <img className='home__products-card-image' src={product.imageUrl} alt={product.title} />
                                    <div className='home__products-card-text'>
                                        <Link to={`/product/${product.id}`}><h1>{product.title}</h1></Link>
                                        <div>
                                            {product.price === product.discountedPrice ?
                                                <p className='home__products-card-text-price'>${product.price}</p>
                                                :
                                                <p>
                                                    <span className='home__products-card-text-price-no-discount'>${product.price} </span>
                                                    <span className='home__products-card-text-price-discount'>${product.discountedPrice}</span>
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
