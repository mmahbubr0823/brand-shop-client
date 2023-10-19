import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandProductCard from './BrandProductCard';

const BrandDetails = () => {
    const loadedBrandProducts = useLoaderData();
    const [brandProducts, setBrandProducts] = useState(loadedBrandProducts)
    const params = useParams();


    useEffect(() => {
        const updatedBrandProducts = brandProducts.filter(newProducts => newProducts.brand === params.brandName);

        setBrandProducts(updatedBrandProducts)
    }, [])

    // console.log(brandProducts);


    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
            {
                brandProducts.map(brandProduct =><BrandProductCard key={brandProduct._id} brandProduct={brandProduct}></BrandProductCard>)
            }
            </div>
        </div>
    );
};

export default BrandDetails;