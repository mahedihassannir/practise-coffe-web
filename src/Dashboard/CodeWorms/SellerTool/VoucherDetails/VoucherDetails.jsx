import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
// import { IconName } from "react-icons/bi";
const VoucherDetails = () => {
  return (
    <div className='bg-red-100 p-6'>
<div className='bg-sky-300 mb-5 rounded flex items-center gap-3'>
<AiFillQuestionCircle className=' px-2 w-14 h-14 text-green-600'></AiFillQuestionCircle>
<p> For code voucher.Redeem duration indicate the period where voucher is visible and redeemable.
For collectable voucher,Redeem duration indicate where voucher is redeemable while collect start time indicate where voucher is collectable. </p>
</div>


      <div className='bg-base-200 space-y-5 p-8'>
<h2 className='text-2xl font-bold'>Voucher Details</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
<div className='space-y-5'>
<div className='grid grid-cols-2'>
<p className='flex gap-1'>Voucher Type <AiFillQuestionCircle className='w-6 h-6 text-green-600'></AiFillQuestionCircle> </p>
<div className='flex item-center'>
<select name="" className='border px-2 border-black w-full' id="">
<option value="Bangladesh">Collectible Voucher</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
</div>
<div className='grid grid-cols-2 '>
<p className='flex gap-1'>Voucher Name <AiFillQuestionCircle className='w-6 h-6 text-green-600'></AiFillQuestionCircle> </p>
<input type="text" className='border px-3 border-black ' placeholder='BDT' name="" id="" />
</div>
<div className='grid grid-cols-2 '>
<p className='flex gap-1'>Discount Type <AiFillQuestionCircle className='w-6 h-6 text-green-600'></AiFillQuestionCircle> </p>
<div className='flex item-center'>
<select name="" className='border px-2 border-black w-full' id="">
<option value="Bangladesh">Money value Voucher</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
</div>
<div className='grid grid-cols-2 '>
<p className='flex gap-1'>Discount Value (off) <AiFillQuestionCircle className='w-6 h-6 text-green-600'></AiFillQuestionCircle> </p>
<input type="text" className='border px-3 border-black ' placeholder='Discount Value (off)' name="" id="" />
</div>
<div className='grid grid-cols-2 '>
<p className='flex gap-1'>Min.Order Value <AiFillQuestionCircle className='w-6 h-6 text-green-600'></AiFillQuestionCircle> </p>
<input type="text" className='border px-3 border-black ' placeholder='Min Order Value' name="" id="" />
</div>
</div>

<div className='flex justify-around gap-5 lg:w-[70%] md:w-[70%] h-[90%] items-center bg-orange-300 border border-orange-500 p-5'>
<div>
<div className='w-20 h-20 border border-black'>

</div>
<p className='text-lg font-semibold'>##001k4f$W5</p>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-orange-600">35 BDT (Off)</p>
<p className="text-md text-gray-500">Min spend 500 BDT</p>
<p className="text-lg font-semibold">Validity 7 days</p>
</div>

</div>

</div>
</div>
    </div>
  );
};

export default VoucherDetails;