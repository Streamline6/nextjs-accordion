import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:bg-pink-500 hover:shadow-lg focus:bg-pink-500 "
      >
        <div className="flex group cursor-pointer">
          <div className="text-pink-600 font-semibold pl-10 group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-600" />
          ) : (
            <HiX className="w-6 h-6 group-hover:text-white text-pink-600" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-pink-100 pl-10  font-semibold text-pink-500 w-3/4 h-auto  rounded-md p-4 border-l-2 border-blue-300 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
