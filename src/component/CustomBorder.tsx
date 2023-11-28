import { dataContext } from "@/context/dataController";
import Image from "next/image";
import React from "react";
import { useRef, useState,useContext } from "react";

interface CustomBorderProps {
  text: string;
  imgUrlLocal: string;
}

const CustomBorder = (props: CustomBorderProps) => {
  const { text, imgUrlLocal } = props;
  const inputRef = useRef<any>(null);
  // const [file, setFile] = useState<File | null>(null);
  const {file,setFile}=useContext<any>(dataContext)
  // console.log({file})

  return (
    <div
      className="border w-[334px] h-[280px] flex justify-center border-[#852E2C]"
      style={{ borderRadius: "11% 25% 16% 19% / 51% 49% 37% 87% " }}
    >
      <div className="flex flex-col justify-around">
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={(e) => setFile(e.target.files ? URL.createObjectURL(e.target.files[0]) : null)}
        />
        <div className="mx-auto">
          <Image
            src={imgUrlLocal}
            alt=""
            width={80}
            height={80}
            onClick={() => inputRef.current.click()}
          />{" "}
        </div>
        <div className="w-[192px] text-center  font-medium text-[17px] text-[#852E2C]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CustomBorder;
