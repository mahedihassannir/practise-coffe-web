import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UseSellerOrders = () => {

    const [seller, SetSeller] = useState(null);
    const sellerId = seller?.result?.sellerProfile?._id;
    const id = "mm";
    const sellerToken = localStorage.getItem("sellerToken");

    useEffect(() => {
        const fetchData = async () => {

            const sellerAuthToken = localStorage.getItem("sellerToken");

            try {
                const response = await axios.get(`http://localhost:5000/api/v1/seller/profile`, {
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
    // console.log(seller);
    const { refetch, data: order = [] } = useQuery({


        queryKey: ['order', id],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/seller/orders?sellerId=${sellerId}`, {
                headers: { Authorization: `Bearer ${sellerToken}` }
            });
            return res.json();
        }
    });
    // console.log(order.length);
    return [order, refetch];
    // return [seller]
};
export default UseSellerOrders;