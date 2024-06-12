
/**
 * 
 * name:mahedi hassan
 * work:seller Dashboard 
 * Date:28/8/2023
 * 
 */



import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import { FaBackspace, FaBroadcastTower, FaBusinessTime, FaDropbox, FaHome, FaLightbulb, FaListUl, FaProductHunt, FaQuestionCircle, FaRProject, FaSignOutAlt, FaStreetView, FaTools } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import USeemailCheck from '../../Hooks/USeemailCheck/USeemailCheck';
import { useEffect } from 'react';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';

const SellerDashboard = () => {

    const [activeRoute, setActiveRoute] = useState("Seller Home");

    const navigate = useNavigate();

    const [cart] = USeemailCheck();

    const [seller, SetSeller] = useState(null);

    const handleLogOut = () => {
        localStorage.removeItem("sellerToken");
        try {
            if (localStorage.getItem("sellerToken") === null) {
                navigate("/seller_register")
            }
        }
        catch (error) {
            // console.log(error);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            const sellerAuthToken = localStorage.getItem("sellerToken")


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

    }, [])
    // console.log(seller);
    return (
        <div className=' text-white px-5 py-8'>
            <div className='flex items-center justify-center'>
                <img
                    className='w-[100px] object-cover h-[100px] rounded-[50%] '
                    src={seller?.result?.sellerProfile?.store_photo
                    }
                    alt=''
                />
            </div>
            <div className='text-center'>
                <h3 className='mt-3 font-semibold'>{seller?.result?.sellerProfile?.name}</h3>
                <h4>{seller?.result?.sellerProfile?.email}</h4>

            </div>
            <div className='text-left flex flex-col gap-1 mt-8 mx-3 font-normal'>
                {/* sidebar items */}
                {/* Seller Home */}

                <Link to="sellerhome"><div onClick={() => setActiveRoute("Seller Home")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Seller Home"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <HiHome className='w-4 h-4'></HiHome>
                    <h4>হউম</h4>
                </div></Link>
                {/* Seller Home ends */}

                <Link to="ordermanage"><div onClick={() => setActiveRoute("manage")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "manage"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaRProject className='w-4 h-4'></FaRProject>
                    <h4>অর্ডার ম্যানেজ করুন</h4>
                </div></Link>

                {/* Order progress and orders */}

                <Link to="addproduct"><div onClick={() => setActiveRoute("Manage Product")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Manage Product"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaProductHunt className='w-4 h-4 '></FaProductHunt>
                    <h4>এড & প্রোডাক্ট ম্যানেজমেন্ট </h4>
                </div></Link>
                {/* Order progress and orders */}
                {/* Seller Home */}

                <Link to="orderresuns"><div onClick={() => setActiveRoute("returns")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "returns"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <HiHome className='w-4 h-4'></HiHome>
                    <h4>রিটার্ন</h4>
                </div></Link>
                {/* Seller Home ends */}
                {/* Seller Home */}

                <Link to="custommerreview"><div onClick={() => setActiveRoute("reviews")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "reviews"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaStreetView className='w-4 h-4'></FaStreetView>
                    <h4>পর্যালোচনা</h4>
                </div></Link>
                {/* Seller Home ends */}
                {/* Seller Home */}

                {/* Seller Add Product */}
                <Link to="deliveredorders"><div onClick={() => setActiveRoute("deliveredorders")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "deliveredorders"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaProductHunt className='w-4 h-4'></FaProductHunt>
                    <h4>ডেলিভাড প্রোডাক্ট</h4>
                </div></Link>
                {/* Seller Add Product ends */}




                {/* Order progress and orders */}




                {/*  Seller Payment History */}

                {/* seller tools */}
                <Link to="/dashboard/sellertools"><div onClick={() => setActiveRoute("sellertools")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "sellertools"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaTools className='w-4 h-4'></FaTools>
                    <h4>Seller tools</h4>
                </div></Link>
                {/* custommer feedback on my product */}
                {/* <Link to="dashboard/customerfeedback"><div onClick={() => setActiveRoute("CustomerFeedback")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "CustomerFeedback"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4> Manage Product</h4>
                </div></Link> */}
                {/* custommer feedback on my product ends */}

                {/* Markating solution for seller starts */}
                <Link to="/dashboard/markatingpage"><div onClick={() => setActiveRoute("Markating Solution")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Markating Solution"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaLightbulb className='w-4 h-4'></FaLightbulb>
                    <h4>মার্কাটি সমাধান </h4>
                </div></Link>

                {/* Markating solution for seller ends */}
                {/* Markating solution for seller starts */}
                <Link to="/dashboard/sellerSeeting"><div onClick={() => setActiveRoute("sellerSeeting")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "sellerSeeting"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaBroadcastTower className='w-4 h-4'></FaBroadcastTower>
                    <h4>Seller Setting</h4>
                </div></Link>



                {/* Markating solution for seller ends */}

                {/* Markating solution for seller starts */}
                <Link to="/dashboard/accStatementseller"><div onClick={() => setActiveRoute("Payment")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Payment"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaBroadcastTower className='w-4 h-4'></FaBroadcastTower>
                    <h4>টাকা তুলুন</h4>
                </div></Link>



                {/* Markating solution for seller ends */}

            </div>



            <hr className='my-10' />

            <Link to="/"><div onClick={() => setActiveRoute("realhome")}
                className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "realhome"
                    ? "bg-[#19D895] text-[#0A1727]"
                    : ""
                    } cursor-pointer  gap-4`}
            >
                <FaHome className='w-4 h-4'></FaHome>
                <h4>Back To Home</h4>
            </div></Link>

            <div onClick={handleLogOut}
                className={`flex hover:bg-[#19D895] duration-700 items-center p-2 
                    } cursor-pointer  gap-4`}
            >
                <FaSignOutAlt className='w-4 h-4'></FaSignOutAlt>
                <h4>Logout</h4>
            </div>


            <div className='text-center text-black relative mt-6'>
                <div className='absolute -top-5 left-20 flex justify-center rounded-full' style={{ color: "#bdf094", border: "6px solid #0A1727", backgroundColor: "#0A1727" }} >
                    <FaQuestionCircle className='text-2xl' />
                </div>
                <div className='rounded-lg py-4' style={{ backgroundColor: "#bdf094" }}>
                    <h1 className='font-bold'>সাহায্য কেন্দ্র</h1>
                    <p>যোগাযোগ করুন</p>
                    <p>আরও তথ্যের জন্য</p>
                    <div>
                        <div>
                            <button className='px-2 py-1 rounded-lg font-bold' style={{ color: "#ffffff", backgroundColor: "#0A1727" }}>সাহায্য কেন্দ্রে যান</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;