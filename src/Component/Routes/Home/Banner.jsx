import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div>
                    <img className='w-full h-[500px] rounded-lg' src={'https://i.ibb.co/54Hh1X1/top-view-table-full-delicious-food-composition.jpg'} alt="" />
                </div>
                <div className='absolute top-28 left-72'>
                    <p className='text-white text-4xl'>
                        What do you want have?
                        Pick our best meals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;