import { useQuery } from "@tanstack/react-query";

const UseOrders = () => {
    const id = localStorage.getItem("sId");
    const sellerAuthToken = localStorage.getItem("sellerToken");
    const { refetch, data: orders = [] } = useQuery({

        queryKey: ['orders', id],

        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/api/v1/seller/orders?sellerId=${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sellerAuthToken}`
                }
            })

            return res.json();
        }


    });


    return [orders, refetch];



};

export default UseOrders;