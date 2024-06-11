import React from 'react';

const SellerLogo = () => {
  return (
    <div className='bg-base-100 flex gap-20 p-10'>
      <div className=''>
        <h1 className='text-2xl font-bold'>Upload Your Logo</h1>
        <div className='border border-black w-40 h-40 pt-10'>
          <input type="file" className='w-full' name="" id="" />
          <p className='text-center font-semibold  text-xl'>Upload</p>
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Current Logo</h2>
        <div className='border border-black w-40 h-40'>

        </div>
      </div>
    </div>
  );
};

export default SellerLogo;