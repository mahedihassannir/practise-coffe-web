
/**
 * Author: MG Rakib
 * description: ProductDelivery
 * date: 17aug,2023
 */

import {
	HiOutlineInformationCircle,

} from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { GoShieldSlash } from "react-icons/go";
import { RiRefund2Fill } from "react-icons/ri";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { TbTruckDelivery, TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const ProductDelivery = () => {
	return (
		<div className='mt-10 mb-10'>
			<h1 className='text-3xl font-semibold'>About The Delivery</h1>

			{/* delivery location and delivery date  */}
			<div className='grid md:grid-cols-3 gap-5 mt-5'>
				{/* delivery location  */}
				<div className=' font-semibold  p-2 bg-[#FAFAFA] rounded-md'>
					<div className='flex items-center justify-between'>
						<p className='text-gray-500 font-semibold'>Delivery</p>
						<HiOutlineInformationCircle />
					</div>

					{/* delivery location  */}
					<div className='mt-2 '>
						<div className=' flex items-center justify-between'>
							<div className='w-[40px]'>
								<IoLocationOutline className='text-lg' />
							</div>

							<div>
								<p className='leading-4'>
									Chottogram, Brahmanbariya,Bancharampur
								</p>
							</div>

							<Link to="/dashboard/useraddressform">
								<button className='text-[#2ABBE8]'>
									CHANGE
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* delivery time  */}
				<div className=' font-semibold  p-2 bg-[#FAFAFA] rounded-md flex items-center'>
					{/* delivery location  */}
					<div className='mt-2 w-full'>
						<div className=' flex items-center w-full text-lg '>
							<div className='w-[40px]'>
								<TbTruckDelivery className='' />
							</div>

							<div className='flex-1'>
								<p className='leading-4 '>
									Started Delivery:{" "}
									<span className='text-sm text-gray-800'>
										40 minutes
									</span>
									<br />
									<small>
										<span className='text-gray-400'>
											40 minutes
										</span>
									</small>
								</p>
							</div>

							<div className='ml-auto flex items-center gap-1'>
								<TbCurrencyTaka />
								<p className="text-sm">First product 10 taka & per product 5 taka</p>
							</div>
						</div>
					</div>
				</div>

				{/* cash on delivery  */}
				<div className=' font-semibold  p-2 bg-[#FAFAFA] rounded-md flex items-center'>
					{/* delivery location  */}
					<div className='mt-2 '>
						<div className=' flex items-center justify-between text-lg'>
							<div className='w-[40px]'>
								<GiCash className='' />
							</div>

							<div>
								<p className='leading-4'>
									Cash On Delivery Available
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* service and seller  */}
			<div className='flex flex-col md:flex-row mt-4 gap-5'>
				{/* service  */}
				<div className='p-2 w-full md:w-[40%] bg-[#FAFAFA]'>
					<div className='flex items-center justify-between text-xl'>
						<p className='text-gray-500 font-semibold'>Service</p>
						<HiOutlineInformationCircle />
					</div>

					{/* serivces list */}

					<div className='mt-4 px-4'>
						<div className='text-2xl flex  gap-3'>
							<RiRefund2Fill />

							<p className='font-semibold leading-5'>
								3 Days Returns
								<br />
								<span className='text-base text-gray-500'>
									Change of mind is  applicable
								</span>
							</p>
						</div>
					</div>

					{/* Warrenty */}
					<div className='mt-4 px-4'>
						<div className='text-2xl flex  gap-3'>
							<GoShieldSlash />

							<p className='font-semibold leading-5'>
								Warrenty not available
							</p>
						</div>
					</div>
				</div>

				{/* seller  */}

				<div className='w-full md:w-[40%]  bg-[#FAFAFA] font-semibold'>
					<div className=' py-2 px-4  flex items-center justify-between border-b pb-3 '>
						<div>
							<p className='text-gray-500'>Sold by</p>
							<p className='text-xl'>Nondini Bazar</p>
						</div>

						<div className='flex  gap-1 px-5'>
							<HiMiniChatBubbleLeftRight className='text-[#2ABBE8]' />
							<p>CHAT</p>
						</div>
					</div>

					<div className='grid grid-cols-3'>
						<div className='px-3 py-2 flex flex-col border justify-between gap-2 '>
							<p className='text-gray-500 leading-4'>
								Positive Seller Rattings
							</p>
							<h5 className='text-2xl'>
								<span>98</span>%
							</h5>
						</div>
						<div className='px-3 py-2 flex flex-col border justify-between gap-2 '>
							<p className='text-gray-500 leading-4'>
								Ship on Time
							</p>
							<h5 className='text-2xl'>
								<span>100</span>%
							</h5>
						</div>
						<div className='px-3 py-2 flex flex-col border justify-between gap-2 '>
							<p className='text-gray-500 leading-4'>
								Chat Response Rate
							</p>
							<h5 className='text-2xl'>
								<span>98</span>%
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDelivery;