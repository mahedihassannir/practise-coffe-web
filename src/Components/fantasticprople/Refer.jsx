import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useUserProfile from "../../Hooks/user/userProfile";

const Refer = () => {
    const token = localStorage.getItem("userToken");
    const navigate = useNavigation();
    const [data, SetResData] = useState();

    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    // console.log(userProfile);
    const id = userProfile?.sanitizedResult?._id;



    const handleRafer = (e) => {
        e.preventDefault();
        const form = e.target;
        const referInp = form.referinp.value
        // console.log(referInp);

        fetch(`https://api.ecom-bd.com/api/v1/auth/user/referral?userId=${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ referralCode: referInp })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetResData(data)
                toast.warn(data.message)
                if (data.code === 200) {
                    // toast.success("আপনার রাফের সম্পন্ন হয়েছে")
                    navigate("/dashboard/userhome")

                }
            });


    };

    return (
        <div className="flex justify-center items-center">
            <ToastContainer></ToastContainer>
            <div className=''>
                <div className='flex justify-between my-7'>
                    <p className='font-bold'>Activity</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>

                </div>

                <div className='md:flex gap-5'>


                    <div className='w-[400px] h-[500px] bg-white rounded-md '>

                        <div className='mb-4'>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/EkdtmLnuN7A?si=JBSBOy-4wlrHiDMH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='p-2 font-semibold text-lg'>
                            <h1 className="text-red-500 animate-bounce">এখানে কি করে রেফার করবেন তা বলা আছে </h1>
                            <p className='pt-2 font-semibold text-lg'>
                                (১) প্রথমে রেফার কোড বসান তারপর রেফার বাটন এ ক্লিক করোন
                            </p>

                            <p className='pt-2 font-semibold text-lg'>
                                (২)  এর পর সাথে সাথে রেফার বোনাস পেয়ে জাবেন
                            </p>
                            <Link to={"/dashboard/referr"} className="underline text-red-500">My Refer code</Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  md:w-[400px] md:h-[500px] h-[300px] bg-white rounded-md '>

                        <div className=" ">
                            <span className="pl-2 mb-5 text-red-600">{data?.message}</span>
                            <form onSubmit={handleRafer} className='text-center'>
                                <input name="referinp" className='w-11/12 h-14 rounded-md border-2  pl-2' placeholder='রাফের কোড বসান' type="text" required />
                                <button value={"submit"} className='bg-red-500 py-5 px-9 rounded-lg border-none text-white font-bold mt-5'>
                                রেফার করোন
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
                {/* third section recent activity Ends */}
            </div>
        </div>
    );
};

export default Refer;