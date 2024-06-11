import { useState, Component } from "react";

const Addperformence = () => {
  const [activeTab, setActiveTab] = useState("MiniBus");

  const options = {
    title: {
      text: "BDT"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 },
        { label: "Grape", y: 28 }
      ]
    }]
  }


  return (
    <div>
  
    </div>
  );
};

export default Addperformence;