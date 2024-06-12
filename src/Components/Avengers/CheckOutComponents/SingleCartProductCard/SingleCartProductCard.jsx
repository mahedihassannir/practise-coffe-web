
/**
 * 
 * author:mahedi and rakib 
 * 
 * date:10/9/2023
 * 
 * description:this is the added cart design  
 * 
 */

import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import UseCartHook from "../../../../Hooks/UseCartHook/UseCartHook";
import { useEffect, useState } from "react";

const SingleCartProductCard = ({ singleProductData }) => {
	const [, refetch] = UseCartHook();
	const authToken = localStorage.getItem("userToken");
	// console.log(singleProductData);


	let handleDeleteProduct = (id) => {

		// console.log(id);

		fetch(`http://api.ecom-bd.com/api/v1/user/cart?cartId=${id}`, {
			method: "DELETE",
			headers: { Authorization: `Bearer ${authToken}` }

		})
			.then(res => res.json())
			.then(res => {
				// console.log(res);
				if (res.code === 203) {
					// alert("product remove from the cart")
				};
				refetch();
			})
			.catch(err => {
				// console.log(err);
			});
	};

	return (
		<div className='text-xs p-5 border rounded font-semibold my-10'>
			{/* product image quantity */}
			<div className='flex items-center gap-3'>
				{/* product image  */}
				<div className='w-[60px]'>
					<img
						src={singleProductData?.product?.product_images[0]}
						alt=''
						className='w-full'
					/>
				</div>

				<div className='flex items-center justify-between flex-1 gap-2'>
					{/* product name  */}
					<div>
						<h3>{singleProductData?.product?.product_name}</h3>
						<p>
							<small className='text-gray-500'>
								{singleProductData?.sellerId?.store_name}, Color Family:Black
							</small>
						</p>
					</div>

					{/* quantity  */}
					<div className='flex items-center gap-5 md:gap-10'>
						<p>
							Qty: <span>{singleProductData?.quantity}</span>
						</p>

						<FaRegTrashAlt onClick={() => handleDeleteProduct(singleProductData?._id)} className='text-gray-500 cursor-pointer hover:text-red-500' />
					</div>

					{/* price  */}
					<div className='flex items-center'>
						{/* previouse taka and discount  */}
						<div className='bg-[#F5F5F5] text-[10px] flex items-center gap-2 py-1 px-2'>
							{/* previouse price  */}
							{/* TODO: make it dynamic  */}
							<div className='flex items-center gap-1  line-through text-gray-500'>
								<TbCurrencyTaka />
								<p>{singleProductData?.product?.price + 40}</p>
							</div>

							{/* discount  */}
							<div>
								<p>
									<span>40</span>%
								</p>
							</div>
						</div>

						<div className='flex items-center '>
							<TbCurrencyTaka />
							<p>{singleProductData?.singleProductData?.price}</p>
						</div>
					</div>
				</div>
			</div>

			{/* subtotal  */}
			<div className='mt-5 pt-5 border-t'>
				<div className=''>
					<p className='flex items-center  justify-end'>
						<span>{singleProductData?.quantity}</span> item(s). Subtotal:{" "}
						<span className='flex items-center text-red-500'>
							<TbCurrencyTaka />{" "}
							<p>
								{
									singleProductData?.product?.price * singleProductData?.quantity
								}
							</p>
						</span>
					</p>
					<p className='flex items-center text-gray-400 mt-1 justify-end'>
						Saved
						<span className='flex items-center '>
							{/* TODO: Change it dynamic  */}
							<TbCurrencyTaka /> <p>{10 * singleProductData?.quantity}</p>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleCartProductCard;
