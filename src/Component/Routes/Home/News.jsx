import React from 'react';

const News = () => {
    return (
        <div>
            <h1 className='text-center text-3xl my-10'>Latest News</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img color='w-[300px] h-[300px]' src="https://i.ibb.co/pnm1r88/19197433.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-300">Nine-months sales!</h2>
                        <p>A sales report is an analysis tool that provides insights into the performance of various sales activities within a company..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img color='w-[300px] h-[300px]' src="https://i.ibb.co/pnm1r88/19197433.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-300">Nine-months sales!</h2>
                        <p>A sales report is an analysis tool that provides insights into the performance of various sales activities within a company..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img color='w-[300px] h-[300px]' src="https://i.ibb.co/pnm1r88/19197433.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-300">Nine-months sales!</h2>
                        <p>A sales report is an analysis tool that provides insights into the performance of various sales activities within a company..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;