import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";

const UseUserOrder = () => {

    // getting the auth provider
    const { user, loader } = useContext(ContexM)


    // this is the query we use the tanstack query
    const { refetch, data: userOrderData = [] } = useQuery({


        // this is the query key
        queryKey: ["userOrderData", user?.email]
        , enabled: !loader,

        // this is the query function 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userOrders?email=${user?.email}`)

            return res.json();
        },





    })

    // here we go we return the result
    return [userOrderData, refetch];

};

export default UseUserOrder;


// the function

// the contex

// first  is useQuery

// 2nd  is queryKey

// 3rd  is queryFn means queryFunction then return it read the doc do not copy ok next time

// the function ends


