/** @format */
import "./SingleSellerProfile.css";
import { CountUp } from "use-count-up";
import { BiBarcodeReader } from "react-icons/bi";

import sellerImge from "../../../../../assets/download.webp";
import { IoDiamondSharp } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
const SingleSellerProfile = () => {
	return (
		<div className='px-3 py-4 bg-white'>
			<div className='flex flex-col md:flex-row gap-3'>
				{/*seller image  */}
				<div className='md:w-[15%]'>
					<div
						className='w-[full] h-[100px] flex items-center justify-center
                     border'
					>
						<img
							src={sellerImge}
							alt=''
							className='w-[100px]'
						/>
					</div>
					<button className='bg-[#00BA9D] mt-3 w-full text-white rounded py-[2px]'>
						Profile
					</button>
				</div>
				{/*seller Details  */}
				<div className='md:w-[15%]'>
					<h4 className='font-bold text-xl leading-3 mb-3'>
						Data Foundry
					</h4>
					<div className='text-[11px] font-semibold text-gray-500 flex flex-col gap-1'>
						<p>53 Kashimpur Central Jail Gazipur Dhaka</p>

						<p>+8801 811115794</p>
						<p>mgrakibbd@gmail.com</p>
					</div>
				</div>
				{/*seller statistics  */}
				<div className='md:w-[15%]'>
					<div className='md:w-[100%] h-[140px] '>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.770376577181!2d90.31164257414545!3d24.003884378999956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd7615555555%3A0x67030a6233412e0b!2sKashimpur%20Central%20Jail!5e0!3m2!1sen!2sbd!4v1692862296372!5m2!1sen!2sbd'
							width='140'
							height='140'
							// style='border:0;'
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
				{/*seller statistics  */}
				<div className='md:w-[15%]'>
					<div>
						<h4 className='font-bold text-base leading-3'>
							Statistics:
						</h4>

						{/* orders  */}
						<div className='flex items-start gap-2 mt-2'>
							<div className='w-[30px] h-[30px] bg-[#00BA9D] rounded flex items-center justify-center text-white'>
								<BiBarcodeReader />
							</div>
							<div>
								<h4 className='font-bold text-lg leading-4'>
									<CountUp
										isCounting
										start={0}
										end={214}
										duration={2}
									/>
								</h4>
								<p className='font-semibold text-xs text-gray-600'>
									Orders
								</p>
							</div>
						</div>
						{/* income  */}
						<div className='mt-3 flex items-start gap-2'>
							<div className='w-[30px] h-[30px] bg-[#035ECF] rounded flex items-center justify-center text-white'>
								<IoDiamondSharp />
							</div>
							<div>
								<h4 className='font-bold text-lg leading-4'>
									$
									<CountUp
										isCounting
										start={0}
										end={214}
										duration={2}
									/>
								</h4>
								<p className='font-semibold text-xs text-gray-600'>
									Orders
								</p>
							</div>
						</div>

						{/* review rate  */}
						<div>
							<p className='font-semibold leading-3 mt-2'>
								Review Rate:
							</p>
							<div className=''>
								<Rating
									readonly
									className=''
									placeholderRating={3.5}
									emptySymbol={
										<FaStarHalfAlt className='text-yellow-500 text-xs ' />
									}
									placeholderSymbol={
										<FaStar className='text-yellow-500 text-xs' />
									}
								/>
							</div>
						</div>
					</div>
				</div>

				{/*seller Sels profit by category  */}
				<div className='h-[140px]  flex-1'>
					<h4 className='text-base font-bold leading-3'>
						Sales Profit by Category
					</h4>

					<div className='mt-1 h-[130px] profiteContainer overflow-y-auto'>
						{/* Electronice */}
						<div className='w-full  mt-2'>
							<div className='text-[11px] font-bold flex justify-between text-gray-600 '>
								<p>Electronics</p>
								<p>
									$
									<span>
										<CountUp
											isCounting
											start={0}
											end={6.3}
											duration={2}
										/>
									</span>
									k
								</p>
							</div>
							<div className='w-full h-[8px] bg-gray-200 rounded overflow-hidden'>
								<div
									style={{
										"--final-width": `${60}%`,
									}}
									className='h-full w-[50%] animation-width  bg-[#035ECF] rounded'
								></div>
							</div>
						</div>
						{/* Fashion */}
						<div className='w-full  mt-2'>
							<div className='text-[11px] font-bold flex justify-between text-gray-600 '>
								<p>Fashion</p>
								<p>
									$<span>2.3</span>k
								</p>
							</div>
							<div className='w-full h-[8px] bg-gray-200 rounded overflow-hidden'>
								<div
									style={{
										"--final-width": `${20}%`,
									}}
									className='h-full w-[20%] bg-[#FF5470] rounded animation-width'
								></div>
							</div>
						</div>
						{/* Food & Drink */}
						<div className='w-full  mt-2'>
							<div className='text-[11px] font-bold flex justify-between text-gray-600 '>
								<p>Food & Drink</p>
								<p>
									$
									<span>
										<CountUp
											isCounting
											start={0}
											end={8.3}
											duration={2}
										/>
									</span>
									k
								</p>
							</div>
							<div className='w-full h-[8px] bg-gray-200 rounded overflow-hidden'>
								<div
									style={{ "--final-width": `${80}%` }}
									className='h-full  bg-[#00193B] rounded animation-width'
								></div>
							</div>
						</div>
						{/* Service */}
						<div className='w-full  mt-2'>
							<div className='text-[11px] font-bold flex justify-between text-gray-600 '>
								<p>Service</p>
								<p>
									$
									<span>
										<CountUp
											isCounting
											start={0}
											end={4.3}
											duration={2}
										/>
									</span>
									k
								</p>
							</div>
							<div className='w-full h-[8px] bg-gray-200 rounded overflow-hidden'>
								<div
									style={{ "--final-width": `${80}%` }}
									className='h-full  bg-[#F8D518] rounded animation-width'
								></div>
							</div>
						</div>
						{/* Service */}
						<div className='w-full  mt-2'>
							<div className='text-[11px] font-bold flex justify-between text-gray-600 '>
								<p>Service</p>
								<p>
									$
									<span>
										<CountUp
											isCounting
											start={0}
											end={4.3}
											duration={2}
										/>
									</span>
									k
								</p>
							</div>
							<div className='w-full h-[8px] bg-gray-200 rounded overflow-hidden'>
								<div
									style={{ "--final-width": `${80}%` }}
									className='h-full  bg-[#F8D518] rounded animation-width'
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleSellerProfile;
