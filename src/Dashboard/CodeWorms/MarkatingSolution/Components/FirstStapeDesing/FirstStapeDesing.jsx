import { useState } from "react";

const FirstStapeDesing = () => {

    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked); // Update the checkbox value when it changes

    };



    const handleDisable = isChecked;

    return (
        <div className="">
            <div className="w-[96%] mx-auto bg-[#f5f5f5] py-10">



                {/* this is the parent div for the first step design  */}
                <div className="">

                    <div className="">

                        {/* this is the title for the firststep page starts */}
                        <h1 className="text-4xl font-bold text-center text-[#565656] ">
                            Grow your business with Daraz Sponsored Solutions
                        </h1>
                        {/* this is the title for the firststep ends */}

                        {/* this is short description starts  */}
                        <div className="">

                            <p className="text-2xl text-[#565656] text-center font-semibold pt-5 leading-10">Daraz Sponsored Solutions helps you gain more traffic and grow your business at every stage of your customers’ journey. Set up your first campaign today!</p>

                        </div>
                        {/* this is short description  ends */}


                    </div>
                    {/* title and des is ends */}

                    {/* this section is for the cards */}
                    <section className="  w-full flex justify-center  ">
                        <section className="  px-3 py-6 grid grid-cols-1 gap-2 lg:grid-cols-3 mx-auto ">

                            <div className="w-72 h-80  shadow-lg bg-white border-2 rounded-lg ">

                                {/* this div is for img starst*/}
                                <div className="">
                                    <img className="w-full rounded-lg" src="https://i.ibb.co/WKGWBkh/undraw-Analysis-dq08.png" alt="" />
                                </div>
                                {/* this div is for imge ends */}

                                {/* this div is for title starts */}
                                <div className="">
                                    <h1 className="text-2xl text-center pt-4 text-[#565566]  px-2">
                                        Discovered by Millions of
                                        Customers
                                    </h1>
                                </div>
                                {/* this div is for title ends */}

                            </div>

                            <div className="w-72 h-80  shadow-lg bg-white border-2 rounded-lg ">

                                {/* this div is for img starst*/}
                                <div className="">
                                    <img className="w-full rounded-lg" src="https://i.ibb.co/WKGWBkh/undraw-Analysis-dq08.png" alt="" />
                                </div>
                                {/* this div is for imge ends */}

                                {/* this div is for title starts */}
                                <div className="">
                                    <h1 className="text-2xl text-center pt-4 text-[#565566]  px-2">
                                        Discovered by Millions of
                                        Customers
                                    </h1>
                                </div>
                                {/* this div is for title ends */}

                            </div>

                            <div className="w-72 h-80  shadow-lg bg-white border-2 rounded-lg ">

                                {/* this div is for img starst*/}
                                <div className="">
                                    <img className="w-full rounded-lg" src="https://i.ibb.co/WKGWBkh/undraw-Analysis-dq08.png" alt="" />
                                </div>
                                {/* this div is for imge ends */}

                                {/* this div is for title starts */}
                                <div className="">
                                    <h1 className="text-2xl text-center pt-4 text-[#565566]  px-2">
                                        Discovered by Millions of
                                        Customers
                                    </h1>
                                </div>
                                {/* this div is for title ends */}

                            </div>



                        </section>
                    </section>
                    {/* this section is for the cards ends */}



                    {/* all the thing don under this div starts ends */}
                </div>
                {/* all the thing don under this div  ends */}

                {/* this is the parent div for the first step design  ends */}

            </div>
            {/* ends for the desing related work  */}

            {/* ..................... */}

            {/* this is for the boost my sell btn related work  */}
            <section className="text-center my-10">

                <abbr title={isChecked === false ? "fill the checkbox" : "Boost btn"}>

                    <button disabled={!isChecked} className="py-6 px-14 rounded-md text-white bg-[#1890ff] border-none text-2xl">

                        Boost My Sell!

                    </button>

                </abbr>
            </section>
            {/* this is for the boost my sell btn related work  ends */}



            <hr className="border-1 border-black" />

            {/* this section is for the privecy and policy  */}
            <section className="px-10 pt-10">

                {/* this div is for another privacy starts */}
                <div className="">
                    <p>To start using our services, you must accept the Terms and Conditions. By using the Service, you acknowledge that you have reviewed, understood, and agree to the Terms and Conditions. You further agree to the representations made by yourself below. </p>
                </div>
                {/* this div is for another privacy ends */}

                {/* .............................. */}

                {/* this div is for the cheking checkbox starts */}
                <div className="py-2 ">

                    <input checked={isChecked} onChange={handleCheckboxChange} type="checkbox" name="" id="" />
                    <span className="pl-2">
                        I have read and agree to the <samp className="text-blue-600">Terms and Conditions</samp>
                    </span>

                </div>

                {/* this div is for the cheking checkbox ends */}

                {/* .............................. */}


                {/* this div is for another privacy  */}
                <div className="">
                    <p>By checking the box above, I represent and confirm that I am authorised to execute contracts on behalf of my organisation

                        If you are a brand partner or operate multiple stores on Daraz, please reach out to adsolutions@daraz.com.bd to sign up.
                    </p>
                </div>
                {/* this div is for another privacy ends  */}


            </section>
            {/* this section is for the privecy and policy ends */}



        </div>
    );
};

export default FirstStapeDesing;