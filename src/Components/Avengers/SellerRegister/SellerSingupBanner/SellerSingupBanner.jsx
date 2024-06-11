import { Link } from "react-router-dom";




const SellerSingupBanner = () => {



	const isSeller = localStorage.getItem("userID")


	return (

		<div className=''>
			<div className='py-5'>
				<h1 className='font-bold text-7xl'>
					Start selling <br /> with{" "}
					<span className='text-[#D47316]'>E-Com</span>
				</h1>
				<p className='mt-5 text-xl font-semibold'>
					Create a E-Com seller account in 5 minutes and reach
					millions of customers today!
				</p>

				<div className='mt-10'>
					<div className='flex gap-10'>



						{/* this is the sing up btn  */}
						<Link to={"/seller_register/form"}>
							<button className='py-3 px-8 text-black rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,.8)] hover:shadow-[0px_0px_10px_rgba(0,0,0,.8)] text-xl font-bold bg-[#D47316] duration-300'>
								Sing Up

							</button>
						</Link>

						{/* // this is the login */}
						<Link to={"/seller_login"}>

							<button className='py-3 px-8  rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,.8)] hover:shadow-[0px_0px_10px_rgba(0,0,0,.8)] text-xl font-bold bg-black  text-white duration-600'>
								Login
							</button>

						</Link>

						{/* 
						<button className='py-3 px-8 rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,.8)] hover:shadow-[0px_0px_10px_rgba(0,0,0,.8)] text-xl font-bold text-white bg-[#1F2937] duration-300'>
							Learn More
						</button> */}

					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerSingupBanner;