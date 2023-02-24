import React from "react";

const ButtonComponent = ({ bg, text, blue }) => {
  return (
    <div
      className={`p-2 border py-[10px] px-[28px] md:px-[40px] rounded-[50px] flex items-center justify-center ${
        bg ? "bg-greenPrim text-white border-greenPrim" : ""
      } ${blue && "border-greenPrim border-[2px]"}}`}>
      <div className={`${blue ? "text-greenPrim" : ""}`}>{text}</div>
    </div>
  );
};

export default ButtonComponent;
