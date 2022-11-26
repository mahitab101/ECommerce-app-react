import React, { useEffect, useState } from 'react'

function ProductCat() {
    const [categories,setCategories] = useState([]);
    const [product,setProduct] = useState([]);
    const api_url = "https://fakestoreapi.com/products";

    const getCategories = () =>{
        fetch(`${api_url}/categories`)
        .then(res=>res.json())
        .then((category)=>setCategories(category))
    }
 
    const getProductsInCategory = (catName) =>{
        fetch(`${api_url}/category/${catName}`)
        .then(res=>res.json())
        .then((data)=>setProduct(data))
    }

    useEffect(()=>{
        getCategories();
    },[]);

  return (
    <div>
        {categories.map((cat)=>{
        return(<span key={cat} className='p-3 m-3 text-center badge text-bg-secondary' onClick={getProductsInCategory(cat)}>{cat}</span>) ;
        })}
    </div>
  )
}

export default ProductCat