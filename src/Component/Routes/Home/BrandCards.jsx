import React from 'react';
import { Link } from 'react-router-dom';

const BrandCards = ({ brand }) => {
    const { brandName, img } = brand;
    return (
        <div>
            <Link to={`/brands/${brandName}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{brandName}</h2>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCards;