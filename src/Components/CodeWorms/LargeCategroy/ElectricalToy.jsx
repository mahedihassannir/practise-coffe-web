import React from 'react';
import useCategory from '../Hooks/useCategory';
import ElectircalToyCard from './ElectircalToyCard';

const ElectricalToy = () => {
    const [category] = useCategory();
    const toyCategory = category.filter(item => item.category === "Electrical Toys");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://www.allkindathings.co.uk/media/wysiwyg/banner3.jpg" alt="" />
            </div>
            <div>
                {
                    toyCategory.map(product => <ElectircalToyCard
                    key={product._id}
                    product={product}
                    ></ElectircalToyCard>)
                }
            </div>
        </div>
    );
};

export default ElectricalToy;