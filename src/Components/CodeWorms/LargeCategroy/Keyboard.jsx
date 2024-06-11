import React from 'react';
import useCategory from '../Hooks/useCategory';
import KeyboardCard from './KeyboardCard';

const Keyboard = () => {
    const [category] = useCategory();
    const keyboardProduct = category.filter(item => item.category === "Wireless Keyboards");

    return (
        <div>
            <div>
            <img className='w-full h-96' src="https://as2.ftcdn.net/v2/jpg/05/12/72/75/1000_F_512727551_nydwZiwXSq7LmoN9lf6LvUJJ7N8HvoX3.jpg" alt="" />
        </div>
        <div>
            {
                keyboardProduct.map(product => <KeyboardCard
                key={product._id}
                product={product}
                ></KeyboardCard>)
            }
        </div>
        </div>
    );
};

export default Keyboard;