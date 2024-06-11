import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import AuthorOfDashboard from '../../../../Components/Avengers/DashboardRelatedCompo/SidBarCompo/AuthorOfDashboard/AuthorOfDashboard';
import { useState } from 'react';
import { BsChatRightDotsFill } from 'react-icons/bs';



const isAdmin = true
// const user = true
// const seller = true

const AdminSidebar = () => {
	const [activeRoute, setActiveRoute] = useState("Home")
    return (
		<div className=' text-white px-5 py-8'>
			<div className='flex items-center justify-center'>
				<img
					className='w-[80px] h-[80px] rounded-[50%] '
					src='https://i.ibb.co/kHKXS8C/760dab6c14dacbbb9e1cbdb719749032.jpg'
					alt=''
				/>
			</div>
			<div className='text-center'>
				<h3 className='mt-3 font-semibold'>Toma Akter Hashi</h3>
				<h4>toma@gmail.com</h4>
				<Link to='/'>
					<button className='bg-[#19D895] w-[90%] mt-4 font-normal px-12 py-2 rounded-sm'>
						Upgrade
					</button>
				</Link>
			</div>
			<div className='text-left flex flex-col gap-1 mt-8 mx-3 font-normal'>
				{/* nav items */}
				{/* Home */}
				<Link to={"/dashboardana"}>
					<div
						onClick={() => setActiveRoute("Home")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${
							activeRoute === "Home"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} cursor-pointer  gap-4`}
					>
						<HiHome className='w-4 h-4'></HiHome>
						<h4> Home</h4>
					</div>
				</Link>

				{/* Transactions */}
				<div
					onClick={() => setActiveRoute("Transactions")}
					className={`flex hover:bg-[#19D895] duration-700 justify-between relative p-2 ${
						activeRoute === "Transactions"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
					<div className='flex items-center gap-4'>
						<HiChartBar className='w-4 h-4'></HiChartBar>
						<h4>Transactions</h4>
					</div>
					<div
						className={`flex hover:bg-[#19D895] duration-700 items-center justify-center py-2 px-3 absolute bg-[#8E6CE5] w-[20px] h-[20px] mt-3 rounded-lg -top-[2px] right-2`}
					>
						<small>45</small>
					</div>
				</div>

				{/* Orders */}
				<Link to={"orders"}>
					<div
						onClick={() => setActiveRoute("Orders")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer ${
							activeRoute === "Orders"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} gap-4`}
					>
						<HiOutlineFolder className='w-4 h-4'></HiOutlineFolder>
						<h4>Orders</h4>
					</div>
				</Link>

				{/* Sales */}
				<Link to={"seller_request"}>
					<div
						onClick={() => setActiveRoute("Sales")}
						className={`flex hover:bg-[#19D895] duration-700 justify-between p-2 relative cursor-pointer  ${
							activeRoute === "Sales"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} gap-4`}
					>
						<div className='flex items-center gap-4 '>
							<HiUsers className='w-4 h-4'></HiUsers>
							<h4>Seller Request</h4>
						</div>

						<div
							className={`flex hover:bg-[#19D895] duration-700 items-center ${
								activeRoute === "Sales"
									? "bg-[#0A1727] text-white"
									: "bg-[#19D895] text-[#0A1727]"
							} justify-center py-2 px-3  cursor-pointer w-[20px] h-[20px] mt-3 rounded-lg absolute -top-[2px] right-2`}
						>
							<small>2</small>
						</div>
					</div>
				</Link>

				{/* Members */}
				<Link to={"seller_profile"}>
					<div
						onClick={() => setActiveRoute("Members")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
							activeRoute === "Members"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} gap-4`}
					>
						<HiMiniAdjustmentsHorizontal className='w-4 h-4'></HiMiniAdjustmentsHorizontal>
						<h4>Seller Profile</h4>
					</div>
				</Link>
				{/* Chat */}
				<Link to={"message"}>
					<div
						onClick={() => setActiveRoute("Investment")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
							activeRoute === "Investment"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} gap-4`}
					>
						<BsChatRightDotsFill className='w-4 h-4'></BsChatRightDotsFill>
						<h4>Chat</h4>
					</div>
				</Link>
				{/* customer */}
				<Link to={"customer"}>
					<div
						onClick={() => setActiveRoute("Analytics")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
							activeRoute === "Analytics"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} gap-4`}
					>
						<HiMiniCalculator className='w-4 h-4'></HiMiniCalculator>
						<h4>Customer</h4>
					</div>
				</Link>

				{/* Reporting */}
				<div
					onClick={() => setActiveRoute("Reporting")}
					className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
						activeRoute === "Reporting"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} gap-4`}
				>
					<HiMiniUsers className='w-4 h-4'></HiMiniUsers>
					<h4>Reporting</h4>
				</div>
				{/* Back Accounts */}
				<div
					onClick={() => setActiveRoute("Back Accounts")}
					className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
						activeRoute === "Back Accounts"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} gap-4`}
				>
					<HiArchiveBoxXMark className='w-4 h-4'></HiArchiveBoxXMark>
					<h4>Back Accounts</h4>
				</div>
				{/* Admin/HR */}
				<div
					onClick={() => setActiveRoute("Admin/HR")}
					className={`flex hover:bg-[#19D895] duration-700 items-center p-2  cursor-pointer  ${
						activeRoute === "Admin/HR"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} gap-4`}
				>
					<HiAcademicCap className='w-4 h-4'></HiAcademicCap>
					<h4>Admin/HR</h4>
				</div>

				<div className='flex items-center p-2  cursor-pointer   gap-4'></div>
			</div>
			<div className='flex items-center justify-center '>
				<AuthorOfDashboard></AuthorOfDashboard>
			</div>

			<Link to='analytics'></Link>
		</div>
	);
};

export default AdminSidebar;