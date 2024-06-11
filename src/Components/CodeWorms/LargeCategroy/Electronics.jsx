import React from 'react';
import useCategory from '../Hooks/useCategory';
import EelectronicsCard from './EelectronicsCard';

const Electronics = () => {
    const [category] = useCategory();
    const electronicsProducts = category.filter(item => item.category === "Electronics");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://zit.ng/cdn/shop/articles/samsung-range-of-products_1170x.jpg?v=1635185254" alt="" />
            </div>
            <div>
                {
                    electronicsProducts.map(product => <EelectronicsCard
                    key={product._id}
                    product={product}
                    ></EelectronicsCard>)
                }
            </div>
        </div>
    );
};

export default Electronics;