import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";

const Login = () => {

    const [res, setResponses] = useState(null);
    // console.log(res);

    const { loginwithpopup, singinUser } = useContext(ContexM)

    const navigate = useNavigate()

    const loginwitgoogle = () => {

        loginwithpopup()
            .then(res => {

                const userData = res.user;



                const userinfo = { name: userData?.displayName, email: userData?.email, image: userData?.photoURL, verifed: userdata.emailVerified, phone: userdata.phoneNumber }

                // console.log({ userinfo });



                fetch(`http://localhost:5000/api/v1/auth/user/register`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ name: userinfo?.name, email: userinfo?.email, password: "$2b$10$i8kQM1fEvZFr8vl0P9Xo4ONKJ0X4LuS8vPfSxmAOOuXDfxV0vEDFC" })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        setResponses(data)
                        if (data.code === 201) {
                            navigate("/")
                        }
                    })

            })
            .catch(err => {
                // console.log(err.message);
            });

    }


    const handleReg = (e) => {

        // for no reloade 
        e.preventDefault();
        // for no reloade ends 

        // from iput values
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // temp image
        fetch(`http://localhost:5000/api/v1/auth/user/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                setResponses(data)
                if (data.code === 200) {
                    localStorage.setItem("userToken", data?.data?.access_token);
                    navigate("/")
                }
            });


    };

    return (

        <div className="w-11/12 mx-auto my-4 h-auto md:h-[80vh] flex justify-center items-center" >

            <div className="w-11/12 shadow-md py-10 px-2   ">
                <h3 className="text-black pb-4 md:pb-10 text-1xl md:text-3xl font-semibold ">Welcome To E-com</h3>

                {/* handle reg  */}
                <form onSubmit={handleReg} className="md:flex   ">

                    {/* this is from div */}
                    <div className="md:w-1/2">

                        {/* email */}
                        <br />
                        <label htmlFor="">
                            <span>আপনার ইমেইল দিন</span>
                        </label>

                        <br />

                        <input name="email" className=" my-2 w-full md:w-3/4 py-3 border-[2px] pl-2 border-gray-400" type="email" placeholder="Please enter your Email" />

                        {/* email */}
                        <br />
                        <label className="" htmlFor="">
                            {
                                res?.password
                                    || res?.error ?
                                    <span className="text-red-500">{res?.password || res?.error}</span>
                                    :
                                    <span>আপনার পাসওয়ার্ড দিন</span>

                            }

                        </label>
                        <br />

                        <input name="password" className=" my-2 w-full md:w-3/4 py-3 border-[2px] pl-2 border-gray-400" type="password" placeholder="Please enter your Password" />

                        {/* email */}


                    </div>

                    {/* this is btn and other div */}
                    <div className="md:w-1/2   mt-2 md:mt-0">

                        {/* this is redirect to register page */}
                        <div className="">

                            <h3 className="flex gap-1 font-semibold">

                                New member ?

                                <span className="text-blue-700 ">
                                    <Link to="/register">
                                        register</Link>
                                </span>

                                <span>here</span>


                            </h3>
                        </div>

                        {/* this is redirect to register page */}


                        {/* login btn  */}
                        <div className="mt-4 text-center md:text-left">

                            <button className=" w-11/12 md:w-3/5 mx-auto bg-orange-600 py-5 rounded-sm text-white font-semibold  ">
                                Login
                            </button>
                        </div>
                        {/* login btn  ends */}




                        <samp className="flex pl-3 my-2 ">
                            Or, login with
                        </samp>

                        <div className="mt-4 text-center md:text-left">

                            <button className="  w-11/12 md:w-3/5 mx-auto bg-blue-600 py-3 rounded-sm text-white font-semibold  ">
                                <span className="flex justify-center items-center">
                                    <span><FaFacebook className="text-3xl text-white mr-4"></FaFacebook></span> <span>Fackbook</span>

                                </span>
                            </button>

                        </div>
                        {/* fackbook login ends */}

                        {/* Google login starts */}
                        <div className="mt-4 text-center md:text-left">

                            <button onClick={loginwitgoogle} className="  w-11/12 md:w-3/5 mx-auto bg-red-600 py-3 rounded-sm text-white font-semibold  ">
                                <span className="flex justify-center items-center">
                                    <span><FaGoogle className="text-3xl text-white mr-4"></FaGoogle></span> <span>Google</span>

                                </span>
                            </button>

                        </div>
                        {/* google  login ends */}


                    </div>

                </form>
                {/* handle reg ends  */}

            </div >




        </ div >




    );
};

export default Login;