import { useLoaderData } from 'react-router-dom';
import BrandCards from './BrandCards';
import Banner from './Banner';

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    brands.map(brand => <BrandCards key={brand.id} brand={brand}></BrandCards>)
                }
            </div>
           
        </div>
    );
};

export default Home;