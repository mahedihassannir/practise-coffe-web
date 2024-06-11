import React from "react";
import SegmentationByGender from "./SegmentationByGender";
import useCustomersInfo from "../../../../../Hooks/Avengers/useCustomersInfo/useCustomersInfo";

const Demographic = () => {
  const { customerInfo } = useCustomersInfo();
  const { usersAge } = customerInfo;

  const userAgeArr = usersAge?.[0]?.users;


  return (
    <div className="p-5">
      {
        userAgeArr?.map((singleUser, index) => {
          // console.log(Object.keys(singleUser)?.[0])
          return <div key={index}>
            <div className="flex justify-between text-base mt-3">
              <h3 className="text-[#688D8C] font-bold  ">Age {Object.keys(singleUser)?.[0]}</h3>
              <h3 className="text-[#00193B] font-bold  ">{singleUser?.[Object.keys(singleUser)?.[0]]}</h3>
            </div>
            <span className="flex items-center font-bold">
              <progress
                className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 "
                value="50"//todo dynamic
                max="100"
              ></progress>
            </span>
          </div>
        })
      }


      {/* <div>
        <div className="flex justify-between mt-4 text-base ">
          <h3 className="text-[#688D8C] font-bold  ">Age 25-45</h3>
          <h3 className="text-[#00193B] font-bold ">15,234</h3>
        </div>
        <span className="flex items-center font-bold">
          <progress
            className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 "
            value="45"
            max="100"
          ></progress>
        </span>
      </div>
      <div>
        <div className="flex justify-between text-base mt-4">
          <h3 className="text-[#688D8C] font-bold ">Age 45-65</h3>
          <h3 className="text-[#00193B] font-bold ">2,030</h3>
        </div>
        <span className="flex items-center font-bold ">
          <progress
            className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 "
            value="10"
            max="100"
          ></progress>
        </span>
      </div>
      <div>
        <div className="flex justify-between text-base mt-4">
          <h3 className="text-[#688D8C] font-bold  ">Age over 65</h3>
          <h3 className="text-[#00193B] font-bold  ">792</h3>
        </div>
        <span className="flex items-center font-bold">
          <progress
            className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 "
            value="5"
            max="100"
          ></progress>
        </span>
      </div> */}
      <SegmentationByGender></SegmentationByGender>
    </div>
  );
};

export default Demographic;
