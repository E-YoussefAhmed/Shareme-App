import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="mx-5 mb-5">
        <Circles color="#00bfff" height={50} width={200} />
      </div>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
