import { Link } from "react-router-dom";

const SellerAccountCreatedDone = () => {

    const isSellerVeryfied = false;

    return (
        <div className="w-full h-screen">


            {
                isSellerVeryfied ? <div className="">



                </div>
                    :
                    <div className="">


                        <h1 className="text-4xl text-red-700">

                            congratulation

                        </h1>

                    </div>
            }


            <Link to="/dashboard/dashboard/sellerhome">
                <button className="btn">

                    go to dash board

                </button>
            </Link>



        </div>
    );
};

export default SellerAccountCreatedDone;