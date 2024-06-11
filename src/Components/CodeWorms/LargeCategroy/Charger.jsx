import React from 'react';
import useCategory from '../Hooks/useCategory';
import ChargerCard from './ChargerCard';

const Charger = () => {
    const [category] = useCategory();
    const chargerProduct = category.filter(item => item._id === "Charger");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/247881192/original/93ac79127162ba20aed1d813c1b332cc272e6ab0/design-high-quality-youtube-gaming-thumbnails-in-3hours.png" alt="" />
            </div>
            <div>
                {
                    chargerProduct.map(product => <ChargerCard
                    key={product._id}
                    product={product}
                    ></ChargerCard>)
                }
            </div>
        </div>
    );
};

export default Charger;