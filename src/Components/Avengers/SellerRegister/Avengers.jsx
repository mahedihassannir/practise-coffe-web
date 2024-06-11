import SellerSingupBanner from "./SellerSingupBanner/SellerSingupBanner";
import sellerImage from "../../../assets/seller.png";


const Avengers = () => {
	return (
		<div className='md:flex flex-row-reverse lg:flex'>
			<div className='flex-1'>
				<SellerSingupBanner />
			</div>
			<div>
				<div>
					<img
						src={sellerImage}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Avengers;