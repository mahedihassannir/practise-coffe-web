import React from 'react';
import useCategory from '../Hooks/useCategory';
import MouseCard from './MouseCard';

const Mouse = () => {
    const [category] = useCategory();
    const mouseProduct = category.filter(item => item.category === "Wireless Mice");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://as2.ftcdn.net/v2/jpg/05/12/72/75/1000_F_512727551_nydwZiwXSq7LmoN9lf6LvUJJ7N8HvoX3.jpg" alt="" />
            </div>
            <div>
                {
                    mouseProduct.map(product => <MouseCard
                    key={product._id}
                    product={product}
                    ></MouseCard>)
                }
            </div>
        </div>
    );
};

export default Mouse;