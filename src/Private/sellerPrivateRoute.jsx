// import { useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// const SellerPrivate = (children) => {
//     const [seller, setSeller] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const sellerAuthToken = localStorage.getItem("sellerToken");

//     // console.log(seller?.result?._id);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.ecom-bd.com/api/v1/seller/profile`, {
//                     headers: { Authorization: `Bearer ${sellerAuthToken}` }
//                 });
//                 const sellerData = response.data;
//                 setSeller(sellerData);
//                 // console.log({ sellerData });
//             } catch (error) {
//                 console.error('Error fetching seller data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (sellerAuthToken) {
//             fetchData();
//         } else {
//             setLoading(false);
//         }
//     }, [sellerAuthToken]);

//     if (loading) {
//         return <div>Loading...</div>; // You can replace this with a proper loading component
//     }

//     if (seller?.result?._id) {
//         return children;
//     }

//     return <Navigate to="/seller_login" replace={true} />;
// };

// export default SellerPrivate;

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const SellerPrivate = ({ children }) => {
    const [seller, setSeller] = useState(null);
    const [loading, setLoading] = useState(true);
    const sellerAuthToken = localStorage.getItem("sellerToken");
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.ecom-bd.com/api/v1/seller/profile`, {
                    headers: { Authorization: `Bearer ${sellerAuthToken}` }
                });
                const sellerData = response.data;
                setSeller(sellerData);
            } catch (error) {
                console.error('Error fetching seller data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (sellerAuthToken) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [sellerAuthToken]);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a proper loading component
    }

    if (seller?.result?._id) {
        return children;
    }

    return <Navigate to="/seller_login" state={{ from: location }} replace />;
};

export default SellerPrivate;


