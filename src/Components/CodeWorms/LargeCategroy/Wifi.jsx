import React from 'react';
import useCategory from '../Hooks/useCategory';
import WIfiCard from './WIfiCard';

const Wifi = () => {
    const [category] = useCategory();
    const wifiProduct = category.filter(item => item.category === "WiFi Routers");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://i.pinimg.com/736x/b8/bc/96/b8bc965514e2487ec9f99c70116a1d3b.jpg" alt="" />
            </div>
            <div>
                {
                    wifiProduct.map(product => <WIfiCard
                    key={product._id}
                    product={product}
                    ></WIfiCard>)
                }
            </div>
        </div>
    );
};

export default Wifi;