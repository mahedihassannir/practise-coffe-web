import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbDeviceMobileCheck } from "react-icons/tb";
import useUserProfile from "../../../Hooks/user/userProfile";

const RaferrProgram = () => {

    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    // console.log(userProfile);
    return (
        <div className="w-full h-screen bg-white">
            {/* parent div */}
            <section>
                {/* doc */}
                {/* <div className="w-full h-96 bg-white ">

                    <div className="text-center p-4">
                        <h1 className="font-thin text-2xl ">You and your colleague will get</h1>
                        <h1 className="text-lg font-semibold ">1 Referral = 10 Taka</h1>
                    </div>

                    <div className="flex md:grid-cols-3 justify-center gap-10 mt-10">
                        <div className="w-24 h-20 flex flex-col-reverse items-center   ">
                            <IoPersonAddSharp className="text-6xl"></IoPersonAddSharp>

                        </div>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <div className="w-26 h-20 flex flex-col-reverse items-center   ">
                            <TbDeviceMobileCheck className="text-6xl"></TbDeviceMobileCheck>

                        </div>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <div className="w-24 h-20 flex flex-col-reverse items-center   ">
                            <RiMoneyDollarCircleLine className="text-6xl"></RiMoneyDollarCircleLine>

                        </div>
                    </div>

                </div> */}
                
                <div className="flex justify-center pt-10 pb-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EkdtmLnuN7A?si=JBSBOy-4wlrHiDMH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* referral code and referral user */}
                <section>

                    <div className="w-11/12 mx-auto shadow-lg md:h-44 rounded-lg  border-2 ">

                        <div className="p-2">
                            <h1 className="text-xl">আপনার রেফারেল কোড</h1>
                            <p className="text-xl">আপনি এই কোড দ্বারা অন্নকে রেফার করতে পারেন এবং প্রতিটি রেফারে ১০ টাকা বোনাস পাবেন</p>

                            <div className="md:flex  gap-10 mt-4">
                                <div className="text-lg font-semibold bg-gray-200 flex justify-center items-center md:w-3/5  h-14 border-gray-500 rounded-lg ">
                                    {userProfile?.sanitizedResult?.referralCode}
                                </div>
                                {/* <button className="py-5 px-10 md:m-0 m-2 bg-red-200 rounded-md">copy link</button>
                                <button className="py-5 px-10 md:m-0 m-2 bg-red-200 rounded-md">Share</button> */}
                                <p>রেফার কোড কপি করে নিন </p>
                            </div>
                        </div>

                    </div>

                </section>


            </section>

        </div>
    );
};

export default RaferrProgram;