// import { useContext } from "react";
// import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useUserProfile from "../user/userProfile";


// const UseCartHook = () => {
//     const authToken = localStorage.getItem("userToken");
//     const userProfile = useUserProfile(authToken);
//     console.log(userProfile?.sanitizedResult?._id);
//     const id = userProfile?.sanitizedResult?._id
//     const token = localStorage.getItem("userToken")
//     console.log("from 10 number line ", { token });

//     const { refetch, data: cart = [] } = useQuery({

//         queryKey: ['cart', id],

//         queryFn: async () => {

//             const res = await fetch(`http://api.ecom-bd.com/api/v1/user/cart?userId=${id}`, {
//                 headers: { Authorization: `Bearer ${authToken}` }
//             })

//             return res.json();
//         }


//     });

//     console.log(cart, "cart");

//     return [cart, refetch];

// };
// export default UseCartHook;




// // queryFn: async () => {
// //     const res = await axiosSecure(`/carts?email=${user?.email}`)


// //     return res.data;

// // }

// import { useQuery } from "@tanstack/react-query";
// import useUserProfile from "../user/userProfile";

// const UseCartHook = () => {
//     const authToken = localStorage.getItem("userToken");
//     const userProfile = useUserProfile(authToken);
//     const id = userProfile?.sanitizedResult?._id;

//     // Retrieve the cart status from localStorage
//     const cartStatus = localStorage.getItem('cart');

//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['cart', id],
//         queryFn: async () => {
//             if (!id || cartStatus !== 'added') return [];

//             const res = await fetch(`http://api.ecom-bd.com/api/v1/user/cart?userId=${id}`, {
//                 headers: { Authorization: `Bearer ${authToken}` }
//             });

//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             return res.json();
//         },
//         enabled: !!id && cartStatus === 'added' // Only run the query if user ID is available and cart status is 'added'
//     });

//     console.log(cart, "cart");

//     return [cart, refetch];
// };

// export default UseCartHook;



import axiosInstance from '../../Private/AsxiosSecurityForUser'; // Import the Axios instance

import { useQuery } from "@tanstack/react-query";
import useUserProfile from "../user/userProfile";

const UseCartHook = () => {
    const authToken = localStorage.getItem("userToken");
    const userProfile = useUserProfile(authToken);
    const id = userProfile?.sanitizedResult?._id;

    // Retrieve the cart status from localStorage
    const cartStatus = localStorage.getItem('cart');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', id],
        queryFn: async () => {
            if (!id || cartStatus !== 'added') return [];

            try {
                const response = await axiosInstance.get(`/cart?userId=${id}`); // Use axiosInstance to make the request
                return response.data;
            } catch (error) {
                console.error('Error fetching cart:', error);
                throw new Error('Error fetching cart');
            }
        },
        enabled: !!id && cartStatus === 'added' // Only run the query if user ID is available and cart status is 'added'
    });

    // console.log(cart, "cart");

    return [cart, refetch];
};

export default UseCartHook;
