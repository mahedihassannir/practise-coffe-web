/** @format */


/**
 * Author: MG Rakib
 * date: 22-08-2023
 * 
 */

import { CountUp } from "use-count-up";

import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoCloudDoneSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useContext } from "react";
import { ContexM } from "../../../../../Authentication/AuthProvider/AuthProvider";
import { RiRefund2Line } from "react-icons/ri";
import SelectComponent from "../../../SelectComponent/SelectComponent";

const OrdersDetails = () => {
    
	
	
	const {
		showCategory,
		setShowCategory,
		showSorting,
		setShowSorting,
		category,
		setCategory,
		sorting,
		setSorting,
	} = useContext(ContexM);

	
	
	const allCategory = [
		"All Products",
		"Electronics",
		"Groceries",
		"Fashion",
		"Services",
	];
	const sortingDate = [
		"Default Sorting",
		"By Name: A-Z",
		"By Name: Z-A",
		"Rating High to Low",
		"Rating Low to High"
	];
	return (
		<div className=''>
			<p>Sales period:</p>

			{/* sorting  */}
			<div className='mt-1 flex flex-col gap-2 md:flex-row justify-between items-center'>
				<div className='  w-full md:flex-1  '>
					<div className='py-1 px-3 rounded border  w-full  md:w-[180px] bg-white'>
						Date Picker
					</div>
				</div>

				{/* sort by category and name or price  */}
				<div className='flex flex-col md:flex-row justify-end items-center gap-2 md:gap-5  w-full'>
					{/* sort by category */}
					<SelectComponent
						items={allCategory}
						stateValue={showCategory}
						setStateValue={setShowCategory}
						anotehrStateSate={setShowSorting}
						setValue={setCategory}
						valueDisplay={category}
					/>

					{/* sort by name or price  */}
					<SelectComponent
						items={sortingDate}
						stateValue={showSorting}
						setStateValue={setShowSorting}
						anotehrStateSate={setShowCategory}
						setValue={setSorting}
						valueDisplay={sorting}
					/>
				</div>
			</div>

			{/* order details  */}
			<div className=' w-full overflow-x-auto'>
				<div className='mt-4 min-w-[900px] overflow-x-auto  flex flex-nowrap gap-5 '>
					{/* order completed */}
					<div className='px-3 py-4 w-[185px] bg-white   shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<div className='w-[30px] h-[30px] rounded-sm bg-[#035ECF] flex items-center justify-center text-xl text-white'>
								<IoCloudDoneSharp />
							</div>

							<div>
								<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
							</div>
						</div>
						{/* title  */}
						<small>
							<p className='font-semibold'>Orders Completed</p>
						</small>

						<div className='text-2xl font-bold leading-4'>
							<CountUp
								isCounting
								start={1000}
								end={2345}
								duration={2}
							/>
						</div>
					</div>

					{/* order confirmed */}
					<div className='px-3 py-4 w-[185px]  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<div className='w-[30px] h-[30px] rounded-sm bg-[#00BA9D] flex items-center justify-center text-xl text-white'>
								<IoCloudDoneSharp />
							</div>

							<div>
								<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
							</div>
						</div>
						{/* title  */}
						<small>
							<p className='font-semibold'>Orders Confirmed</p>
						</small>

						<div className='text-2xl font-bold leading-4'>
							<CountUp
								isCounting
								start={1000}
								end={1457}
								duration={2}
							/>
						</div>
					</div>

					{/* order canceled  */}
					<div className='px-3 py-4 w-[185px]  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<div className='w-[30px] h-[30px] rounded-sm bg-[#FF5470] flex items-center justify-center text-xl text-white'>
								<IoCloudDoneSharp />
							</div>

							<div>
								<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
							</div>
						</div>
						{/* title  */}
						<small>
							<p className='font-semibold'>Orders Canceled</p>
						</small>

						<div className='text-2xl font-bold leading-4'>
							<CountUp
								isCounting
								start={200}
								end={302}
								duration={2}
							/>
						</div>
					</div>

					{/* order refunded  */}
					<div className='px-3 py-4 w-[185px]  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<div className='w-[30px] h-[30px] rounded-sm bg-[#515C6B] flex items-center justify-center text-xl text-white'>
								<RiRefund2Line />
							</div>

							<div>
								<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
							</div>
						</div>
						{/* title  */}
						<small>
							<p className='font-semibold'>Orders Refunded</p>
						</small>

						<div className='text-2xl font-bold leading-4'>
							<CountUp
								isCounting
								start={50}
								end={98}
								duration={2}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrdersDetails;
