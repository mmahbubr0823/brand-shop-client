import React from 'react';

const BrandCards = ({ brand }) => {
    const { brandName, img } = brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-[300px] h-[300px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{brandName}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandCards;