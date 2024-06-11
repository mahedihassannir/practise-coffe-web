import { DatePicker } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;
const SellerAccount = () => {
  return (
    <div>
     <h1 className='font-bold text-2xl'> Seller Account</h1>
<div className='bg-base-100 space-y-4 py-10 px-5'>
<div className='grid grid-cols-2'>
<h2>ID Seller*</h2> <p>BDAW3DDBHJ</p>
</div>

<div className='grid grid-cols-2'>
<p>First and Last Name*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your First and Last Name' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Contact Email Address*</p>
<input type="text" className='border-black hover:bg-gray-100 border px-2' placeholder='Enter Your Email Address' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Phone Number*</p>
<input type="number" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Phone Number' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Display Name/Shop Name*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Display Name/Shop Name' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Holiday Mode*</p>
<div className='flex gap- text-xl font-semibold'>
<input type="radio" className='text-red-500 w-20' name="" id="" /> <span>Yes</span>
<input type="radio" className='w-20' name="" id="" /> <span>No</span>
</div>
</div>
<div className='grid grid-cols-2 items-center'>
<p>Holiday Mode Period*</p>
       <ul className="mt-4">
          <li className="">
            <RangePicker></RangePicker>
          </li>
        </ul>
</div>
<hr className='h-.5 bg-gray-200' />
<div className='flex justify-end pt-5'>
<button className='bg-orange-500 px-5 py-2 rounded-md text-white font-bold'>Submit</button>
</div>
</div>   

 </div>
  );
};

export default SellerAccount;