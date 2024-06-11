import { Link } from 'react-router-dom';
import "./SellerSeeting.css"
import { useState } from 'react';
const SellerSeeting = () => {
const {active,SetActive} = useState(false)
    return (
        <div>
            <div>
                <h2 className='text-3xl pb-5 px-5 font-bold'>Profile</h2>

                <div className=' text-lg font-semibold flex gap-5 justify-between px-5'>
                    <Link to={`/dashboard/sellerSetting/sellerAccount`} className={active ? 'no':'active-link'}>
                        Seller Account
                    </Link>
                    <Link to={`/dashboard/sellerSetting/businessInformation`} className='active-link'>
                        Business Information
                    </Link>
                    <Link to={`/dashboard/sellerSetting/bankAccount`} className='active-link'>
                        Bank Account
                    </Link>
                    <Link to={`/dashboard/sellerSetting/commissions`} className='active-link'>
                        Commissions
                    </Link>
                    <Link to={`/dashboard/sellerSetting/sellerLogo`} className='active-link'>
                        Seller Logo
                    </Link>
                </div>
<hr className='h-1 px-8 my-2 bg-gray-500' />

            </div>



        </div>
    );
};

export default SellerSeeting;