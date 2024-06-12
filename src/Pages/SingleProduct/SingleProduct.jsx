/**
 * Author: Mahedi Hassan Nir. 
 * mahedi: work intrigate the apis and 100% work done by mahedi
 * description: Make Single Product route and create a single product page
 * date: 17aug,2023
 */

import { useParams } from "react-router-dom";
import Avengers from "../../Components/Avengers/SingleProductComponents/Avengers";
import useProducts from "../../Hooks/Fantastic/useProducts";
import { useEffect, useState } from "react";

const SingleProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		const fetchUserProfileData = async () => {
			try {
				const response = await fetch(`http://api.ecom-bd.com/api/v1/user/product/${id}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					}
				});
				const data = await response.json();
				setProduct(data);
			} catch (error) {
				console.error('Error fetching  single product data:', error);
			};
		};
	
			fetchUserProfileData();
		
	}, [id]);
	// console.log(product);
	return (
		<div className=' w-full  my-10  md:px-20'>

			<section>
				<Avengers singleProductData={product} />
			</section>
		</div>
	);
};

export default SingleProduct;