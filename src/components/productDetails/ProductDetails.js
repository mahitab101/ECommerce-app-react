import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, [])

    return (
        <div className='mt-5 pt-5'>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>{product.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <img src={product.image} alt="product" />
                <p>{product.description}</p>
                <span>{product.price}$</span>
            </div>
        </div>
    )
}

export default ProductDetails