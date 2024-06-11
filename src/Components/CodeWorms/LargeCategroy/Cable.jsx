import React from 'react';
import useCategory from '../Hooks/useCategory';
import CableCard from './CableCard';

const Cable = () => {
    const [category] = useCategory();
    const cableProduct = category.filter(item => item.category === "Electrical Cable");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Cool-Gadget-Website-Banner-Design-1180x664.jpg" alt="" />
            </div>
            <div>
                {
                    cableProduct.map(product => <CableCard
                    key={product._id}
                    product={product}
                    ></CableCard>)
                }
            </div>
        </div>
    );
};

export default Cable;