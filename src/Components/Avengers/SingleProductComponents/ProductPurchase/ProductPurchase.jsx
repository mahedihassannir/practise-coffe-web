/**
 * Author: MG Rakib / Mahedi
 * description: ProductPurchase
 * date: 17aug,2023
 *
 * @format
 */

import Rating from "react-rating";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import takaIcon from "../../../../assets/taka.png";
import takaIconGray from "../../../../assets/taka_gray.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";
import { SyncLoader } from "react-spinners";
import useProducts from "../../../../Hooks/Fantastic/useProducts";
import axios from "axios";
import useUserProfile from "../../../../Hooks/user/userProfile";
import Swal from "sweetalert2";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductPurchase = ({ singleProductData }) => {

	// console.log(singleProductData);
	const authToken = localStorage.getItem("userToken");
	const { user } = useContext(ContexM);
	const userProfile = useUserProfile(authToken);
	// console.log(userProfile?.sanitizedResult?._id);

	// console.log({ singleProductData });

	const images = singleProductData?.imageurls;
	// console.log("111111", images);
	let imageData = {}

	for (let i = 0; i < images?.length; i++) {

		const url = images[i];


		imageData[`image${i}`] = url;


	};


	// console.log("he he he hklh lkjhlkjhljkh lkjhl hjklh 12123", imageData);

	const navigate = useNavigate();


	const handlepayment = (id) => {
		// console.log(id);

		const authToken = localStorage.getItem("userToken")

		if (!authToken) {
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				title: 'প্রথমে লগিন করোন',
				showConfirmButton: false,
				timer: 1000
			});
		}
		if (!authToken) {
			navigate("/login");
		} else {
			navigate(`/direct_buy`, { state: { singleProductData, quantity } });
		};
	};

	//default quantity value
	const [quantity, setQuantity] = useState(1);

	//add to cart function import from auth
	const { addToCart, loaddingForCart } = useContext(ContexM);

	// here we use mongo db to save the data 


	// here we use mongo db to save the data  ends

	const { products, loading } = useProducts();

	// console.log({ addToCart });

	const email = user?.email;

	const handleAddtoCart = (data) => {
		const authToken = localStorage.getItem("userToken")
		if (!authToken) {
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				title: 'প্রথমে লগিন করোন',
				showConfirmButton: false,
				timer: 1000
			});
			navigate("/login")
		}
		// console.log(data.result.seller);
		// console.log(data.result._id);
		const seller = data.result.seller;
		const productId = data.result._id;

		const addToCartData = {
			sellerId: seller,
			product: productId,
			quantity: quantity
		}
		// console.log(addToCartData);
		fetch(`http://localhost:5000/api/v1/user/add_cart?userId=${userProfile?.sanitizedResult?._id}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`
			}
			,
			body: JSON.stringify(addToCartData)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);

				if (data.code === 201) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'add to the cart',
						showConfirmButton: false,
						timer: 1000
					});
					localStorage.setItem("cart", "added")
				}
			});
	};

	const handleWishList = (data) => {
		// console.log(data);
		const productId = data.result._id
		// console.log("wish list data", data);
		fetch("http://localhost:5000/api/v1/user/wish_list", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`
			}
			,
			body: JSON.stringify({ productId })
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				if (data.code === 201) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'save to the wishList',
						showConfirmButton: false,
						timer: 2000
					});
				}
			})
	}

	const obj = {
		singleProductData,
		quantity
	}
	return (
		<div className='relative my-10 '>
			<div className='flex flex-col md:flex-row gap-10 -mt-8 md:mt-10'>
				{/* product Image  */}
				<div className='w-full md:w-1/3 '>


					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>

						{singleProductData?.result?.product_images.map((image, index) => (

							<SwiperSlide key={index}>
								<img className="md:h-1/2 md:w-full " src={image} alt={`Product Image ${index + 1}`} />
							</SwiperSlide>

						))}
					</Swiper>
				</div>

				{/* product Details  */}
				<div className='w-full md:w-2/3  font-normal'>
					{/* name  */}
					<h4 className='text-xl md:text-2xl font-bold'>
						{singleProductData?.result?.product_name}
					</h4>

					{/* rating and share  */}
					<div className='mt-4'>
						<div className='flex items-center justify-between'>
							{/* rating  */}
							<div className='flex gap-3'>
								<Rating
									readonly
									placeholderRating={4.5}
									emptySymbol={
										<FaRegStar className='text-[#FABB24]' />
									}
									placeholderSymbol={
										<FaStar className='text-[#FABB24]' />
									}
								/>

								{/* rating number  */}
								<div>
									<p className='text-[#1AACD9]'>{singleProductData?.result?.review?.length} Ratings</p>
								</div>
							</div>

							{/* share  */}
							<div className='flex items-center gap-6 text-2xl text-gray-400 '>
								<HiShare />



								<FaRegHeart onClick={() => handleWishList(singleProductData)} className="cursor-pointer hover:text-red-500 " />



							</div>
						</div>
					</div>

					{/* band  */}
					<div className='mt-2'>
						<div className='flex items-center gap-2'>
							<p>Brand:</p>
							<ul className='flex items-center gap-1 divide-gray-600 text-[#1AACD9] divide-x leading-4'>
								<p>{singleProductData?.result?.seller?.store_name}</p>
								<p className='pl-3'>
									More Men Bags from No Brand
								</p>
							</ul>
						</div>
					</div>

					{/* price  */}

					<div className='mt-8'>
						<div className='text-4xl flex gap-3 items-center text-[#F85606] font-semibold'>
							<div>
								<img
									src={takaIcon}
									alt=''
									className='w-[25px]'
								/>
							</div>
							<span>{singleProductData?.result?.price}</span>
						</div>

						<div className='mt-2'>
							<div className='flex gap-2 items-center'>
								<div className='flex items-center gap-1 relative text-[#9e9e9e]'>
									<div className='w-[15px] '>
										<img
											src={takaIconGray}
											alt=''
											className='w-full'
										/>
									</div>

									<p className='font-normal'>{singleProductData?.result?.price + 150}</p>
									<div className='h-[1px] w-full bg-[#9e9e9e] absolute'></div>
								</div>
								<div>
									<p className='font-semibold'>-60%</p>
								</div>
							</div>
						</div>
					</div>

					{/* color  */}
					<div className='mt-8'>
						<div className='text-xl flex items-start gap-2'>
							<p className='text-[#747474] font-semibold'>
								Color Family:
							</p>

							<div>
								<span className='font-semibold'>Black</span>

								<div className='mt-2 flex items-center gap-3'>
									<div className='w-[60px] p-1 border border-[#F57224]'>
										{/* <img
											src={imageData?.image0}
											alt=''
										/> */}
									</div>
									<div className='w-[60px] p-1 '>
										<img
											src='https://i.ibb.co/PgdpJzh/img2.jpg'
											alt=''
										/>
									</div>
									<div className='w-[60px] p-1 '>
										<img
											src='https://i.ibb.co/PgdpJzh/img2.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Quantity  */}
					<div className='mt-8'>
						<div className='text-xl flex items-start gap-10'>
							<p className='text-[#747474] font-semibold'>
								Quantity
							</p>

							<div className='flex gap-2'>
								<button
									onClick={() => setQuantity(quantity - 1)}
									className={`w-[30px] h-[30px] bg-[#EFF0F5] font-bold flex items-center justify-center rounded-md ${quantity <= 1
										? "bg-gray-300"
										: "cursor-pointer"
										}`}
									disabled={quantity <= 1}
								>
									-
								</button>
								<h1 className='w-[30px] h-[30px] border flex items-center justify-center rounded-md text-lg'>
									{quantity}
								</h1>
								<div
									onClick={() => setQuantity(quantity + 1)}
									className=' w-[30px] h-[30px] bg-[#EFF0F5] cursor-pointer font-bold flex items-center justify-center rounded-md'
								>
									+
								</div>
							</div>
						</div>

						<div className='flex items-center gap-5 mt-4'>

							<Link
								// to={`/proceed_to_checkout/${singleProductData?._id}`}
								to={""}
								state={obj}
								className='flex-1'
								onClick={() => handlepayment(singleProductData)}
							>
								<button className='bg-[#2ABBE8] py-3  text-white text-xl font-semibold w-full'>
									Buy Now
								</button>
							</Link>

							{/* this is my product add btn  */}
							<button
								//TODO add to cart

								onClick={() =>
									handleAddtoCart(singleProductData)
								}
								className='bg-[#F57224] py-3 flex-1 text-white text-xl font-semibold'
							>
								Add to Cart
							</button>
							{/* this is my product add btn ends */}
						</div>
					</div>
				</div>
			</div>

			{loaddingForCart && (
				<div className=' bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[80%] md:w-[50%] md:h-[40%] rounded-lg shadow-[0px_0px_40px_rgba(0,0,0,.2)] flex items-center justify-center'>
					<SyncLoader color='#2ABBE8' />
				</div>
			)}
		</div>
	);
};

export default ProductPurchase;
