import { useEffect, useState } from "react";

const Test = () => {

    const [imageUrls, setImageUrls] = useState(Array(10).fill('')); // Initialize with empty strings
    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`

    

    const theData = { imageUrls}

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
    }


    const handleSellerAddProduct = () => {

        fetch()


    }

    handleSellerAddProduct();


    return (
        <div className="grid   grid-cols-4 gap-2 lg:gap-0 lg:grid-cols-10">

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
    );
};

export default Test;