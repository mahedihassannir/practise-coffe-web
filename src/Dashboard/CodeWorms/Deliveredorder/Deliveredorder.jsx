import { FaAngleRight } from "react-icons/fa";
import Table from "./table/Table";
import UseSellerDeliveredData from "../../../Hooks/UsesellerdeliveredData/UsesellerdeliveredData";
const Deliveredorder = () => {

    const [deliveredData, refetch] = UseSellerDeliveredData();
    // console.log(deliveredData);

    // console.log("i am from seller orders", deliveredData);


    refetch();

    return (
        <div className="w-full ">

            {/* this is the prarent compo div of the delivered works starts  */}



            <div className="">

                <div className=" p-3 rounded-sm bg-[#e2efff] flex items-center gap-2">



                    <span className="">
                        <FaAngleRight></FaAngleRight>
                    </span>

                    {/* gap */}

                    <span className="">
                        Daraz Seller Center is unable to generate a report for returns that happened prior to 20 June 2022.
                    </span>

                </div>
                {/* this is for the alert // ends */}

                <div className="w-full h-20 bg-white mt-10 rounded-md  shadow-md">



                </div>


                {/* //------------------------------------------------------// */}

                {/* this is for the filter section */}
                <section className="w-full  bg-white mt-4 lg:mt-16 rounded-md py-2">
                    {/* this is for teh sub hedding */}
                    <div className="">
                        <span className="py-2 pl-2">Key Summary</span>

                    </div>
                    {/* this is for teh sub hedding ends */}

                    {/* this is for the cards */}
                    <section className="flex gap-4 pl-4 mt-2 mb-2">



                        <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">

                            <div className="  px-2">
                                <div className="flex items-center gap-1">


                                    <p className="">
                                        Orders under  review
                                    </p>
                                </div>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>

                        </div>
                        <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">

                            <div className="px-2 ">
                                <p className="">
                                    Orders under  review
                                </p>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>

                        </div>




                    </section>
                    {/* this is for the cards ends */}
                </section>


                {/* this sections is for the all delivered products */}
                <section className="w-full mt-10 bg-white pb-6">



                    <div className="w-full h-20 bg-gray-100">

                        <p className="uppercase py-5 px-10 text-lg font-semibold text-blue-400">
                            your all delivered products
                        </p>


                    </div>
                    {/* ends of hedding  */}



                    {/* here is the products tables  */}
                    <div className='my-4'>

                        <Table sellerdeliveredData={deliveredData} />
                    </div>



                    {/* here is the products tables ends */}



                </section>
                {/* this sections is for the all delivered products ends */}

            </div>
            {/* this is the prarent compo div of the delivered works ends */}



        </div>
    );
};

export default Deliveredorder;