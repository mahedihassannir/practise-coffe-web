import { Outlet } from "react-router-dom";
// this import for the test avenger 
// import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'
import { useContext, useEffect, useState } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import FantasticSideBar from "../FantasticUserPanel/FantasticSideBar";

import SellerDashboard from "../CodeWorms/SellerDashboard";
import AdminSidebar from "../Avengers/adminpanel/AdminSidebar/AdminSidebar";
import { FaArrowLeft, FaLeaf } from "react-icons/fa";
import axios from "axios";
import useUserProfile from "../../Hooks/user/userProfile";


const DashBoardManage = () => {
	// state import from authcontext for show or not select
	const { showCategory, setShowCategory, showSorting, setShowSorting } = useContext(ContexM);

	const [values, setValue] = useState(true);


	const user = localStorage.getItem("userToken");
	const userProfile = useUserProfile(user);
	const isUSer = userProfile?.sanitizedResult?._id;
	const [seller, SetSeller] = useState(null);
	// get the seller log status;
	useEffect(() => {
		const fetchData = async () => {
			const sellerAuthToken = localStorage.getItem("sellerToken");
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/seller/profile`, {
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
	// console.log(seller?.result.identityId);
	const status = seller?.result.identityId;
	return (
		<div
			onClick={() => {
				setShowCategory(false);
				setShowSorting(false);
			}}
			className='flex relative'
		>
			<div
				className={`w-[265px] absolute md:relative h-[100vh] overflow-y-auto bg-[#0A1727] z-[999] duration-500 sidbarContainer ${values ? "-left-[500px]" : "left-[0px]"
					} md:left-0`}
			>
				{/* <SellerDashboard></SellerDashboard>
				<FantasticSideBar /> */}
				{/* <AdminSidebar /> */}
				{seller?.result.identityId && <SellerDashboard />}
				{isUSer && <FantasticSideBar />}
			</div>

			<div
				onClick={() => setValue(!values)}
				className='md:hidden absolute right-0 top-2 text-lg cursor-pointer bg-red-200'
			>
				<button><FaArrowLeft className="" /></button>
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-y-auto p-2 md:px-4 md:py-8 bg-[#EBEFF8] dashboardContainer'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;