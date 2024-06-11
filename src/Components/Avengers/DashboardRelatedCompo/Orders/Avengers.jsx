

import PageTitleAndRefresh from "../../PageTitleAndRefresh/PageTitleAndRefresh";
import OrdersDetails from "./OrdersDetails/OrdersDetails";
import OrdersTable from "./OrdersTable/OrdersTable";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
const Avengers = () => {
    return (
		<div className='text-[#0A1727]'>
			<PageTitleAndRefresh title={"Orders"} />

			<div className='my-4'>
				{/* orders OrdersDetails */}
				<div className='mt-4  rounded overflow-x-auto '>
					<OrdersDetails />
				</div>

				{/* Order table  */}
				<div className='mt-4 bg-white rounded px-3 overflow-x-auto'>
					<OrdersTable />
				</div>

				{/* pagination for order  */}
				<div className='px-3 mt-4'>
					<div className='text-xs font-semibold flex items-center gap-2'>
						<div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
							<BiChevronsLeft />
						</div>
						<button className='w-[25px] h-[25px] bg-[#035ECF] flex items-center justify-center text-white rounded'>
							1
						</button>
						<button className='w-[25px] h-[25px] border border-[#035ECF] flex items-center justify-center text-[#035ECF] hover:bg-[#035ECF] hover:text-white duration-150 rounded'>
							2
						</button>

						<div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
							<BiChevronsRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Avengers;