/** @format */

import { FiRefreshCcw } from "react-icons/fi";

const PageTitleAndRefresh = ({ title }) => {
	return (
		<div>
			{/* title and data refres  */}
			<div className='bg-white p-2 md:p-3 rounded flex items-center justify-between '>
				<h3 className='text-2xl font-bold'>{title}</h3>

				<div className='flex items-center text-[11px] font-bold gap-2 md:gap-3'>
					<div className='flex items-center gap-1 md:gap-2 cursor-pointer group'>
						<p>Data Referesh</p>
						<FiRefreshCcw className='group-hover:text-[#3B82DA] group-hover:animate-spin' />
					</div>

					<div className='px-3 md:px-8 border border-[#0a172783] py-1 rounded'>
						<p>August 22, 2023 01:20 AM</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageTitleAndRefresh;
