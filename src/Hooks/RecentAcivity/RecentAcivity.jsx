import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseRecentAcivity = () => {



    const { user, loader } = useContext(ContexM);


    const { refetch, data: RecentActivity = [] } = useQuery({

        queryKey: ['RecentActivity', user?.email],
        enabled: !loader,

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/recent_views?email=${user?.email}`)

            return res.json();
        }


    });

    console.log(RecentActivity.length);

    return [RecentActivity, refetch];





};

export default UseRecentAcivity;