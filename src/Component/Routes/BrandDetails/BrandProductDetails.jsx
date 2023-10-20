import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BrandProductDetails = () => {
    const loadedProducts = useLoaderData();
    const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams();

    //    finding matching product 
    useEffect(() => {
        const findProduct = loadedProducts.find(brandProduct => brandProduct._id === id);
        setSingleProduct(findProduct)
    }, [loadedProducts, id])
    console.log(singleProduct);

    const { image, brand, name, type, price, description} = singleProduct;

    return (
        <div>
            <div className="card h-[500px] bg-[#c5d0f3] shadow-xl">
                <div className='flex'>
                <figure className="px-10 pt-10 w-1/3">
                    <img src={image} alt="Shoes" className="rounded-xl w-[300] h-[300]" />
                </figure>
                <div className="card-body items-center text-center w-2/3">
                    <h2 className="card-title">Product-name: {name}!</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Description: {description}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <Link><button className="btn btn-primary">Add to cart </button></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetails;