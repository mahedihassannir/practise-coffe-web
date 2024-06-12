/**
 * Author: mahedi
 * description: Cartview
 * date: 17aug,2023
 *
 * @format`
 */
import { useContext, useEffect, useState } from "react";
import useCustomers from "../../../../Hooks/Fantastic/useCustomers";
import SingleCartProductCard from "../SingleCartProductCard/SingleCartProductCard";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";
import UseCartHook from "../../../../Hooks/UseCartHook/UseCartHook";


const Cartview = ({ productsData }) => {
    const { user } = useContext(ContexM)
    // const { customers } = useCustomers()
    // const filterCustomer = user && user.email && customers.some(customer => customer.email === user.email)
    // 	? customers.filter(customer => customer.email === user.email)
    // 	: [];




    const [cart, refetch] = UseCartHook();

    // const [data, SetData] = useState([]);

    // useEffect(() => {

    // 	fetch(`https://api.ecom-bd.com/carts`)
    // 		.then(res => res.json())
    // 		.then(data => {
    // 			SetData(data)
    // 		})

    // }, [])

    // console.log(data);
    refetch();
    return (
        <div className='flex flex-col gap-5'>
            {/* user address  */}
            <div className='text-xs p-5 border rounded font-semibold'>
                <div>
                    <h2>
                        Deliver to:  "Name Unknown"
                    </h2>

                    <div className='mt-3 flex items-center gap-3'>
                        {/* address  */}
                        <p>
                            <span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
                                HOME
                            </span>
                        </p>

                        {/* number and address  */}
                        <div className='flex items-center gap-3 divide-x'>
                            <p>Number Unknown</p>
                            <p className='pl-3'>

                            </p>
                        </div>
                        <div>
                            {/* TODO: emplement change funtionality */}
                            <button className='text-[#2ABBE8]'>Change</button>
                        </div>
                    </div>

                    {/* email  */}
                    <div className='mt-3 flex items-center gap-5'>
                        <p>Email to:</p>
                        <div className='flex items-center gap-2'>
                            <p></p>
                            {/* TODO: emplement change funtionality */}
                            <button className='text-[#2ABBE8]'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* data product */}
            <div className='flex flex-col gap-5'>
                {cart.map(cart => (
                    <SingleCartProductCard singleProductData={cart} />
                ))}
            </div>
        </div>
    );
};

export default Cartview;
