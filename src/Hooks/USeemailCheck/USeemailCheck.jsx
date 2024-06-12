import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";


const USeemailCheck = () => {
    const { user, loader } = useContext(ContexM);

    // console.log(user?.email);
    // const token = localStorage.getItem("jwtToken")


    const token = localStorage.getItem('jwtToken');

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email],

        enabled: !loader,

        queryFn: async () => {
            const res = await fetch(`https://api.ecom-bd.com/seller_register_data?email=${user?.email}`, {
                headers: { authorization: `barer ${token}` }
            });

            return res.json();
        },




    });

    return [cart, refetch];

};
export default USeemailCheck;