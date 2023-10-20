import React from 'react';

const Carousel = () => {
    return (
        <div className='my-10'>
            <div className="carousel w-1/2 h-[400px] mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/jVxRnny/cola-pouring-glass.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/7kjFTLM/burger-with-soda-french-fries.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/cb3DkkG/aromatic-frappuccino-table.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/dKCWWMY/fresh-cola-drink-glass.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;