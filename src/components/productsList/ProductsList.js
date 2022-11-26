import { useEffect, useState } from 'react';
import Product from '../product/Product';
import bannerImage from '../../assets/images/left-banner-image.jpg'
import catImage from '../../assets/images/baner-right-image-04.jpg'

function ProductsList() {

    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        setIsLoading(true);
        console.log("isLoading", isLoading)
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setIsLoading(false)
            });

        console.log("isLoading Success", isLoading)
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then(res => res.json())
            .then((category) => setCategories(category))
    }

    const getProductsInCategory = (catName) => {
        setIsLoading(true);
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])
    return (
        <div>
            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                                    {isLoading ? (
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                    <div class="col-lg-6">
                                        <div class="left-content">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>All Producs</h4>
                                                    <span>Lorem ipsum dolor sit amet.</span>
                                                    <div class="main-border-button">
                                                        <button onClick={() => { getProducts() }}>Purchase Now!</button>
                                                    </div>
                                                </div>
                                                <img src={bannerImage} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                                            {categories.map((cat) => {
                                                return (
                                                    <div className="col-lg-6">
                                                        <div className="right-first-image">
                                                            <div className="thumb">
                                                                <div className="inner-content">
                                                                    <h4>{cat}</h4>
                                                                    <span>Lorem ipsum dolor sit amet</span>
                                                                </div>
                                                                <div className="hover-content">
                                                                    <div className="inner">
                                                                        <h4 onClick={() => { getProductsInCategory(cat) }}>{cat}</h4>
                                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                                        <div className="main-border-button">
                                                                            <button onClick={() => { getProductsInCategory(cat) }}>Discover More</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img src={catImage} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    // <span key={cat} className='p-3 m-3 text-center badge text-bg-secondary' onClick={() => { getProductsInCategory(cat) }}>{cat}</span>
                                                );
                                            })}
                                           </div>
                                           </div>
                                           </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
            {/* <div>
                <span className='p-3 m-3 text-center badge text-bg-secondary' onClick={() => { getProducts() }}>All</span>
                {categories.map((cat) => {
                    return (<span key={cat} className='p-3 m-3 text-center badge text-bg-secondary' onClick={() => { getProductsInCategory(cat) }}>{cat}</span>);
                })}
            </div> */}
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-heading">
                            <h2>Our Products</h2>
                            <span>Details to details is what makes US different from the others.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {isLoading ? (
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <section class="our-team">
                                <div class="container">
                                    <div class="row">
                                        {products.map((product) => {
                                            return (
                                                <div class="col-lg-4" key={product.id}>
                                                    <Product product={product} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}
export default ProductsList; 