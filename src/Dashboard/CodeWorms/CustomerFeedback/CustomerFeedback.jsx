
/** 
 * name: mahedi
 * date: 28/8/2023
 * Work: CustomerFeedback
*/

import axios from "axios";
import { useEffect, useState } from "react";

const CustomerFeedback = () => {

    const [seller, SetSeller] = useState(null);
    const sellerId = seller?.result?.sellerProfile?._id;
    const id = "mm";
    const sellerToken = localStorage.getItem("sellerToken");

    useEffect(() => {
        const fetchData = async () => {

            const sellerAuthToken = localStorage.getItem("sellerToken");

            try {
                const response = await axios.get(`https://api.ecom-bd.com/api/v1/seller/profile`, {
                    headers: { Authorization: `Bearer ${sellerAuthToken}` }
                });
                const sellerData = response.data;
                SetSeller(sellerData);
                // console.log({ sellerData });
                // console.log(sellerData);

                // Set sellerData in your component state or context for rendering.
            } catch (error) {
                console.error('Error fetching seller data:', error);
            };
        };

        fetchData();

    }, []);
    // console.log(seller?.result?.sellerProfile?.products);



    return (
        <div>



        </div>
    );
};

export default CustomerFeedback;