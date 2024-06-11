import React from 'react';

const BusinessInformation = () => {
  return (
      <div>
     <h1 className='font-bold text-2xl'> Business Information</h1>
<div className='bg-base-100 space-y-4 py-10 px-5'>
<div className='grid grid-cols-2'>
<p>Legal Name/Business Owner Name*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Legal Name/Business Owner Name' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Legal Form *</p>
<input type="text" className='border-black hover:bg-gray-100 border px-2' placeholder='Enter Your Legal Form' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Address*</p>
<input type="number" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Address' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>City/Town*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Country Region*</p>
<div className='flex item-center'>
<select name="" className='border border-black w-full' id="">
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
</div>
<div className='grid grid-cols-2'>
<p>Person in Charge Name*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Business Registration Number*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Upload ID Copy-Font Side*</p>
<input type="file" className='border-black  hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Upload ID Copy-Back Side*</p>
<input type="file" className='border-black hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>

<div className='grid grid-cols-2'>
<p>National Identity Card No*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your City/Town' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Division*</p>
<select name="" className='border border-black w-full' id="">
<option value="Bangladesh">Dhaka</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
<div className='grid grid-cols-2'>
<p>City*</p>
<select name="" className='border border-black w-full' id="">
<option value="Mirpur">Mirpur</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
<div className='grid grid-cols-2'>
<p>PostCode*</p>
<select name="" className='border border-black w-full' id="">
<option value="post code">Post Code</option>
<option value="Bangladesh">2290</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>
<div className='grid grid-cols-2'>
<p>ID Type*</p>
<select name="" className='border border-black w-full' id="">
<option value="ID Type">ID Type</option>
<option value="Bangladesh">2290</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bangladesh">Bangladesh</option>
</select>
</div>

<hr className='h-1 bg-gray-200' />
<div className='flex justify-end pt-5'>
<button className='bg-orange-500 px-5 py-2 rounded-md text-white font-bold'>Submit</button>
</div>
</div>   

 </div>
  );
};

export default BusinessInformation;