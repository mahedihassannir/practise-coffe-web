import React from 'react';
import Cartview from '../side2/Cartview';
import Deleverybox from '../side1detailes/Deleverybox';

const Parent = () => {
    return (
        <div>

            <div className='flex flex-col md:flex-row gap-5 '>
                {/* CartProductDetails section starts  team AVENGERS */}
                {/* this section for Chadnee */}
                <section className='w-full md:w-2/3 '>
                    <Cartview productsData={productsData} />

                </section>
                {/*  CartProductDetails section End */}

                {/* ------------------------------------------------- */}

                {/* PaymentDetails section starts  team AVENGERS */}
                {/* this section for MGR */}
                <section className='w-full md:w-1/3 border p-5'>
                    <Deleverybox singleProductData={productsData} />
                </section>
                {/* PaymentDetails section End  */}
            </div>

        </div>
    );
};

export default Parent;