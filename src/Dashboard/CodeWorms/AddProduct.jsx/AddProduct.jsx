import Test from "../../../Components/Test";
// import ReactRichEditor from 'react-rich-text-editor'

import { useEffect, useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [chaked, SetChack] = useState(false);
    const sellerAuthToken = localStorage.getItem("sellerToken");
    const sellerId = localStorage.getItem("sId");
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const [selectedCategory2, setSelectedCategory2] = useState('');

    const handleCategoryChange2 = (e) => {
        setSelectedCategory2(e.target.value);
    };

    // console.log(selectedCategory, selectedCategory2);

    const handleCheckboxChange = () => {
        SetChack(!chaked);
    };

    // this is for the prevent on the load functionality 
    window.addEventListener("beforeunload", (e) => {
        if (window.location.pathname.startsWith("/dashboard/addproduct")) {

            e.preventDefault();
            e.returnValue = "";

            return "Are you sure want to leave ?"
        };
    });
    // prevent ends

    const [description, setEditorHtml] = useState('');
    // console.log(description);
    const handleChange = (html) => {
        setEditorHtml(html);
    };
    const [description2, setEditorHtml2] = useState('');
    // console.log(description2);

    const handleChangetext = (html) => {
        setEditorHtml2(html);
    };

    const [imageUrls, setImageUrls] = useState(Array(3).fill('')); // Initialize with empty strings

    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`



    const handleImageUpload = (e, index) => {

        const file = e.target.files[0];

        const imageData = new FormData();

        imageData.append('image', file);

        fetch(uploadUrl, {
            method: "POST",
            body: imageData
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url;
                setImageUrls(prevUrls => {
                    const updatedUrls = [...prevUrls];
                    updatedUrls[index] = image;
                    return updatedUrls;
                });
            });
    };

    // console.log({ imageUrls });

    const handleData = (e) => {

        e.preventDefault();

        const from = e.target;

        const name = from.name.value;
        const title = from.title.value;
        const price2 = from.price.value;
        const sellerNumber = from.sellerNumber.value;
        const offer = from.PromoPrice.value;
        const stock = from.stock.value;
        const video = from.video.value;

        const price = parseFloat(price2);
        // console.log(price, description);
        const TotalData = {
            product_name: name,
            price: price,
            product_title: title,
            product_description: description,
            product_images: imageUrls,
            category: selectedCategory,
            secondCategory: selectedCategory2,
        };

        // console.log(TotalData);

        fetch(`http://api.ecom-bd.com/api/v1/seller/product_add?sellerId=${sellerId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${sellerAuthToken}`
            },
            body: JSON.stringify(TotalData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // console.log(data?.code);
                if (data?.code === 201) {
                    toast(` product added successfully`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    navigate("/dashboard/ordermanage");
                    Swal.fire({
                        title: "ই কম এ আপনার প্রোডাক্ট অ্যাড করা হয়েছে এখন সবাই আপনার প্রোডাক্ট কিনতে পারবে",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://i.ibb.co/P9tbKgZ/logo.jpg")
                          left top
                          no-repeat
                        `
                    });
                };
                if (data.code === 401) {
                    toast(` ${data?.message}`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                };

            });
    };

    // Define subcategories for each main category
    const subcategories = {
        Food: ['other', "potato", "onion", "grocery"],
        fashion: ['male', 'female'],
        beauty: ['nails', 'lips', 'eyes', 'face', 'Accessories', 'makeup', 'faceMusk', 'hairTreatment', 'other'],
        homeAcc: ["bedSheets", "hangers", "clocks", "cushions", "wall", "lights", 'other'], // Define subcategories for homeAcc if needed
        kids: ["toys", "other", "baby product", 'other'], // Define subcategories for kids if needed
        low: ["other"], // Define subcategories for low if needed
    };


    return (
        <form onSubmit={handleData} className="w-[98%] border-4 border-[#e1e8f0] rounded-md bg-white py-5">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="h-14 w-full bg-[#f7f8fa]">
                <h3 className="font-semibold text-lg p-2 text-orange-600">Basic information</h3>
            </div>

            {/* this section is for product and image adding starts*/}
            <div className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">

                <h3 className="text-2xl font-semibold">পণ্যের ছবি ও ভিডিও</h3>
                {/* <p>Your product images is the first thing your customer sees on the product page.</p> */}
                <p>আপনার পণ্যের চিত্রগুলি হল প্রথম জিনিস যা আপনার গ্রাহক পণ্য পৃষ্ঠায় দেখেন।</p>


                <div className="pt-3">
                    <p className="text-black">পণ্যের ছবি*</p>
                    <p className="text-black">3 থেকে 8টি ছবি আপলোড করুন   </p>
                </div>

                {/* this is image section */}

                <div className="pt-10 ">

                    {/* <Test></Test> */}
                    <div className="grid   grid-cols-3 gap-2 lg:gap-0 lg:grid-cols-10">

                        {/* this is the image section  */}

                        {imageUrls.map((url, index) => (
                            <div key={index} className="flex justify-center items-center border border-dashed border-orange-600 w-24 h-32">
                                <img className="w-full object-cover h-32 " src={url} alt="" />
                                <input type="file" onChange={(e) => handleImageUpload(e, index)} />
                            </div>
                        ))}


                        {/* <div className=" cursor-pointer flex justify-center items-center border border-dashed border-orange-600 w-24  h-32"> */}

                        {/* <input onChange={(e) => handleImageUpload(e, index)} type="file" /> */}

                        {/* <img  className="w-9" src="https://gw.alicdn.com/imgextra/i1/O1CN01SAaWLk21Ez1J3tryB_!!6000000006954-2-tps-55-55.png" alt="" /> */}

                        {/* </div> */}
                        {/* this is the image section ends */}

                        {/* this is the image section  */}

                    </div>

                </div>
                {/* this is image section ends */}

                {/* this is video section */}

                <div className="pt-4 ">

                    <span>ভিডিও</span>

                    <div className="pt-2 flex items-center gap-1">
                        <input onClick={handleCheckboxChange} className="bg-orange-500 rounded-full cursor-pointer" type="radio" />
                        <span>
                            পণ্য ভিডিও URL
                        </span>

                    </div>

                    {/* this is the main input for the seller */}
                    <div className="">
                        <input name="video" disabled={!chaked} className="w-[99%] py-2 mt-2 pl-2  border-2 rounded-lg focus:outline-none focus:border-orange-500 border-gray-300" type="url" placeholder="input youtube video link  " />

                        <br />
                        <span className="mt-3 text-red-700">ইউটিউব ইউআরএল হওয়া উচিত</span>
                    </div>
                    {/* this is the main input for the seller ends */}
                </div>

            </div>
            {/* this is video section ends */}

            {/* this section is for product and image adding ends */}

            {/* this section is for the Product Information */}
            <section className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">

                <h3 className="text-lg text-[#f85f14] font-semibold">
                    পণ্যের তথ্য
                </h3>
                <p className="pt-1">সঠিক পণ্য তথ্য থাকা আবিষ্কারযোগ্যতা বাড়ায়।</p>



                {/* ends of title  */}
                <div className="">
                    <label htmlFor="">
                        <span>পণ্যের নাম লিখুন ইংরেজীতে <span className="text-orange-600 text-lg">*</span></span>
                    </label>

                    {/* this is the input */}
                    <div className="relative">

                        <input name="name" className="w-[99%] py-2 mt-2 pl-32  border-2 rounded-lg focus:outline-none focus:border-blue-500 border-gray-300" type="text" placeholder=" পণ্যের নাম লিখুন  " />

                        <div className="absolute -mt-[41.7px] ml-[2px]">
                            <button className=" rounded-lg py-2 px-4 bg-[#fafafa] text-black ">

                                English

                            </button>
                        </div>
                    </div>
                    {/* this is the input ends */}
                    <label htmlFor="">
                        <span>পণ্যের শিরোনাম লিখুন ইংরেজিতে <span className="text-orange-600 text-lg">*</span></span>
                    </label>

                    {/* this is the input */}
                    <div className="relative">

                        <input name="title" className="w-[99%] py-2 mt-2 pl-24  border-2 rounded-lg focus:outline-none focus:border-blue-500 border-gray-300" type="text" placeholder=" পণ্যের শিরোনাম লিখুন ইংরেজিতে   " />

                        <div className="absolute -mt-[41.7px] ml-[2px]">
                            <button className=" rounded-lg py-2 px-4 bg-[#fafafa] text-black ">

                                English

                            </button>
                        </div>
                    </div>
                    {/* this is the input ends */}

                    <div className="mt-2">

                        <div className="">

                            {/* <input className="w-[99%] py-2 mt-1 pl-2  border-2 rounded-lg focus:outline-none focus:border-orange-500 border-gray-300" type="text" placeholder="select your category  " />
                            <div> */}
                            <label htmlFor="category" className="text-red-500 font-bold ">Select Main Category:</label>

                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="block w-full mt-1 p-2 border rounded-md bg-white border-red-500"
                            >
                                <option value="">Select...</option>
                                <option value="Food">Food</option>
                                <option value="fashion">fashion</option>
                                <option value="beauty">Beauty</option>
                                <option value="homeAcc">Homeacc</option>
                                <option value="kids">Kids</option>
                                <option value="low">Low price</option>
                                {/* Add more options as needed */}
                            </select>

                            <p>Selected Category: {selectedCategory}</p>

                        </div>
                    </div>
                    {/* this is for the labeling category like male or female  */}
                    {selectedCategory && (
                        <div>
                            <label htmlFor="subcategory">Select Subcategory:</label>
                            <select
                                id="subcategory"
                                value={selectedCategory2}
                                onChange={handleCategoryChange2}
                                className="block w-full mt-1 p-2 border rounded-md bg-white border-red-500"
                            >
                                <option value="">Select...</option>
                                {subcategories[selectedCategory].map((subcategory) => (
                                    <option key={subcategory} value={subcategory}>
                                        {subcategory}
                                    </option>
                                ))}
                            </select>
                            <p>Selected Subcategory: {selectedCategory2}</p>
                        </div>
                    )}
                </div>
                {/* category selection ends */}


            </section>
            {/* this section is for the Product Information ends */}

            {/* this is product highlisghts section */}
            <div className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">
                <div className="">
                    <h3 className="text-lg font-semibold">Product Highlights</h3>
                    <p>Having accurate product information raises discoverability. <span className="pl-4 hover:text-blue-500">Learn More</span></p>
                </div>
                {/* this is instructions starts */}
                <div className="mt-2">
                    <p className="textlg">Buyer Promotion Image</p>
                    <h3 className="font-semibold pt-2">White Background Image</h3>
                    <p className="">Upload an image with white background. (Aspect Ratio 1:1)</p>
                </div>
                {/* here is upload system */}
                <div className="">
                    <img className="w-20" src="data:image/png;base64,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" alt="" />
                </div>
                <div className="">
                    {/* this text editor is for the product high lighting section starts*/}
                    <div className=" flex mb-10 ">
                        <div className="lg:w-3/4 w-full p-6   ">
                            <ReactQuill
                                value={description2}
                                onChange={handleChangetext}
                                className="h-64"
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        ['bold', 'italic', 'underline'],
                                        [{ 'align': [] }],
                                        ['link'],
                                    ],
                                }}
                                placeholder="Make A Product Highlights"
                            />
                        </div>
                    </div>
                    {/* this text editor is for the product high lighting section ends */}



                </div>
                {/* this is instructions ends */}
            </div>
            {/* this is product highlisghts section ends */}





            {/* this is for the text-editor */}
            <section className=" mt-3 bg-white  w-[99%] mx-auto border-2 rounded-lg pb-16 ">
                <div className="w-full h-10 pl-2 bg-[#f7f8fa]">

                    <h1 className="text-[#f85f14] font-bold">Description</h1>

                </div>

                {/* <ReactRichEditor height={200} /> */}
                <div className=" flex ">
                    <div className="lg:w-3/4 w-full p-6   ">
                        <ReactQuill
                            value={description}
                            onChange={handleChange}
                            className="h-64"
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['bold', 'italic', 'underline'],
                                    [{ 'align': [] }],
                                    ['link'],
                                ],
                            }}
                            placeholder="Make A description"
                        />
                    </div>
                </div>

            </section>
            {/* this is for the text-editor */}


            {/* this is price related work */}

            {/* this is for the text-editor */}
            <section className=" mt-3 bg-white  w-[99%] mx-auto border-2 rounded-lg pb-16 ">

                <div className="w-full h-10 pl-2 bg-[#f7f8fa]">
                    <h1 className=" text-[#f85f14] font-bold ">Variants, Price, Stock</h1>
                </div>
                {/* this is input fields starts */}
                {/* title starts */}
                <span className="pl-2">Price & Stock *</span>
                {/* title ends */}
                <div className="p-2 grid grid-cols-1  justify-center lg:justify-start lg:flex ">


                    <div className="relative mt-2 ml-4">

                        <input name="price" className="  w-40 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-14 hover:shadow-md" placeholder="Price" type="text" />

                        <div className="absolute top-0">
                            <button className="py-[10px] px-3 bg-[#f2f3f7] ">BDT</button>
                        </div>



                    </div>

                    <div className="relative mt-2 ml-4">

                        <input name="PromoPrice" className="  w-60 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-14 hover:shadow-md" placeholder="Promo Price" type="text" />

                        <div className="absolute top-0">
                            <button className="py-[10px] px-3 bg-[#f2f3f7] ">BDT</button>
                        </div>



                    </div>


                    {/* this field is for the product pice related  */}
                    <div className="relative mt-2 ml-4">

                        <input name="stock" className="  w-40 border-2 py-2 focus:outline-none pl-2 rounded-md hover:shadow-md focus:border-orange-500 border-gray-300" placeholder="product stock" type="number" />





                    </div>

                    {/* this field is for the product pice related ends  */}

                    <div className="mt-2 ml-4">

                        <input name="sellerNumber" className="  w-60 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-2 hover:shadow-md" placeholder="Seller phone number" type="text" />




                    </div>
                    {/* 
                    <div className="mt-2 ml-4">

                        <button className="py-[10px] px-5 rounded-md bg-orange-500 text-white ">
                            Apply All

                        </button>


                    </div> */}


                </div>

                {/* this is input fields ends */}




                <button className="mt-4 ml-5 py-5 px-6 border-dotted rounded-lg bg-orange-500 font-semibold text-white" type="submit">Add Product</button>


            </section>

            {/* this is price related work ends */}

        </form>
    );
};

export default AddProduct;