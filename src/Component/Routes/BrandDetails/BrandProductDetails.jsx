import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandProductDetails = () => {
    const loadedProducts = useLoaderData();
    const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams();

    //    finding matching product 
    useEffect(() => {
        const findProduct = loadedProducts?.find(brandProduct => brandProduct._id === id);
        setSingleProduct(findProduct)
    }, [loadedProducts, id])

    const { image, brand, name, type, price, description} = singleProduct;

    const handleData = ()=>{
        const selectedProduct ={
            name, brand, type, price
        }

        // posting data 
        fetch('https://food-beverage-server-seven.vercel.app/selectedProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedProduct)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Product successfully added to Cart.');
        })
    }

    return (
        <div>
            <div className="card lg:h-[500px] bg-[#c5d0f3] shadow-xl">
                <div className='lg:flex'>
                <figure className="px-10 pt-10 lg:w-1/3">
                    <img src={image} alt="Shoes" className="rounded-xl lg:w-[300] lg:h-[300]" />
                </figure>
                <div className="card-body items-center mx-auto text-center w-2/3">
                    <h2 className="card-title">Product-name: {name}!</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Description: {description}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button onClick={handleData} className="btn btn-primary">Add to cart </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetails;