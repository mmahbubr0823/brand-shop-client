import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const loadedProductData = useLoaderData();


    return (
        <div  className='grid grid-cols-3 gap-3'>
            {
                loadedProductData.map((productData, index) => <div key={productData._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: {productData.name}!</h2>
                            <p>Brand: {productData.brand}</p>
                            <p>Price: {productData.price}</p>
                            
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyCart;