/** 
 * Author Name: MG Rakib
 * Description: Navbar
 * Date: 16-08-2023
*/

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineSearch, HiMenu, HiOutlineMinusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaChevronCircleRight, FaClone, FaCut, FaPersonBooth, FaUser } from "react-icons/fa";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import UseCartHook from "../../Hooks/UseCartHook/UseCartHook";
import axios from "axios";
import useUserProfile from "../../Hooks/user/userProfile";



const Nav = ({ isNavOpen, setIsNavOpen }) => {
	const [seller, SetSeller] = useState(null);
	//get added quantity from auth provider
	const authToken = localStorage.getItem("userToken");
	const [cart, refetch] = UseCartHook();
	// console.log(seller);
	// console.log(seller?.result?.store_photo);
	const { Logout, totalCart } = useContext(ContexM);

	const user = localStorage.getItem("userToken");
	const userProfile = useUserProfile(user);
	const isUSer = userProfile?.sanitizedResult?._id;
	// const seller = false;
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState('');

	const [results, setResults] = useState([]);
	const [suggestions, setSuggestions] = useState([]);

	const handleInputChange = async (input) => {
		setSearchTerm(input);

		try {
			const response = await axios.get(`http://localhost:5000/suggestions?search=${input}`);
			setSuggestions(response.data);
			// console.log("41", response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSearch = async (e) => {

		e.preventDefault();


		try {




			const response = await axios.get(`http://localhost:5000/api/v1/user/search?query=${searchTerm}`, {
				headers: { Authorization: `Bearer ${authToken}` }
			});
			setResults(response.data);


			// console.log(response?.data?.code === 200);
			if (response?.data?.code === 200) {

				// navigate("/search_result",)

				navigate("/search_result", { state: { result: response?.data?.result } })


			}

		} catch (error) {
			// console.error(error);
		}
	};


	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch(e);
		}

		else if (e.key === 'Tab') {
			handleSearch(e);
		}

	};

	// console.log("this is the serch result", results);

	const handleLogout = () => {
		const token = localStorage.removeItem("userToken");
		if (!token) {
			navigate("/login")
		}
	};

	function handleReload() {

		window.location.reload();

	};



	// get the seller log status;
	useEffect(() => {

		const fetchData = async () => {

			const sellerAuthToken = localStorage.getItem("sellerToken")


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

	}, [])
	// console.log(seller?.result.identityId);
	const status = seller?.result.identityId;
	refetch()

	const navItem = (
		<>
			{/* latest offers  */}
			<Link to={"refer_user"} className='flex items-center gap-1 text-white'>
				<AiOutlineGift className='text-[#FC9E66] text-3xl' />
				<p className='leading-4 font-bold'>
					Refer <br />
					<span className='text-xs font-normal'>
						Refer Friends
					</span>{" "}
				</p>
			</Link>

			{/* CART  */}
			<div className='flex items-center gap-1 text-white'>

				<div className="relative">
					<div >
						<div className="relative">
							<div className="flex justify-center items-center h-[20px] w-[20px] bg-white p-1 rounded-full absolute -left-3 -top-2">
								<span className="text-black rounded-full text-[10px] font-semibold "> <small>+</small>{cart?.result?.length}</span>
							</div>
							<AiOutlineGift className="text-[#FC9E66] text-3xl" />
						</div>
					</div>
				</div>



				<Link to="/proceed_to_checkout" className='leading-4 font-bold '>
					Cart <br />
					<span className='text-xs font-normal'>Add items</span>{" "}
				</Link>
			</div>
			{/* PER ORDER  */}
			{seller?.result?._id ?
				<Link Link to={"/dashboard/sellerhome"} className='flex items-center gap-1 text-white'>
					{
						seller?.result?._id &&
						<img className="w-11 h-10 rounded-full" src={seller?.result?.sellerProfile?.store_photo} alt="" />

					}
					<p className='leading-4 font-bold'>
						SELLER  <br />
						<span className='text-xs font-normal'>
							Dashboard
						</span>{""}
					</p>
				</Link>
				:
				<Link to={"seller_login"} className='flex items-center gap-1 text-white'>
					<FaPersonBooth className='text-[#FC9E66] text-3xl' />
					<p className='leading-4 font-bold'>
						SELLER  <br />
						<span className='text-xs font-normal'>
							Dashboard
						</span>{" "}
					</p>
				</Link>

			}
			{/* ACCOUNT  */}
			<div className="flex gap-2">


				<div className="hidden md:block">
					{user ? (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={userProfile ? userProfile?.sanitizedResult?.profileImage : ""} alt="Profile" />
								</div>
							</label>
							<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
								<li>
									<p className="justify-between">{userProfile?.sanitizedResult?.email}</p>
								</li>
								{isUSer && (
									<li>
										<Link to={"/dashboard/userhome"} className="justify-between">
											USER DASHBOARD
										</Link>
									</li>
								)}
								{seller?.result?._id && (
									<li>
										<Link to={"/dashboard/sellerhome"} className="justify-between">
											SELLER DASHBOARD
										</Link>
									</li>
								)}
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a onClick={handleLogout}>Logout</a>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/login" className="flex items-center gap-1 text-white">
							<FaUser className="text-[#FC9E66] text-3xl" />
							<div className="leading-4 font-bold">
								<span>Account</span>
								<br />
								<span className="text-xs font-normal">Register or Login</span>
							</div>
						</Link>
					)}
				</div>

				{/* For small screens */}
				<div className="block md:hidden">
					{user ?
						<div className="dropdown dropdown-end flex items-center gap-1 text-white">
							<Link to={"/dashboard/userhome"} tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={userProfile ? userProfile?.sanitizedResult?.profileImage : ""} alt="Profile" />
								</div>
							</Link>
							<div className="leading-4 font-bold">
								<span>{userProfile?.sanitizedResult?.name}</span>
								<br />
								<span className="text-xs font-normal">logged In</span>
							</div>

						</div>
						:
						<Link to="/login" className="flex items-center gap-1 text-white">
							<FaUser className="text-[#FC9E66] text-3xl" />
							<div className="leading-4 font-bold">
								<span>Account</span>
								<br />
								<span className="text-xs font-normal">Register or Login</span>
							</div>
						</Link>
					}

				</div>
			</div>
		</>
	);

	const topNavItems = (
		<>
			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link to={"refer_user"} className='hover:underline hover:text-orange-600 duration-300'>
				<li>Refer</li>
			</Link>

			<Link to={"/dashboard/sellerhome"} className='hover:underline hover:text-orange-600 duration-300'>
				<li>Seller Penal</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link to="/dashboard/userprogress" className='hover:underline hover:text-orange-600 duration-300'>
				<li>TRACK MY ORDER</li>
			</Link>

			<Link className='hover:underline text-orange-800 duration-300'>
				<li>SELL ON E-COM</li>
			</Link>

			<Link
				to='seller_register'
				className='hover:underline hover:text-orange-600 duration-300'
			>
				<li className='uppercase'>Register as a Seller</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li className='uppercase'>affiliate Program </li>
			</Link>
		</>
	);

	const handelIsOpenNav = event => {
		event.stopPropagation()
		setIsNavOpen(true)
	};

	const [isSecondNavOpen, setIsSecondNavOpen] = useState(false);
	const handelSecondNav = event => {
		event.stopPropagation();
		setIsSecondNavOpen(!isSecondNavOpen);
	};

	return (
		<div>
			<ul className='hidden md:flex items-start justify-center gap-10 py-2'>
				{topNavItems}
			</ul>

			<div className='bg-[#000000]  md:px-20 flex justify-between items-center p-3 gap-4 md:gap-12 relative'>
				{/* logo */}
				<Link to="/" className='text-white '>
					<img
						src='https://i.ibb.co/P9tbKgZ/logo.jpg'
						alt=''
						className='h-14'
					/>
				</Link>

				{/* search div  */}
				<div className='flex-1 '>
					<div className='w-full relative rounded overflow-hidden'>
						<input
							type='text'
							name=''
							id=''
							placeholder='Search'
							className='w-full pl-3 pr-10 py-2 outline-none'
							value={searchTerm}
							onChange={(e) => handleInputChange(e.target.value)}
							onKeyDown={handleKeyDown}
						/>

						<div className='absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer' onClick={handleSearch}>
							<HiOutlineSearch className='text-[#FC9E66] text-2xl' />
						</div>
					</div>
				</div>

				{/* nav items for desktop  */}
				<div className='hidden md:flex items-center gap-10'>
					{navItem}
				</div>

				{/* menu bar for mobile  */}
				<div className='md:hidden'>
					<HiMenu
						onClick={handelIsOpenNav}
						className='text-white text-2xl'
					/>
				</div>

				{/* navbar for mobile  */}
				<div
					className={`md:hidden absolute bg-black top-0 ${isNavOpen ? "right-0" : "-right-96"
						} flex flex-col gap-5 h-screen p-5 duration-300 z-[999] overflow-y-auto`}
				>
					<div
						className={`pb-3 mt-5 ‍ relative ${isNavOpen
							? "right-[0px] opacity-100"
							: "right-[244px] opacity-25"
							}  z-40 duration-500`}
					>
						<IoClose className='text-white text-2xl' />
					</div>
					{navItem}

					<hr className='text-gray-400 border-gray-400' />

					<div>
						<div className='flex items-center gap-2 text-white'>
							<div
								onClick={handelSecondNav}
								className='flex flex-col gap-[4px] relative w-[20px]'
							>
								<div
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${isSecondNavOpen && "-rotate-45 absolute"
										}`}
								></div>
								<div
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${isSecondNavOpen && "rotate-45"
										}`}
								></div>
							</div>
							<p>nav items</p>
						</div>
						<div
							className={`${isSecondNavOpen ? "max-h-[400px]" : "max-h-0"
								}  overflow-hidden text-gray-400 duration-300 list-none`}
						>
							{topNavItems}
						</div>
					</div>
				</div>

				{/* overlay div when menu bar oepn for mobile */}
				<div
					className={`md:hidden absolute ${isNavOpen ? "top-0 left-0" : "top-0 left-[844px]"
						}  bg-[#0000008a]  w-[100vw] h-screen duration-500`}
				></div>
			</div>
		</div>
	);
};

export default Nav;
