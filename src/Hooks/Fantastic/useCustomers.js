/* Date: 8/31/23
 * Author: MASUM
 * Description: Get all the Divisions
*/

import { useEffect, useState } from "react";

const useCustomers = () => {
 // store all products
  const [customers, setCustomers] = useState([]);

// can use this loading to set any conditions based on data loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/customerInfo')
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { customers, loading };
};

export default useCustomers;

