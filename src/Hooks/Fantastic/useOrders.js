import { useEffect } from "react";
import { useState } from "react";

function useOrders() {
    const [orders, setOrders] = useState([]);
    
      useEffect(() => {
        fetch('http://api.ecom-bd.com/orders')
          .then(response => response.json())
          .then(data => {
            setOrders(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return orders
}

export default useOrders