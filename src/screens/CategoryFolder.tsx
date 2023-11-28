import CustomBorder from "@/component/CustomBorder";
import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { dataContext } from "@/context/dataController";
import Image from "next/image";
import React,{useContext, useState} from "react";

const CategoryFolder = (prop:any) => {
  const {onClose}=prop
  const {file,text,folder,setFolder}=useContext<any>(dataContext)

  const [id,setId]=useState<number>(0)

  const handleSubmit=()=>{
    
    setFolder((prev:any)=>[...prev,{id, title:text,folderImgUrl:file,item:[]}])
    setId((prev:number)=>prev++)
    onClose()

    
  }

  return (
    <div className="bg-[#FFF6DF] inset-0 w-[full] h-full mx-auto  fixed flex">
      <div className="max-w-[390px] mx-auto">
        {/* here the content will  be in this div */}
        <div className="flex justify-between  mt-10 ">
          <span className="text-[20px] text-[#852E2C] font-[700] font-serif ">
            Create New Category Folder
          </span>
          <span className="pt-2">
            <Image
              src="/assets/cross.png"
              alt="dasdas"
              width={15}
              height={15}
              onClick={()=>onClose()}
            />{" "}
          </span>
        </div>

        <div className="text-[12px] text-[#BF5627] leading-[14.63px] text-center mt-6">
          <span>Here you can create Category Folder that</span>
          <br />
          <span className="font-[600]">
            includes other categories under it.
          </span>
        </div>

        <div className="mt-4">
            <CustomInput />
        </div>

        <div className="flex flex-col space-y-4 mt-16">
          <span className="text-[#852E2] text-[15px] leading-[21px] font-[600] ">Image (Optional)</span>
          <CustomBorder text="Click here to Cupload an image" imgUrlLocal="/assets/upload.png" />
        </div>

        <div className="h-full pt-[300px] ">
          
          <div className="max-w-[318px] flex justify-between   mx-auto">
            <CustomButton txtColor="#FFF6DF" pillColor="#852E2C" label="Cancel" onClickFun={()=>onClose()}/>
            <CustomButton txtColor="#852E2C" pillColor="#FFCD00" label="Save" onClickFun={handleSubmit} />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default CategoryFolder;
