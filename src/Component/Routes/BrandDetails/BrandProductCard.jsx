import React from 'react';
import { Link } from 'react-router-dom';

const BrandProductCard = ({ brandProduct }) => {
    const { _id,image, brand, name, type, price, description,  } = brandProduct;
    return (
        <div>
            <div className="card h-96 bg-[#c5d0f3] shadow-xl">
                <div className='flex'>
                <figure className="px-10 pt-10 w-1/2">
                    <img src={image} alt="Shoes" className="rounded-xl w-[300] h-[300]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product-name: {name}!</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Description: {description}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/brandProduct/${_id}`}><button className="btn btn-primary">Details </button></Link>
                        <button className="btn btn-danger ml-10">Update </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;