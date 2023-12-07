import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <img
    src={icon}
    alt={icon}
    className='w-[100%] h-[100%]'
    />
  );
};

export default BallCanvas;