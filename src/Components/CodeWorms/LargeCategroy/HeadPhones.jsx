import React from 'react';
import useCategory from '../Hooks/useCategory';
import HeadPhoneCard from './HeadPhoneCard';

const HeadPhones = () => {
    const[category] = useCategory();
    const headphoneProduct  = category.filter(item => item.category === "Headphones");
    // console.log('headphones', headphoneProduct);
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/headphone-banner-design-template-c46c02738002f860b1bee00e378eff4a_screen.jpg?ts=1669277015" alt="" />
            </div>
            <div>
                {
                    headphoneProduct.map(product => <HeadPhoneCard
                    key={product._id}
                    product={product}
                    ></HeadPhoneCard>)
                }
            </div>
        </div>
    );
};

export default HeadPhones;