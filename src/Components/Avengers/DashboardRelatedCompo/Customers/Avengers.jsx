//AVENGERS
//TOMA
//All component for customer page


import ConversionRate from "./ConversionRate/ConversionRate";
import Customer from "./Customer/Customer";
import CustomerRetentionRate from "./CustomerRetentionRate/CustomerRetentionRate";

const Avengers = () => {
  

  return (
    <div>
      <Customer></Customer>
      <ConversionRate></ConversionRate>
      <CustomerRetentionRate></CustomerRetentionRate>
    </div>
  );
};

export default Avengers;
