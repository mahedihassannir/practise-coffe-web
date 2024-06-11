import { useQuery } from "@tanstack/react-query";

const useCustomersInfo = () => {
  const {data : customerInfo ={}} = useQuery({
    queryKey: ["customerInfo"],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/allUser");
      const data = await result.json()
     // console.log(data)
      return data
    },
  });

  return {customerInfo}
};

export default useCustomersInfo;
