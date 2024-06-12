import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Privateroute = ({ children }) => {

    const authToken = localStorage.getItem("userToken")
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(userProfile?.sanitizedResult?._id);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://api.ecom-bd.com/api/v1/user/profile`, {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
                const userData = response.data;
                setUserProfile(userData);
                // console.log({ userData });
            } catch (error) {
                console.error('Error fetching seller data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (authToken) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [authToken]);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a proper loading component
    }

    if (userProfile?.sanitizedResult?._id) {
        return children;
    }

    return <Navigate to="/login" replace={true} />

};

export default Privateroute;
