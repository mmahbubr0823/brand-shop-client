import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts);
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat nihil quia quisquam obcaecati nostrum, voluptate minima asperiores. Error accusamus, assumenda odio dolores odit beatae perspiciatis quaerat veniam perferendis officiis voluptatem, aliquam molestiae tenetur! Ipsa rerum possimus maxime. Adipisci tempora dolor labore quia error, eius vero in facere, aliquid unde, sed debitis exercitationem minima ipsum rem molestiae laborum maxime totam.
        </div>
    );
};

export default BrandDetails;