import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import UseUserOrder from '../../../Hooks/userOrer/UserOrer';
import './UserProgress.css';
import { CiMenuKebab } from 'react-icons/ci'
import Rating from 'react-rating';
import useUserProfile from '../../../Hooks/user/userProfile';
import { useEffect, useState } from 'react';
const UserProgress = () => {
    const progressValue = 'processing'; // it can be processing, placed, shipped, or delivered pp

    const authToken = localStorage.getItem("userToken")
    // console.log(authToken);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/order_history`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            };
        };

        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    // console.log(products?.result);
    return (
        <div>

            <div>
                <section className="bg-white p-6">
                    <div className="flex justify-between gap-0 items-center">
                        <div>
                            <p>Order ID <span className='font-bold'>12123123</span></p>
                            <p>Place On <span className='font-bold'>12,March 2016</span></p>
                        </div>
                        <button className='font-bold text-red-500 mr-2 '>View Details</button>
                    </div>

                    <hr />

                    <div className="flex flex-col  md:flex-row justify-between ">
                        <div className='font-bold'>
                            <p className=' text-3xl mt-2'>Blade High Heels Sandals</p>
                            <div className='text-gray-500'>
                                <p className=''>Qt: 5 Pair</p>
                                <p className='my-2 text-2xl text-black'>$1,900</p>
                                <p>Tracking Status On: 11:30pm, Today</p>
                            </div>
                            <p className='text-red-500 p-2 rounded my-2 border border-red-500 w-[50%]'>Reached, Cumilla</p>
                        </div>
                        <div className='flex justify-center '>
                            <img className="w-[100%] h-40 object-cover mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqvZ_SoPlVM0REGEjcjVcLMiOwCz9XT4k1A&usqp=CAU" alt="" />
                        </div>
                    </div>

                    <div className="step-wizard my-5 font-bold">
                        <ul className="step-wizard-list">
                            <li className={`step-wizard-item ${progressValue === 'processing' && 'current-item'}`}>
                                <span className="progress-count">1</span>
                                <span className="progress-label">Processing</span>
                            </li>
                            <li className={`step-wizard-item ${progressValue === 'placed' && 'current-item'}`}>
                                <span className="progress-count">2</span>
                                <span className="progress-label">Placed</span>
                            </li>
                            <li className={`step-wizard-item ${progressValue === 'shipped' && 'current-item'}`}>
                                <span className="progress-count">3</span>
                                <span className="progress-label">Shipped</span>
                            </li>
                            <li className={`step-wizard-item ${progressValue === 'delivered' && 'current-item'}`}>
                                <span className="progress-count">4</span>
                                <span className="progress-label">Delivered</span>
                            </li>
                            <div className="invisible">
                                <li className={`step-wizard-item hhhh ${progressValue === 'pp' && 'current-item'}`}>
                                    <span className="progress-count">4</span>
                                    <span className="progress-label">pp</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <hr />
                    <div className='flex justify-evenly items-center font-bold text-red-500 mt-2'>
                        <button>Track</button>

                        <button>Cancel</button>
                        <button>Pre-Pay</button>
                        <CiMenuKebab className='text-2xl text-gray-500' />
                    </div>

                    {/* this is the order product section */}




                    {/* this is the order product section ends */}

                </section>
                <div className='min-w-[900px] bg-white px-2 rounded-md'>
                    <table className='text-[11px]  w-full'>
                        {/* order table head  */}
                        <thead>
                            <tr className='uppercase   py-5 text-blue-600'>
                                <th className='w-[8%] '>#Order</th>
                                <th className='w-[20%] '>Product</th>
                                <th className='w-[20%]'>Category</th>
                                <th className='w-[20%]'>Payment</th>
                                <th className='w-[20%]'>Order Status</th>
                                <th className='w-[12%]'>products</th>
                            </tr>
                        </thead>

                        {/* order tabel body  */}
                        {products?.result?.filter((res) => res.status === 'pending').map((res, index) => (
                            <tbody className='font-bold '>
                                <tr className=' '>
                                    {/* id col  */}
                                    <td className='text-blue-600 w-[8%] '>
                                        #<span>{index + 1}</span>
                                    </td>

                                    {/* product and product image  */}
                                    <div className='mr-10'>
                                        <img
                                            src={res.products[0]?.product?.product_images[0]} // Assuming product images are stored in an array
                                            alt={""} // Assuming product name is available
                                            className='w-16 h-16 rounded-md'
                                        />
                                    </div>

                                    {/* category  */}
                                    <td className=' w-[20%]'>
                                        <div className='flex items-center gap-4'>
                                            <h1>{res.products[0]?.product?.category}</h1>
                                        </div>
                                    </td>

                                    {/* payment */}
                                    <td className=' w-[20%] flex-col items-start'>
                                        <p className=''>
                                            $<span>{res.totalPrice}</span>
                                        </p>
                                        <small>
                                            <p className='text-gray-500'>{res.paymentMethod}</p>
                                        </small>
                                    </td>

                                    {/* order status  */}
                                    <td className=' w-[20%]'>
                                        <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                            {res.status}
                                        </div>
                                    </td>
                                    {/* rating  */}
                                    {/* <td className=' w-[12%]'>
                                        <Rating
                                            readonly
                                            placeholderRating={3.5}
                                            emptySymbol={
                                                <FaStarHalfAlt className='text-yellow-500' />
                                            }
                                            placeholderSymbol={
                                                <FaStar className='text-yellow-500' />
                                            }
                                        />
                                    </td> */}
                                    <td className=' w-[12%]'>
                                        <p>{res.products.length}</p>
                                    </td>
                                </tr>



                            </tbody>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UserProgress;





