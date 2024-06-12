import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";

const SellerLogin = () => {
    const [res, setRes] = useState(null);
    // console.log(res);
    const [captchaValue, SetCaptchaValue] = useState(null);
    // 
    const [fromdata, setdata] = useState(null);

    const navigate = useNavigate();

    function onChange(value) {
        // console.log("Captcha value:", value);

        SetCaptchaValue(value)
    }


    // this is for the prevent on the load functionality 
    window.addEventListener("beforeunload", (e) => {
        if (window.location.pathname.startsWith("/seller_register/form")) {

            e.preventDefault();
            e.returnValue = "";

            return "Are you sure want to leave ?"
        };
    });
    // prevent ends


    // getting value 

    const handleFromData = async (e) => {

        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        const fromDataobj = {
            email,
            password

        };
        setdata(fromDataobj);

        // here is the fetching for the seller login detail

        try {

            const response = await axios.post("https://api.ecom-bd.com/api/v1/auth/seller/login", { email, password });

            // console.log(response.data);
            setRes(response.data)

            if (response.data.code === 200) {
                //  local storage work
                localStorage.setItem("sellerToken", response.data.data.access_token);
                localStorage.setItem("sId", response.data.data.profileID);
                localStorage.setItem("aId", response.data.data.id);
                // ///
                if (response?.data?.data?.profileID) {
                    navigate("/dashboard/sellerhome");
                } else {
                    navigate("/seller_register/personal_details");
                };
            }
            else {
                // Login failed
                console.error(response.data);
            };

        } catch (error) {
            // Handle any errors from the request
            console.error('Error logging in:', error);
        };

        // here is the fetching for the seller login detail eds




    };

    // getting value  ends





    return (
        <div className="w-full h-screen">

            < div className=' my-3 md:my-10 md:px-20 '>
                <div className='max-w-[400px]   mx-auto'>
                    <h1 className='text-center text-3xl font-bold'>
                        E-Com Seller Login

                    </h1>

                    <form onSubmit={handleFromData} className='w-full p-4 rounded border border-gray-500 mt-4'>

                        <p className='text-2xl font-semibold'>Create account</p>


                        {/* email  */}
                        <div className='mt-3'>
                            <label
                                htmlFor='email'
                                className='font-semibold'
                            >
                                Email
                            </label>

                            {res?.error}

                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
                                />
                            </div>
                        </div>

                        {/* password  */}
                        <div className='mt-3'>
                            <label
                                htmlFor='password'
                                className='font-semibold'
                            >
                                Password
                            </label>

                            <div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    className='w-full py-1 px-2 outline-none mt-1 border border-gray-400 rounded focus:shadow-[0px_0px_0px_2px_rgba(249,115,22,.5)] duration-200'
                                    placeholder='At least 6 characters'
                                />
                                <div>
                                    <small>
                                        Passwords must be at least 6 characters.
                                    </small>
                                </div>
                            </div>
                        </div>



                        {/* google recaptcha */}
                        {/* <div className='mt-3'>
                            <ReCAPTCHA
                                sitekey="6Lf68lAoAAAAAMILQYi3JdLblDkyIYKQ_nXk-kGd"
                                onChange={onChange}
                            />

                        </div> */}




                        {/* submit btn  */}
                        <div>

                            {/* <abbr title={captchaValue === null ? "click and verify" : "verified done"}>

                                <button type="submit" disabled={!captchaValue} className={`py-2 w-full mt-4  rounded  font-bold ${captchaValue === null ? "bg-gray-500" : "bg-[#F97316]"}`}>
                                    Next
                                </button>
                            </abbr> */}
                            {/* <abbr title={captchaValue === null ? "click and verify" : "verified done"}> */}

                            <button type="submit" className={`py-2 w-full mt-4  rounded  font-bold   bg-[#F97316]`}>
                                Next
                            </button>
                            {/* </abbr> */}



                        </div>
                    </form>
                </div>
            </ div >

        </div>
    );
};

export default SellerLogin;