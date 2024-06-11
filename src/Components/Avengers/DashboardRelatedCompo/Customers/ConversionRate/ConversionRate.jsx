//AVENGERS
//TOMA
//Conversion  section


import ConversionRateLeftSide from "./ConversionRateLeftSide";
import ConversionRateRightSide from "./ConversionRateRightSide";

const ConversionRate = () => {
  

  return (
    <div className="md:flex justify-between my-10">
      <ConversionRateLeftSide></ConversionRateLeftSide>
      <ConversionRateRightSide></ConversionRateRightSide>
    </div>
  );
};

export default ConversionRate;
