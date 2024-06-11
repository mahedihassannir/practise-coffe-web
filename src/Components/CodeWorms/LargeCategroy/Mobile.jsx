import React from 'react';
import useCategory from '../Hooks/useCategory';
import MobileCard from './MobileCard';

const Mobile = () => {

    const [category] = useCategory();
    // console.log(category);

    const mobileAccessories = category.filter(item => item.category === 'Mobile Accessories');


    return (
        <div>
            <div className='w-full'>
                <img className='w-full' src="https://cdn.wes.com.au/Cellink/slideshow/images/Cellink_Banner_1.jpg" alt="" />
            </div>
            <div className='mt-8 mb-8'>
                {
                    mobileAccessories.map(product => <MobileCard
                    key={product._id}
                    product={product}
                    ></MobileCard>)
                }
            </div>
        </div>
    );
};

export default Mobile;