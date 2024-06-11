/**
 * Author: MG Rakib / Mahedi
 * description: fpr payment
 * date: 17aug,2023
 *
 * @format
 */

import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/Fantastic/useProducts";
// import CardsOfProducts from "../../fantasticprople/CardsOfProducts/CardsOfProducts";
import ProductDelivery from "./ProductDelivery/ProductDelivery";
import ProductPurchase from "./ProductPurchase/ProductPurchase";
import CardsOfProducts from "../../fantasticprople/cardsOfProducts/CardsOfProducts";



const Avengers = ({ singleProductData }) => {


	// const { products } = useProducts();


	// console.log("091", singleProductData)

	const handletop = () => {

		window.scrollTo({
			top: 0,
			behavior: "instant"
		});

	};
	const [displayCount, setDisplayCount] = useState(12);
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchAndShuffleProducts();
	}, []);

	const fetchAndShuffleProducts = async () => {
		try {
			const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			});
			const data = await response.json();
			const shuffledProducts = shuffleArray(data.result || []);
			setProducts(shuffledProducts);
		} catch (error) {
			console.error('Error fetching products data:', error);
		}
	};

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const loadMore = () => {
		setIsLoading(true);
		setTimeout(() => {
			setDisplayCount(prevCount => prevCount + 10);
			setIsLoading(false);
		}, 1000);
	};
	return (
		<div>
			{/* Product Purchase and cart btn section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductPurchase singleProductData={singleProductData} ></ProductPurchase>
			</section>
			{/*  Product Purchase and cart btn section End */}

			{/* ------------------------------------------------- */}

			{/* product delivery details section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductDelivery ></ProductDelivery>
			</section>
			{/* product delivery details section End  */}

			{/* this 2 section is for the product recomendation and show the chat and reviews */}

			<section className="w-full my-5">


				{/* this is the parent div */}
				<div className="">
					<div className="w-full py-3 bg-[#fafafa]" >
						<span className="text-black font-semibold text-lg ">Product details of {singleProductData?.result?.product_name}</span>
					</div>
					{/* ends fo teh leble */}
					{/* description1  */}
					<div className="h-screen">
						{/* <div className="w-1/2"> */}
						{/* <p>{singleProductData.description}</p> */}
						{/* <p>{singleProductData?.result?.product_description} */}
						{/* </p> */}
						{/* </div> */}

						<div className="flex justify-center">
							{/* <p>{singleProductData.description}</p> */}
							<img className="h-screen" src={singleProductData?.result?.product_images[0]} alt="" />
						</div>

						{/* description1  ends */}



						{/* description1  starts */}
						<div className="w-1/2">
							<p>{singleProductData?.description2}</p>
						</div>

					</div>
					{/* description1  ends  */}

					{/* this div is for the dyscription section */}
					{/* <div className="w-full h-screen ">



					</div> */}
					{/* ends */}


					{/* this is the rating and review section */}
					<div className="w-full h-screen mt-5 ">

						{/* this is the lable */}
						<div className="w-full py-3 bg-[#fafafa]" >
							<span className="text-black font-semibold text-lg ">Ratings & Reviews of {singleProductData?.result?.product_name}</span>
						</div>



						{/* starts */}
						<div className="">
							{/* here is the content */}
						</div>
						{/* ends */}
						<br />
						<hr />

						{/* here is the review section  */}
						<div className="text-center">

							{/* content here */}
						</div>
						{/* ends */}




					</div>
					{/* ends */}



					{/* this is the chat with or ask auestion in the seller */}
					{/* <div className="w-full h-screen mt-5">



					</div> */}
					{/* this is the chat with or ask auestion in the seller ends */}



					<div className='lg-11/12 mx-auto my-20 lg:mx-10'>
						<h2 className='text-3xl mb-4 font-bold ml-1'>Just For You</h2>

						<section className="">
							{/* main grid container */}
							<div className="grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
								{products.slice(0, displayCount).map((data, index) => (
									<CardsOfProducts key={index} singleProduct={data} />
								))}
							</div>
						</section>
						{/* this is the flash sale card section ends */}
						<div className='mx-auto text-center mb-12 mt-6'>
							<button
								className='py-3 px-32 rounded-lg bg-[#FC9E66] text-white font-bold text-lg text-center'
								onClick={loadMore}
								disabled={isLoading}
							>
								{isLoading ? 'Loading...' : 'See More'}
							</button>
						</div>
					</div>
					{/* this is the recomended products ends */}


					{/* this is the parent ends */}
				</div>
				{/* this is the parent ends */}






			</section>

		</div>
	);
};

export default Avengers;
