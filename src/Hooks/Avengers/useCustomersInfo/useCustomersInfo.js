import { useQuery } from "@tanstack/react-query";

const useCustomersInfo = () => {
  const {data : customerInfo ={}} = useQuery({
    queryKey: ["customerInfo"],
    queryFn: async () => {
      const result = await fetch("https://api.ecom-bd.com/allUser");
      const data = await result.json()
     // console.log(data)
      return data
    },
  });

  return {customerInfo}
};

export default useCustomersInfo;
