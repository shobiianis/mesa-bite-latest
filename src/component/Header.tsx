import Image from "next/image";
import React from "react";
import DropDown from "./dropDown";
const Header = () => {
  return (
    <div className="bg-[#FFCD00] h-[63.2px] ">
      <div className="mx-10 flex justify-between pt-[26px]">
        <div>
          {" "}
          <Image src="/assets/lines.png" alt="" width={19} height={12} />{" "}
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
