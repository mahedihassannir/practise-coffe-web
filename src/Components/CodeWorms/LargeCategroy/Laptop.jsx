import React from 'react';
import useCategory from '../Hooks/useCategory';
import LaptopCard from './LaptopCard';

const Laptop = () => {
    const [category] = useCategory();
    const laptopProduct = category.filter(item => item.category === "Laptop Computer");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://as2.ftcdn.net/v2/jpg/05/12/72/75/1000_F_512727551_nydwZiwXSq7LmoN9lf6LvUJJ7N8HvoX3.jpg" alt="" />
            </div>
            <div>
                {
                    laptopProduct.map(product => <LaptopCard
                    key={product._id}
                    product={product}
                    ></LaptopCard>)
                }
            </div>
        </div>
    );
};

export default Laptop;