import React from 'react';
import { Link } from 'react-router-dom';


const Habib = () => {
    return (
        <div>


            {/* {second home page banner section} */}
            <section>

                <div className='my-5'>

                    {/* banner image */}
                    <img className='w-full  h-72' src="https://i.ibb.co/BsXFLb7/bannerimg1.jpg" alt="" />

                </div>
            </section>

            <section className='my-5 '>
                {/* catagory section there are make card responsiv*/}

                <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6'>
                    {/* image div1 */}
                    <Link to="/food" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="https://i.ibb.co/7jwt6sH/6b396809-87e7-435d-ba7b-5d69699371ba.png" alt="" />

                            <h1 className='text-lg font-semibold'>Food</h1>

                        </div>
                    </Link>

                    {/* image div2 */}
                    <Link to="/fashion" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="https://i.ibb.co/qNNNSkV/773d0210-eda1-4fd6-8b8d-a92dafbe23bd.png" alt="" />

                            <h1 className='text-lg font-semibold'> Fashion</h1>

                        </div>
                    </Link>

                    {/* image div3 */}
                    <Link to="/beauty" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="https://i.ibb.co/qWHkXH0/d336362c-7d67-4b22-9f96-3b2a60297e0f.png" alt="" />

                            <h1 className='text-lg font-semibold'> Beauty</h1>

                        </div>
                    </Link>

                    {/* image div4 */}
                    <Link to="/homeacc" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="https://i.ibb.co/h8CB1K3/6352f3d8-678c-4630-9eb3-75aae8c1b213.png" alt="" />

                            <h1 className='text-lg font-semibold'> HomeAcc</h1>

                        </div>
                    </Link>

                    {/* image div5 */}
                    <Link to="/kids" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="data:image/png;base64,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" alt="" />

                            <h1 className='text-lg font-semibold'> Kids</h1>

                        </div>
                    </Link>

                    {/* image div6 */}
                    <Link to="/below499" className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <div className='flex justify-center gap-6 items-center'>
                            <img className=' h-full p-1 w-10' src="https://i.ibb.co/nmvCg9m/9f19fb02-e022-473a-873d-bb99306c9263.png" alt="" />

                            <h1 className='text-lg font-semibold'> Low Price</h1>

                        </div>
                    </Link>

                </div>
                {/* parent div ends */}
            </section>
        </div>
    );
};

export default Habib;