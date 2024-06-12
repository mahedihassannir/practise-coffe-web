import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const getCart = () => {

    const id = 'mmmm'

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', "mahedi"],
        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`https://api.ecom-bd.com/api/v1/user/cart/${id}`)

            return res.json();
        }


    });

    // console.log(RecentActivity.length);

    return [cart, refetch];





};

export default getCart;