import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaDollarSign, FaExclamationCircle, FaGreaterThan, FaToggleOn, } from 'react-icons/fa';
import UseSellerDeliveredData from '../../../../Hooks/UsesellerdeliveredData/UsesellerdeliveredData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from 'autoprefixer';
import Modal from 'react-responsive-modal';
import { useNavigation } from 'react-router-dom';
// here is the all imports


const AccStatement = () => {
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open, setOpen] = useState(false);

  const [errMessage, seterr] = useState();//1
  // 2
  const [selectValue, Setselect] = useState(null);//2
  // 3
  const [deliveredData, refetch] = UseSellerDeliveredData();//3
  // 4
  const [validationError, setValidationError] = useState();
  //5 
  const [paymentHistory, setPaymentHistory] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();


  const [seller, SetSeller] = useState(null);

  const sellerAuthToken = localStorage.getItem("sellerToken");

  useEffect(() => {

    const fetchData = async () => {



      try {
        const response = await axios.get(`http://api.ecom-bd.com/api/v1/seller/profile`, {
          headers: { Authorization: `Bearer ${sellerAuthToken}` }
        });
        const sellerData = response.data;
        SetSeller(sellerData);
        // console.log({ sellerData });
        // console.log(sellerData);

        // Set sellerData in your component state or context for rendering.
      } catch (error) {
        console.error('Error fetching seller data:', error);
      };
    };

    fetchData();

  }, []);
  // console.log(seller);
  // console.log(seller.result.sellerProfile._id);
  const sellerId = localStorage.getItem("sId");
  // refetch();




  const handleSelection = (e) => {

    Setselect(e.target.value)

  }
  // console.log(selectValue);



  // console.log("121212", deliveredData);


  const totalMoney = seller?.sellerAccountBalance


  const handleFromOnSubmit = (e) => {
    e.preventDefault();

    const from = e.target;

    const withwraAmount = from.amount.value
    const paymentMethod = selectValue
    const mobilenumber = from.mobilenumber.value
    const email = from.email.value
    const password = from.password.value
    const ref = from.ref.value
    // console.log(password);
    // console.log(email);

    if (seller?.result?.sellerProfile?.sellerBalance < withwraAmount) {

      seterr("NOT ENOUGH MONEY ")
      return toast.error(`তোলার জন্য পর্যাপ্ত টাকা নেই ${seller?.result?.sellerProfile?.sellerBalance} 💸`)

    }

    if (withwraAmount > seller?.result?.sellerProfile?.sellerBalance) {

      seterr(!errMessage)
      return toast.error(`তোলার জন্য পর্যাপ্ত টাকা নেই ${totalMoney} 💸`)
    }


    if (mobilenumber.length !== 11 && mobilenumber.length < 11) {


      return toast.warn("YOUR NUMBER ARE NOT 11 digit")


    }

    const Data = {

      email: email,
      password: password,
      amount: withwraAmount,
      paymentMethod: paymentMethod,
      bankAccountName: paymentMethod,
      bankAccountNumber: mobilenumber,
      mobile: mobilenumber,
      ref: ref

    }


    fetch(`http://api.ecom-bd.com/api/v1/seller/${sellerId}/withdraw_req`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sellerAuthToken}`
      },
      body: JSON.stringify(Data)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        // console.log(data.error)

        setValidationError(data.error)
        if (data.error) {
          toast.error(data.error)
        }
        if (data.code === 201) {
          toast.success("অনুরোধ সফলভাবে জমা দেওয়া হয়েছে")
          return navigate("/sellerhome")
        }

      })





    // console.log(Data);

  }



  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');

  const handleWithdrawalMethodChange = (e) => {
    setWithdrawalMethod(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.ecom-bd.com/api/v1/seller/${sellerId}/payment_history`, {
          headers: { Authorization: `Bearer ${sellerAuthToken}` }
        });
        const historyData = response.data;
        setPaymentHistory(historyData);
        // console.log(historyData);
        // Set sellerData in your component state or context for rendering.
      } catch (error) {
        console.error('Error fetching seller data:', error);
      };
    };
    fetchData();
  }, []);

  // console.log(paymentHistory);

  refetch();
  return (
    <div className='bg-base-100 pb-10 px-5'>


      <ToastContainer />
      <div className="flex items-center ">

        <h2 className='text-2xl font-bold '>Account Statement</h2>


        <h1 className='font-semibold lg:text-lg lg:pl-20 text-red-300'>সর্বোচ্চ মাসিক উত্তোলনের পরিমাণ <span className='text-red-500'>৫</span> লাখ টাকা</h1>


      </div>
      <div className='lg:flex md:flex gap-10'>
        <div>
          <h2 className='text-xl font-bold py-4'>পেমেন্ট পদ্ধতি</h2>
          {/* this is the acc div  */}
          <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded space-y-4'>
            <div className='flex justify-between gap-2 p-3'>
              <form onSubmit={handleFromOnSubmit} className='relative w-3/4'>

                {/* this div is for the select payment method */}
                <div className="">
                  <label htmlFor="" className=''>
                    <span className='text-red-500 font-medium'> 💅select payment method</span>
                  </label>
                  <br />
                  {/* here is the select options */}
                  <select onChange={handleSelection} className=' py-2 px-4 border-2 border-green-500 hover:border-blue-600 rounded-md' value={selectValue} required>
                    {/* 1 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Select </option>
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Bkash</option>
                    {/* 2 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Nagad </option>
                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Rocket </option>
                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>from e-com office</option>
                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Bank transfer</option>
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Upay</option>

                    {/*  */}

                  </select>
                  {/* here is the select options ends */}

                </div>
                {/* this div is for the select payment method ends */}

                {/* recive ammount number  */}

                <div className="mt-4">
                  <label htmlFor="">
                    <span>Mobile Number for money receive 💲</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-2 pl-1  rounded-md  focus:text-blue-500' type="number" name="mobilenumber" placeholder='Mobile number for money receive' required />
                </div>
                {/* recive ammount number  ends */}

                {/* this div is for the amount  */}
                <div className="mt-3">

                  <label htmlFor="">
                    {
                      validationError ?
                        <span className='text-red-600 font-semibold'> {validationError}</span>
                        :
                        <span> write your amount💲</span>
                    }

                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-3 pl-2 rounded-md  focus:text-blue-500' type="number" name="amount" placeholder='Write your amount 💲' required />
                </div>
                <div className="mt-3">
                  <label htmlFor="">
                    <span>ref</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-3 pl-2 rounded-md  focus:text-blue-500' type="text" name="ref" placeholder='Write your ref' required />

                </div>
                {/*  */}
                <p className='font-semibold mt-5 text-red-500 animate-pulse'>নিরাপত্তা এর জন্য ইমেইল অ্যান্ড পাসওয়ার্ড দিন
                </p>
                <div className="">

                  <label htmlFor="">
                    <span> email</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-3 pl-2 rounded-md  focus:text-blue-500' type="email" name="email" placeholder='Write your email ' required />

                </div>
                <div className="mt-3">

                  <label htmlFor="">
                    <span>password</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-3 pl-2 rounded-md  focus:text-blue-500' type="password" name="password" placeholder='Write your password' required />

                </div>
                {/* this div is for the amount  */}

                {/* this div is for the withawra payment btn */}

                <div className="mt-5 pl-2 ">
                  <button type='submit' className=" hover:text-black font-semibold py-2 px-3 bg-orange-600 text-white rounded-md">
                    withdraw now
                  </button>


                </div>
                {/* this div is for the withawra payment btn ends */}
              </form>
              {/* ends of the payment selection */}

              {/* satrts balance sheet */}
              <div className='space-y-3 w-1/2 '>
                <p className='text-xl '>Main balance</p>
                <h2 className='text-xl  font-semibold'>BDT
                  <span className='pl-2 pr-2 bg-blue-800 text-white'>{seller?.result?.sellerProfile?.sellerBalance}</span>
                  <span>💸</span>
                </h2>
                <button className='px-3 py-1 text-white rounded-lg font-bold text-center bg-orange-500 text-xl'>Top Up</button>
                <p className='w-12 h-10'><FaToggleOn className='w-12 h-12 text-orange-600'></FaToggleOn></p>
              </div>
              {/* satrts balance sheet */}
              {/* ends */}
            </div>
            <hr className='px-3 h-0.5' />
            <div className='flex justify-between px-4 py-4'>
              <p className='text-xl'>Promotional credit balance</p>
              <p className='flex gap-x-3 font-semibold items-center text-xl'>2,500 টাকা <span> <FaExclamationCircle className='text-orange-600'></FaExclamationCircle> </span></p>
            </div>
          </div>
        </div>
        {/* ends */}
        <div>
          <h2 className='text-xl font-bold p-4'>Monthly Summary</h2>
          <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded'>
            <div className='bg-base-300 flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>পর্যাপ্ত টাকা</p>
              <p className='text-xl font-semibold'>{seller?.result?.sellerProfile?.sellerBalance} টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8  p-4'>
              <p className='text-xl'>Bonus </p>
              <p className='text-xl font-semibold'>৫ টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Add-Top Up-Store Earning</p>
              <p className='text-xl font-semibold'>10 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Less:Net Ad spend this month</p>
              <p className='text-xl font-semibold'>20 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Less:Tax dedication</p>
              <p className='text-xl font-semibold'>0 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Available Credit</p>
              <p className='text-xl font-semibold'>5 বার</p>
            </div>

          </div>
        </div>
      </div>

      <div className='flex gap-6 items-center mt-10'>
        <p className='text-xl text-orange-600'>Transaction History</p>
        <p className='text-xl'>Invoices</p>
      </div>
      <hr className='h-1.5 mt-2  w- bg-orange-600' />

      {/* 2 input field create */}
      <div className='flex justify-end gap-5 mt-8 pb-5'>
        <select name="" className=" border-2 border-gray-500 px-2 w-1/3 text-lg font-semibold  text-gray-600" id="">
          <option value="">Transaction Type</option>
          <option value="Bkash">Bkash</option>
          <option value="Nagad">Nagad</option>
          <option value="Rocket">Rocket</option>
        </select>
        <div className='border-2 border-gray-500 flex gap-5'>
          <span className='font-semibold'>Start date:</span>
          <input type="date" name="" id="" />
          <span className='font-semibold'>End date:</span>
          <input type="date" name="" id="" />
        </div>
      </div>

      <div className="overflow-x-auto my-5 w-full border rounded-xl">
        <table className="table w-full">
          {/* head */}
          <thead className=''>
            <tr className='grid grid-cols-5'>
              <th>Transaction Date</th>
              <th>Ad Tpe</th>
              <th>Transaction Type</th>
              <th>Transaction Number</th>
              <th>পরিমাণ</th>
            </tr>
          </thead>
          {
            paymentHistory?.result.map(res =>
              <tbody>
                {/* row 1 */}
                <tr className='grid grid-cols-5 text-lg'>
                  <td>{res.withdrawalDate}</td>
                  <td>status</td>
                  <td>{res.paymentMethod}</td>
                  <td>{res._id}</td>
                  <td>BDT {res.withdrawalAmount}  টাকা</td>
                </tr>
              </tbody>)
          }
        </table>
      </div>
    </div>
  );
};

export default AccStatement;

