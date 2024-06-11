import { FaDollarSign, FaKorvue, FaStar, FaStarHalfAlt } from "react-icons/fa";
import useUserProfile from "../../../Hooks/user/userProfile";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const UserOrder = () => {
    const authToken = localStorage.getItem("userToken");
    const userProfile = useUserProfile(authToken);

    // console.log(userProfile);

    let totalPrice = 0;
    const func = () => {
        userProfile?.sanitizedResult?.orderHistory.forEach(res => {

            totalPrice += res.totalPrice

        })
    }
    func()
    // console.log(totalPrice);
    return (
        <div className='min-w-[900px]'>
            <div className="w-full h-20 bg-white rounded-lg py-2 px-4">
                <h1 className="text-lg font-semibold">ই-কমে মোট টাকা খরচ </h1>
                <h1 className="font-semibold text-lg text-red-500 flex items-center gap-2">{totalPrice}  <span>টাকা</span></h1>
            </div>

            {/* order tabel body  */}
            {userProfile?.sanitizedResult?.orderHistory.map((res, index) => (
                <div key={index} className="">

                    <div className="md:w-[1300px] w-[400px] md:h-96 mt-2 bg-white border-2 border-black rounded-md md:flex md:m-10">
                        {/* design */}
                        <div className="md:w-[350px] border-2 h-96 rounded-md block">
                            <div className="mt-3 pl-3">
                                {/* <h1 className="flex gap-2">Review: <span className="text-red-400 font-semibold">{res.comment}</span></h1> */}
                                <p className="flex items-center gap-2"><FaKorvue></FaKorvue> Verified Buyer</p>
                                {/* infos */}
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqvZ_SoPlVM0REGEjcjVcLMiOwCz9XT4k1A&usqp=CAU" alt="" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqvZ_SoPlVM0REGEjcjVcLMiOwCz9XT4k1A&usqp=CAU" alt="" />
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
                                        <span>Id: </span>  {res?._id}
                                    </h2>
                                    <h2 className="flex items-center text-2xl font-semibold text-red-500">
                                        {/* {res?.} */}
                                        <span className="">PaymentMethod: {res.paymentMethod}</span>
                                    </h2>
                                </div>
                                <div>
                                    <h1 className="text-md font-semibold">Address: {res?.address}</h1>
                                    <h1 className="text-md font-semibold">Charge: {res?.deliveryCharge}</h1>
                                    <h1 className="text-md font-semibold">PaymentStatus: {res?.paymentStatus}</h1>
                                    <h1 className="text-md font-semibold">Price: <span className="text-red-500">{res?.totalPrice} টাকা</span></h1>
                                    <h1 className="text-md font-semibold">totalProducts: {res?.product?.length}</h1>
                                </div>
                                <Link to={""}>
                                    <button className="mt-3 underline text-md font-semibold">read more</button>
                                </Link>

                            </div>

                        </div>
                        {/* infos ends */}


                    </div>

                </div>
            ))}

        </div>
    );
};

export default UserOrder;