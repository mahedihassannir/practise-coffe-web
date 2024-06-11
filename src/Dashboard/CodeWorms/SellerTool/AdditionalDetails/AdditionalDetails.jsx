import { DatePicker } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { RangePicker } = DatePicker;
const AdditionalDetails = () => {
  return (
    <div className='bg-base-300 p-3'>
      <div className='p-5 bg-base-200 space-y-5'>
<h2 className='text-lg font-bold'>Additional Details</h2>
<div className='grid grid-cols-2 gap-5 mt-8'>
<div className='flex items-center gap-8'>
<h3>Collect Start Time*</h3>
<input type="date" className='border w-[50%] border-black' name="" id="" />
</div>
<div className='flex items-center gap-20'>
<h3> Redeem Duration</h3>
  <ul className="">
          <li className="">
            <RangePicker></RangePicker>
          </li>
        </ul>
</div>
</div>
<div className='flex gap-5'>
<h3 className='text-lg'>Display Area*</h3>
<div className='pl-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
<div>
<p className='text-lg font-semibold'>Regular Channel</p>
<p className='text-lg'> Vouchers can be collected by buyer and they can use it at checkout</p>
</div>
<div>
<p className='text-lg font-semibold'>Offline</p>
<p className='text-lg'> Vouchers to be shared directly through link</p>
</div>
<div>
<p className='text-lg font-semibold'>Live Stream</p>
<p className='text-lg'> Vouchers to be share in live stream onluy</p>
</div>
</div>
</div>
<div className='grid grid-cols-2 gap-5 mt-8'>
<div className='flex items-center gap-12'>
<h3>Total Vouchers*</h3>
<input type="Number" className='border w-[50%] border-black px-3' name="" id="" />
</div>
<div className='flex items-center gap-10'>
<h3>Use Limit per customer*</h3>
<input type="Number" className='border w-[50%] border-black px-3' name="" id="" />
</div>
</div>

<div className='flex gap-2 items-center'>
<div className='flex items-center w-[50%] gap-20'>
<h3>Apply To*</h3>
<select name="" className='border ml-1 border-black' id="">
<option value="Specific Product">Specific Products</option>
<option value="Shirt">Shirt</option>
<option value="Pant">Pant</option>
</select>
</div>
<button className='text-lg text-orange-500 hover:text-white hover:bg-orange-500 font-semibold rounded px-5 py-1 border border-orange-500'>Add Products</button>
</div>
</div>

<div className='mt-5 bg-base-200 p-6'>
<div className='flex justify-end'>
<button className='text-lg mr-8 font-bold border border-gray-400 px-4 py-1.5 bg-gray-300 hover:text-white hover:bg-red-500 rounded'>Cancel</button>
<Link to={`/dashboard/sellertools/voucherDetails`}><button className='text-lg text-white font-bold border border-gray-400 px-4 py-1.5 bg-green-600 hover:text-white hover:bg-green-700 rounded'>Submit</button></Link>
</div>
</div>
    </div>
  );
};

export default AdditionalDetails;