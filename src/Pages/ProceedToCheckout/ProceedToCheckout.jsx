/**
 * Author: MG Rakib
 * description: proceed_to_checkout
 * date: 17aug,2023
 *
 * @format
 */

import { useLocation, useParams } from "react-router-dom";
import Avengers from "../../Components/Avengers/CheckOutComponents/Avengers";
import useProducts from "../../Hooks/Fantastic/useProducts";
import UseCartHook from "../../Hooks/UseCartHook/UseCartHook";

const ProceedToCheckout = () => {
	const { id } = useParams();

	return (
		<div className='my-3 md:px-20'>
			{/* this page for Avengers */}
			<section>
				{/* <Avengers productsData={singleProductData} /> */}
				<Avengers />
			</section>
		</div>
	);
};

export default ProceedToCheckout;
