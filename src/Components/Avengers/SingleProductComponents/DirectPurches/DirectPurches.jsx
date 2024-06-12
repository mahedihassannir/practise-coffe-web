import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowCircleRight, FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";
import UseCartHook from "../../../../Hooks/UseCartHook/UseCartHook";
import Modal from "react-responsive-modal";
import Useaddress from "../../../../Hooks/Useaddress/Useaddress";
import useUserProfile from "../../../../Hooks/user/userProfile";
import { ToastContainer, toast } from "react-toastify";

const DirectPurches = () => {
    const authToken = localStorage.getItem("userToken");
    // hooks
    // const navigate = useNavigate();

    const user = localStorage.getItem("userToken");
    const userProfile = useUserProfile(user);
    // console.log(userProfile?.sanitizedResult._id);

    const [address] = Useaddress();
    // console.log(address);
    // console.log(address?.result?.address?._id);
    // hooks ends
    // address related work 
    let addressData = {}

    for (let i = 0; i < address?.length; i++) {

        const url = address[i];


        addressData[`address${i}`] = url;


    }

    // console.log("22223", addressData.address0);
    // address related work ends

    const [open2, setOpen] = useState(false);

    const navigate = useNavigate();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const location = useLocation();

    // const data = location.state && location.state.singleProductData

    const productdata = location.state;

    // console.log({ productdata });


    const [open, Setopen] = useState(false)

    const handleTrueFalse = () => {


        Setopen(!open)


    }



    const deleveryFee = parseFloat(productdata?.deleveryFee)

    const [offerPrice, SetofferPrice] = useState(productdata?.price)



    const offerCode = "mmm"
    const offerTaka = 20

    useEffect(() => {
        if (inputValue?.target?.value === offerCode) {

            const totaloffer = productdata?.price - offerTaka

            // console.log({ totaloffer });

            SetofferPrice(totaloffer)


        };
    });
    const [inputValue, setInputValue] = useState('');

    const [isInputEmpty, setIsInputEmpty] = useState(true);


    // Function to handle input change
    const handleInputChange = (event) => {
        // Retrieve the value from the input field using event.target.value
        const newValue = event.target.value;
        // Update the state with the new value
        setInputValue(newValue);
        setIsInputEmpty(newValue === '');
    };


    // console.log(offerPrice);

    const totalMoney = offerPrice + deleveryFee

    const cartData = { cart0: { singleProductData: productdata } }
    const productID = Math.random().toString(36).substr(2, 9) + Date.now()

    // console.log(productdata?.singleProductData?.result._id);
    // console.log(productdata?.singleProductData?.result?.seller?._id);
    const handleDireact_order = () => {
        if (!address?.result?.address?._id) {
            navigate("/dashboard/useraddressform")
            toast.info("ডেলিভারি অ্যাড্রেস দিন");
        };
        if (isInputEmpty) {
            return toast.info("ডেলিভারি অ্যাড্রেস দিন");
        };


        // this is from the useeffect seller detailes
        // create a object into array
        const products = [productdata?.singleProductData?.result._id];
        // console.log(products);
        const data = {
            address: inputValue,
            products: [
                {
                    product: productdata?.singleProductData?.result?._id,
                    user: userProfile?.sanitizedResult?._id,
                    sellerId: productdata?.singleProductData?.result?.seller?._id,
                    quantity: productdata?.quantity,
                }
            ],
            addressId: address?.result?.address?._id
        };

        // console.log(productdata?.singleProductData?.result)
        // console.log("data fom paymentDetails", { data });


        // console.log("data fom paymentDetails", { data });
        try {
            // handle the product buy 
            fetch("http://api.ecom-bd.com/api/v1/user/buy_product", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {

                    // console.log(data);
                    if (data.code === 201) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'order successfully',
                            showConfirmButton: false,
                            timer: 5000
                        });
                        navigate("/cod_success")
                    }
                });
        } catch (error) {
            // console.log(error);
        };
    };
    // ends of the operation



    const onSubmit = () => {


        // this is from the useeffect seller detailes
        const data = {
            Username: user?.displayName,
            Useremail: user?.email,

            cart: cartData,
            productID: productID,
            deliveryStatus: "processing",
            totalMoney: totalMoney,
            address: addressData.address0

        };

        // console.log("data fom paymentDetails", { data });


        try {


            fetch("http://api.ecom-bd.com/order", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {

                    // console.log(data.url);

                    window.location.replace(data.url);
                });

        } catch (error) {
            // console.log(error);

        };
    };



    return (
        <div className="w-full  bg-[#F4F4F4]">
            <ToastContainer />

            <div className="w-11/12  py-10 mx-auto   ">


                <div className="md:flex gap-2">

                    <div className="md:w-[60%]">
                        {/* this div is for the address  */}
                        <div className='text-xs p-5 border rounded font-semibold'>
                            <div>
                                <h2>
                                    {/* Deliver to: {addressd.name} */}
                                </h2>

                                <div className='mt-3 flex items-center gap-3'>
                                    {/* address  */}
                                    <p>
                                        <span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
                                            HOME {address?.result?.address?.address} ,{address?.result?.address?.area}
                                        </span>
                                    </p>

                                    {/* number and address  */}
                                    <div className='flex items-center gap-3 divide-x'>
                                        <p>{address?.result?.address?.mobile_number}</p>
                                        <p className='pl-3'>

                                        </p>
                                    </div>
                                    <Link to="/dashboard/useraddressform">
                                        {/* TODO: emplement change funtionality */}
                                        <button className='text-[#2ABBE8]'>Change</button>
                                    </Link>
                                </div>

                                {/* email  */}
                                <div className='mt-3 flex items-center gap-5'>

                                    <p>Email to:{address?.result?.address?.email}</p>

                                    <p>
                                        <span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
                                            HOME {address?.result?.address?.city} ,{address?.result?.address?.landmark} ,{address?.result?.address?.division}
                                        </span>
                                    </p>

                                    <div className='flex items-center gap-2'>
                                        <p></p>
                                        {/* TODO: emplement change funtionality */}

                                        <Link to="/dashboard/useraddressform">

                                            <button className='text-[#2ABBE8]'>Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* this div is for the address  ends */}


                        {/* this is the added cart in the buy secton */}
                        <div className="pt-5">

                            <div className="w-full md:h-60 h-auto rounded-md shadow-lg bg-white p-3">

                                {/* <p className="pl-12 pb-1">{productdata?.singleProductData?.result?.seller.store_name}</p> */}
                                <div className="md:flex md:justify-between pl-10 ">

                                    <div className="">

                                        <img className="md:w-[60px] md:h-[60px] w-auto  h-[100px]" src={productdata?.singleProductData?.result?.product_images[0]} alt="" />

                                    </div>

                                    <div className="pl-5">
                                        <p className="font-semibold">{productdata?.singleProductData?.result?.product_name}</p>
                                    </div>
                                    <div className="pl-10  font-semibold">
                                        quantity: {productdata?.quantity}
                                    </div>
                                    <div className="pl-5 flex items-center">
                                        <TbCurrencyTaka />
                                        <span className="pl-1 font-semibold text-red-600">
                                            {productdata?.singleProductData?.result?.price}

                                        </span>
                                    </div>
                                </div>

                                <hr className="mt-2" />

                                {/* this section is for the  */}
                                <div className="md:flex justify-between items-center">



                                    <div className="p-2  w-60 h-16 mt-5 rounded-md border-2 border-bg-blue-500">

                                        <p className="flex">
                                            Standard Delivery
                                            <span className="pl-2">|</span>
                                            <span className="pl-2">10
                                            </span>
                                        </p>
                                        <p className="text-red-500 font-semibold  animate-pulse">Receive by 40 minutes</p>


                                    </div>


                                    <div className="">
                                        <p>{productdata?.quantity} Item(s). Subtotal: ৳  {productdata?.singleProductData?.result?.price * productdata?.quantity + 10}
                                            <br />
                                            Saved ৳ 100k time</p>
                                    </div>

                                </div>


                            </div>



                        </div>
                        {/* this is the added cart in the buy secton ends */}



                    </div>



                    {/* this is the product price and main buy btn  */}
                    <div className=" mt-5 mx-auto w-[99%] md:w-[37%]  p-3 bg-white rounded-md shadow-sm">


                        {/* this is the voucher and other work */}
                        <div className="">

                            <div className=" mb-2 mt-2 w-f  overflow-hidden relative">
                                <input
                                    name="address"
                                    type="text"
                                    className={`py-[10px] outline-none border rounded placeholder:text-gray-400 w-full px-2 focus:border-[#2ABBE8] duration-300 ${isInputEmpty ? 'border-red-500  border-4' : 'border-green-500'}`}
                                    placeholder="Enter address"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button className="absolute  right-0 top-1/2 -translate-y-1/2 border-l h-[50%] text-[#2ABBE8] px-3">
                                    Confirm
                                </button>
                            </div>

                            <span>Discount and Payment</span>
                            <div className="pt-2">

                                <span className="flex items-center gap-2"> <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i4/O1CN01tGyTSv1JA5gQ2yaGF_!!6000000000987-2-tps-96-96.png" alt="" /> Daraz Voucher</span>

                            </div>

                            <div className="flex justify-between py-3">

                                <span className="flex items-center gap-2"> <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i3/O1CN01O0d2d41dHgZ87WWYB_!!6000000003711-2-tps-96-96.png" alt="" /> Promo Code</span>

                                <button onClick={handleTrueFalse} className="text-gray-400 flex items-center gap-2 pr-2">
                                    enter a voucher code
                                    <FaArrowCircleRight />
                                </button>

                            </div>

                            {/* this is the input field for the voucher code */}
                            <div className="relative">
                                <div className="">
                                    {

                                        open ?
                                            <input onChange={SetinputValue} className="w-11/12 outline-none py-3 border-2 rounded:sm pl-2 focus:placeholder-green-500" placeholder="enter your Voucher" type="text" />
                                            : ""
                                    }

                                </div>

                                <div className="absolute top-0 right-0 mr-16  mt-5 hover:text-red-500 hover:cursor-pointer">
                                    {

                                        open ?
                                            <FaArrowRight className="text-lg" />
                                            : ""
                                    }

                                </div>


                            </div>


                            {/* this is the input field for the voucher code ends */}
                        </div>


                        {/* this is the voucher and other work ends */}
                        <hr className="my-5" />
                        {/*this is the payment detales ans order summary work work   */}
                        <div className="p-2">

                            <div className="">
                                <span className="text-bold text-lg">Order Summary</span>
                            </div>

                            <div className="">
                                <div className="flex justify-between pr-5">

                                    <span>Items Total </span>
                                    <span className="flex items-center gap-2">
                                        {productdata?.quantity}
                                        <FaProjectDiagram />

                                    </span>
                                </div>

                                <div className="flex justify-between pr-5 py-2">
                                    <span>Delivery Fee</span>
                                    <span className="flex items-center gap-2">
                                        10 <TbCurrencyTaka />
                                    </span>
                                </div>

                                <div className="flex justify-between pr-5 ">
                                    <span>Total Payment</span>
                                    <span className="flex items-center gap-2">
                                        {/* {offerPrice + deleveryFee} <TbCurrencyTaka /> */}
                                        {productdata?.singleProductData?.result?.price * productdata?.quantity + 10}<TbCurrencyTaka />
                                    </span>
                                </div>


                                <div>
                                    <button className="py-3 w-full bg-[#F57224] hover:bg-[#DADADA] duration-300 hover:text-gray-500 text-white rounded" onClick={onOpenModal}>Open modal</button>
                                    <Modal open={open2} onClose={onCloseModal} center>
                                        <div className="px-10  flex gap-10 justify-center items-center">
                                            <button onClick={handleDireact_order}>
                                                <img className="w-40 h-36" src="data:image/jpeg;base64,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" alt="" />
                                            </button>
                                            <button onClick={onSubmit}>

                                                <img src="data:image/jpeg;base64,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" alt="" />
                                            </button>

                                        </div>
                                    </Modal>
                                </div>

                            </div>


                        </div>
                        {/*this is the payment detales work ends  */}



                    </div>

                </div>

            </div>
        </div>
    );
};

export default DirectPurches;