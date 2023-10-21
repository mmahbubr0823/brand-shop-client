import React from 'react';
import { Link } from 'react-router-dom';

const BrandProductCard = ({ brandProduct }) => {
    const { _id,image, brand, name, type, price, description,  } = brandProduct;
    return (
        <div>
            <div className="card lg:h-[400px] bg-[#c5d0f3] shadow-xl">
                <div className='lg:flex'>
                <figure className="px-10 pt-10 lg:w-[350px]">
                    <img src={image} alt="Shoes" className="rounded-xl w-[300] h-[300]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product-name: {name}!</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Description: {(description).slice(0, 50)}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions mt-5">
                        <Link to={`/brandProduct/${_id}`}><button className="btn btn-primary">Details </button></Link>
                       <Link to={`/update/${_id}`}>
                       <button className="btn btn-danger ml-10">Update </button>
                       </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;