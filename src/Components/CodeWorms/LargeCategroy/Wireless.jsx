import React from 'react';
import useCategory from '../Hooks/useCategory';
import WirelessCard from './WirelessCard';

const Wireless = () => {
    const [category] = useCategory();
    const wirelessProduct = category.filter(item => item.category === "Wireless");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/247881192/original/93ac79127162ba20aed1d813c1b332cc272e6ab0/design-high-quality-youtube-gaming-thumbnails-in-3hours.png" alt="" />
            </div>
            <div>
                {
                    wirelessProduct.map(product => <WirelessCard
                    key={product._id}
                    product={product}
                    ></WirelessCard>)
                }
            </div>
        </div>
    );
};

export default Wireless;