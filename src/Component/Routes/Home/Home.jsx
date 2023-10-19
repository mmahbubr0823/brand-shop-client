import { useLoaderData } from 'react-router-dom';
import BrandCards from './BrandCards';
import Banner from './Banner';
import News from './News';

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-3xl text-[#4e7ce7] my-10'>
                Foods that are available. Click to see details.
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    brands.map(brand => <BrandCards key={brand.id} brand={brand}></BrandCards>)
                }
            </div>
           <News></News>
        </div>
    );
};

export default Home;