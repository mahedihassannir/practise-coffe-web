import { useContext } from "react";
import PageTitleAndRefresh from "../../PageTitleAndRefresh/PageTitleAndRefresh";
import SelectComponent from "../../SelectComponent/SelectComponent";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";

import SellerRequestTable from "./SellerRequestTable/SellerRequestTable";

const Avengers = () => {
    const { sellerCategory, setSellerCategory, showCategory, setShowCategory } =
		useContext(ContexM);
     const sellerCategoryData = [
			"Recent To Old",
			"Old To Recent",
			
    ];
    
    const tableHeade = [
        'Seler',
        'Seler',
    ]
    return (
		<div>
			<PageTitleAndRefresh title={"Seller Request"} />

			<div className='mt-4'>
				<div>
					<p>Request period:</p>

					{/* sorting  */}
					<div className='mt-1 flex flex-col md:flex-row justify-between items-center gap-2 '>
						<div className='  w-full md:flex-1  '>
							<div className='py-1 px-3 rounded border  w-full  md:w-[180px] bg-white'>
								Date Picker
							</div>
						</div>

						{/* sort by category and name or price  */}
						<div className='flex flex-col md:flex-row justify-end items-center gap-5 w-full md:flex-1 '>
							{/* sort by category */}
							<SelectComponent
								items={sellerCategoryData}
								stateValue={showCategory}
								setStateValue={setShowCategory}
								setValue={setSellerCategory}
								valueDisplay={"Recent To Old"}
							/>
						</div>
					</div>
				</div>

                <div className='mt-4 flex flex-col gap-5'>
                    <SellerRequestTable />
                </div>
            </div>
            

		</div>
	);
};

export default Avengers;