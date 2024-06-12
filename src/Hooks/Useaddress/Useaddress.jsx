import { useContext } from "react";
import { useEffect } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Useaddress = () => {
    const authToken = localStorage.getItem("userToken");
    const id = "mmm";
    const { refetch, data: address = [] } = useQuery({

        queryKey: ['address', id],

        queryFn: async () => {

            const res = await fetch(`https://api.ecom-bd.com/api/v1/user/address`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
                }
            })

            return res.json();
        }


    });


    return [address, refetch];



};

export default Useaddress;