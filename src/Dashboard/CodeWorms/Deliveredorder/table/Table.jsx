
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import '../../../../ExtraCss/ExtraCss.css'
import Rating from 'react-rating';
import { FaBeer, FaStar, FaStarHalfAlt } from "react-icons/fa";



const Table = ({ sellerdeliveredData }) => {
    // console.log(sellerdeliveredData);
    return (
        <div>


            {/* Order table  */}
            <div className='mt-4 bg-white rounded px-3 overflow-x-auto'>
                <div className='min-w-[900px]'>
                    <table className='text-[11px]  w-full'>
                        {/* order table head  */}
                        <thead>
                            <tr className='uppercase   py-5 text-blue-600'>
                                <th className='w-[8%] '>#delivered</th>
                                <th className='w-[20%] '>Product</th>
                                <th className='w-[20%]'>Quantity</th>
                                <th className='w-[20%]'>Payment</th>
                                <th className='w-[20%]'>Order Status</th>
                                <th className='w-[12%]'>date</th>
                            </tr>
                        </thead>

                        {/* order tabel body  */}
                        <tbody className='font-bold'>

                            {
                                sellerdeliveredData?.result?.map((res, index) => (
                                    <tr key={index} className=' '>
                                        {/* id col  */}
                                        <td className='text-blue-600 w-[8%] '>
                                            #<span className="text-green-800">{index+1}</span>
                                        </td>

                                        {/* product and product image  */}
                                        <td className='w-[20%]'>
                                            {res.products.map((product, productIndex) => (
                                                <div key={productIndex} className='flex items-center'>
                                                    <div>
                                                        {/* Render your product image here */}
                                                        <img className="w-10 h-10" src={product?.product?.product_images[0]} alt='' />
                                                    </div>
                                                    <div>
                                                        <p>{/* Render your product name here */}</p>
                                                        <div className='text-[10px] text-gray-400'>
                                                            {/* Render other product details here */}
                                                            <p className="text-[13px]">Regular Price: {product?.product?.price}</p>
                                                            <p className="text-[13px]">Sale Price: <span className="text-red-500">{product?.product?.price}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </td>

                                        {/* category  */}
                                        <td className='w-[20%]'>
                                            {res?.products?.length}
                                        </td>

                                        {/* payment */}
                                        <td className='w-[20%] flex-col items-start'>
                                            <small>
                                                <p className='text-gray-500'>COD(cash on delivery)</p>
                                            </small>
                                        </td>

                                        {/* order status  */}
                                        <td className='w-[20%]'>
                                            <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                                {res.status}
                                                
                                            </div>
                                        </td>
                                        {/* rating  */}
                                        <td className='w-[12%]'>
                                            {res.date}
                                        </td>
                                    </tr>
                                ))
                            }

                            {/* ends of all table */}



                        </tbody>
                    </table>
                </div>
            </div>

            {/* pagination for order  */}
            <div className='px-3 mt-4'>
                <div className='text-xs font-semibold flex items-center gap-2'>
                    <div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
                        <BiChevronsLeft />
                    </div>
                    <button className='w-[25px] h-[25px] bg-[#035ECF] flex items-center justify-center text-white rounded'>
                        1
                    </button>
                    <button className='w-[25px] h-[25px] border border-[#035ECF] flex items-center justify-center text-[#035ECF] hover:bg-[#035ECF] hover:text-white duration-150 rounded'>
                        2
                    </button>

                    <div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
                        <BiChevronsRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;