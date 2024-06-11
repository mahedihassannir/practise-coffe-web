import React from 'react';

const BankAccount = () => {
  return (
    <div>
     <h1 className='font-bold text-2xl'> Bank Account</h1>
<div className='bg-base-100 space-y-4 py-10 px-5'>

<div className='grid grid-cols-2'>
<p>Account Title*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Account Title' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Account Number*</p>
<input type="text" className='border-black hover:bg-gray-100 border px-2' placeholder='Enter Your Account Number' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Bank Name Of MFS*</p>
<select name="" className='border border-black w-full' id="">
<option value="Bangladesh">Dutch Bangla</option>
<option value="Dutch Bangla">Dutch Bangla</option>
<option value="Bkash">Bkash</option>
<option value="Bangladesh">Nagad</option>
</select>
</div>
<div className='grid grid-cols-2'>
<p>Branch Name*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Branch Name' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Routing Number*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your Routing Number' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>IBAN*</p>
<input type="text" className='border-black border hover:bg-gray-100 px-2' placeholder='Enter Your IBAN' name="" id="" />
</div>
<div className='grid grid-cols-2'>
<p>Upload Cheque Copy*</p>
<input type="file" className='border-black hover:bg-gray-100 px-2' name="" id="" />
</div>


<hr className='h-.5 bg-gray-200' />
<div className='flex justify-end pt-5'>
<button className='bg-orange-500 px-5 py-2 rounded-md text-white font-bold'>Submit</button>
</div>
</div>   

 </div>
  );
};

export default BankAccount;