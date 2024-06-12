import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight, FaDollarSign, FaKorvue, FaQuestion, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderResuns = () => {

    const [returns, setReturn] = useState()
    const id = localStorage.getItem("sId")
    // console.log(id);
    const sellerAuthToken = localStorage.getItem("sellerToken");
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://api.ecom-bd.com/api/v1/seller/order_return?sellerId=${id}`, {
                    headers: { Authorization: `Bearer ${sellerAuthToken}` }
                });
                const sellerData = response.data;
                setReturn(sellerData);
                // console.log({ sellerData });
                // console.log(sellerData);

                // Set sellerData in your component state or context for rendering.
            } catch (error) {
                console.error('Error fetching seller data:', error);
            };
        };

        fetchData();

    }, []);
    // console.log(returns?.data?.result?.returns);
    const returnss = returns?.data?.result?.returns

    return (
        <div className="w-[98%] lg:w-11/12 mx-auto">

            <section>
                {/* this is for teh alert */}
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

                            <div className="  ">
                                <div className="flex items-center gap-1">


                                    <p className="">
                                        Orders under  review
                                    </p>
                                </div>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>

                        </div>
                        <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">

                            <div className="pl-2 ">
                                <p className="">
                                    Orders under  review
                                </p>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>

                        </div>




                    </section>
                    {/* this is for the cards ends */}
                </section>

                {/* this is for the payment related starts */}

                <section className="w-full rounded-md bg-white h-20  mt-5 lg:mt-10">

                    <div className="">




                    </div>

                </section>

                {/* this is for the payment related ends */}

                {/* --------------------------------------------------------------------- */}

                {/* this is for order return  */}

                <section className="w-full  flex justify-center items-center bg-white mt-10">
                    <div className="">
                        {
                            returnss?.length > 0 ? (
                                returnss.map((res, index) => (
                                    <div key={index} className="">

                                        <div className="md:w-[1300px] w-full md:h-96 mt-2 bg-white border-2 border-black rounded-md md:flex md:m-10">
                                            {/* design */}
                                            <div className="md:w-[350px] border-2 h-96 rounded-md block">
                                                <div className="mt-3 pl-3">
                                                    {/* <h1 className="flex gap-2">Review: <span className="text-red-400 font-semibold">{res.comment}</span></h1> */}
                                                    <p className="flex items-center gap-2"><FaKorvue></FaKorvue> Verified Buyer</p>
                                                    <img className="mt-5 ml-3 w-[300px] h-[190px]" src={"https://www.advantageemblem.com/images/return_pic2.jpg"} alt="" />
                                                </div>

                                            </div>
                                            {/* design ends */}

                                            {/* infos */}
                                            <div className="md:w-[800px] bg-white p-2 rounded-md">
                                                <div className="mt-4 ml-4">
                                                    <div className="flex">
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                    </div>
                                                    {/* title */}
                                                    <div>
                                                        <h2 className="flex items-center gap-2 text-2xl font-semibold">
                                                            <span>Id: </span>  {res?.productId}
                                                        </h2>
                                                        <h2 className="flex items-center text-2xl font-semibold text-red-500">
                                                            {/* {res?.} */}
                                                            <span className="pl-1">Reason: {res.comment}</span>
                                                        </h2>
                                                    </div>
                                                    {/* description */}
                                                    <div className="w-11/12 mt-3">
                                                        <p className="text-md font-semibold">returnReason: {res?.returnReason}</p>
                                                    </div>

                                                    <Link to={""}>
                                                        <button className="mt-3 underline text-md font-semibold">read more</button>
                                                    </Link>

                                                </div>

                                            </div>
                                            {/* infos ends */}


                                        </div>

                                    </div>
                                ))
                            ) : (
                                <div>
                                    <img className="" src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01937XJc1v1nr0pZgrg_!!6000000006113-55-tps-179-153.svg" alt="" />
                                    <h3 className="text-center test-2xl font-semibold mt-4">No return order under this status or filter</h3>
                                </div>
                            )

                        }

                    </div>
                </section>



                {/* this is for order return ends */}

                {/* --------------------------------------------------------------------- */}



            </section>


        </div >
    );
}

export default OrderResuns;