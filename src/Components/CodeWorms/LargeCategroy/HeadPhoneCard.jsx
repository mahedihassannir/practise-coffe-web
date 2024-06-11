import React from 'react';

const HeadPhoneCard = ({product}) => {
    const {name, price, image} = product;
    
    return (
        
        <div className='ml-4 shadow-2xl text-center relative w-56 mt-8 mb-8 bg-slate-100 border'>
            <div className=''>
                <div>
                    <img className='w-full h-40' src={image} alt="" />
                    <span className='absolute top-0 bg-[#FC9E66] px-4 right-0 text-white font-bold'>-5%</span>
                </div>
                <p className='font-bold mt-4'>Name: {name}</p>

                <p className='font-bold mt-8 text-orange-500'>Price: {price}</p>
                <p className='mt-2'><del>TK300</del> -73%</p>
                <button className='px-16 py-1 bg-[#FC9E66] mt-4 text-white font-bold'>Add To Cart</button>
            </div>
        </div>
    );
};

export default HeadPhoneCard;