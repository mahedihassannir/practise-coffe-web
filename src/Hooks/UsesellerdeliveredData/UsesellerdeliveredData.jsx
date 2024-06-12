import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import axios from "axios";


const UseSellerDeliveredData = () => {

    const { loader } = useContext(ContexM);
    const sellerId = localStorage.getItem("sId");
    const sellerAuthToken = localStorage.getItem("sellerToken");

    const { refetch, data: deliveredData = [] } = useQuery({

        queryKey: ['deliveredData',],
        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`http://api.ecom-bd.com/api/v1/seller/delivered_data?sellerId=${sellerId}`, {
                headers: { Authorization: `Bearer ${sellerAuthToken}` }
            })
            return res.json();
        }


    });


    return [deliveredData, refetch];

};
export default UseSellerDeliveredData;




// queryFn: async () => {
//     const res = await axiosSecure(`/carts?email=${user?.email}`)


//     return res.data;

// }