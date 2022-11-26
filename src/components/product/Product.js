import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
function Product(props) {
    const { product } = props;
    return (
        <>
        {/* // <div className="card my-2 p-1" style={{ Width: '18rem' }}>
        //     <img src={product.image} className="card-img-top product-img" alt="..." />
        //     <div className="card-body py-2">
        //         <h5 className="card-title" ><Link style={{Color:'#2a2a2a'}} to={`product/${product.id}`}>{product.title}</Link></h5>
        //         <span>{product.price}$</span>
        //         <button className="btn btn-success mx-3" >Buy</button>
        //     </div>
        // </div> */}

                    <div class="team-item my-3">
                        <div class="thumb">
                            <div class="hover-effect">
                                <div class="inner-content">
                                    <ul>
                                        <li><a href="/cart"><FavoriteBorderOutlinedIcon /></a></li>
                                        <li><a href="/cart"><ShoppingCartOutlinedIcon /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <img src={product.image} alt="product"/>
                        </div>
                        <div class="down-content">
                            <h4><Link style={{Color:'#2a2a2a'}} to={`product/${product.id}`}>{product.title}</Link></h4>
                            <span>{product.price}$</span>
                        </div>
                    </div>
             
        </>
    )
}

export default Product