import React from 'react';
import useCategory from '../Hooks/useCategory';
import ComputerInfo from './ComputerInfo';


const Computer = () => {
    const [product] = useCategory();
    const computerProduct = product.filter(item => item.category === "Computer Accessories");
    return (
        <div>
            <div className='w-full  mb-8'>
                <img className='w-full h-96' src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300129/74099777-computer-shop-various-computer-parts-are-on-the-table-web-flat-vector-banner.jpg" alt="" />
            </div>
           <div>
            {
                computerProduct.map(product => <ComputerInfo
                key={product._id}
                product={product}
                ></ComputerInfo>)
            }
           </div>
        </div>
    );
};

export default Computer;