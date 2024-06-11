/* Date: 8/27/23
 * Author: MASUM
 * Description: Get all the Divisions
*/

import { useEffect, useState } from "react";

const useDivisions = () => {
 // store all products
  const [divisions, setDivisions] = useState([]);

// can use this loading to set any conditions based on data loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://bdapis.com/api/v1.1/divisions')
      .then(response => response.json())
      .then(data => {
        setDivisions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { divisions, loading };
};

export default useDivisions;

