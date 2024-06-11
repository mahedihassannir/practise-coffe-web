import React from 'react';
import useCategory from '../Hooks/useCategory';
import TabletCard from './TabletCard';

const Tablet = () => {
    const [category] = useCategory();
    const tabletProduct = category.filter(item => item.category === "Tablet Computers");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://as2.ftcdn.net/v2/jpg/05/12/72/75/1000_F_512727551_nydwZiwXSq7LmoN9lf6LvUJJ7N8HvoX3.jpg" alt="" />
            </div>
            <div>
                {
                    tabletProduct.map(product => <TabletCard
                    key={product._id}
                    product={product}
                    ></TabletCard>)
                }
            </div>
        </div>
    );
};

export default Tablet;