import React from "react";

interface ButtonPropType {
  label: string;
  txtColor: "#FFF6DF" | "#852E2C";
  pillColor: "#852E2C" | "#FFCD00";
  onClickFun: () => void;
}

const CustomButton = (prop: ButtonPropType) => {
  const { label, txtColor, pillColor, onClickFun } = prop;
  return (
    <button
      onClick={onClickFun}
      className={`w-[149px] h-[50px] text[13px] rounded-[20px] bg-[${pillColor}] text-[${txtColor}]`}
    >
      
      {label}
    </button>
  );
};

export default CustomButton;
