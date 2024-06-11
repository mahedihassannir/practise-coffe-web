import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";

const Seller = () => {
    return (
        <div className="text-white">




            <Link to="dashboard/userwishlist">
                <div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4>Wish List</h4>
                </div>
            </Link>
            <Link className="my-2" to="dashboard/userwishlist">
                <div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4>Wish List</h4>
                </div>
            </Link>
            <Link to="dashboard/userwishlist">
                <div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4>Wish List</h4>
                </div>
            </Link>
        </div>
    );
};

export default Seller;