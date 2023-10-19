import { useLoaderData } from 'react-router-dom';
import BrandCards from './BrandCards';
import Footer from './Footer';

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    brands.map(brand => <BrandCards key={brand.id} brand={brand}></BrandCards>)
                }
            </div>
           
        </div>
    );
};

export default Home;