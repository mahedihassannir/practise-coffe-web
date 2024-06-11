/**
 * Author: MG Rakib
 * description: proceed_to_checkout avenger
 * date: 17aug,2023
 *
 * @format
 */
import UseCartHook from "../../../Hooks/UseCartHook/UseCartHook";
import CartProductDetails from "./CartProductDetails/CartProductDetails";
import ProductDetails from "./CartProductDetails/CartProductDetails";
import PaymentDetails from "./PaymentDetails/PaymentDetails";

const Avengers = () => {

	return (
		<div>
			<div className='flex flex-col md:flex-row gap-5 '>
				{/* CartProductDetails section starts  team AVENGERS */}
				{/* this section for Chadnee */}
				<section className='w-full md:w-2/3 '>
					<CartProductDetails productsData={""} />
				</section>
				{/*  CartProductDetails section End */}

				{/* ------------------------------------------------- */}

				{/* PaymentDetails section starts  team AVENGERS */}
				{/* this section for MGR */}
				<section className='w-full md:w-1/3 border p-5'>
					<PaymentDetails/>
				</section>
				{/* PaymentDetails section End  */}
			</div>
		</div>
	);
};

export default Avengers;
