import CustomBorder from "@/component/CustomBorder";
import CustomButton from "@/component/CustomButton";
import CustomInput from "@/component/CustomInput";
import { dataContext } from "@/context/dataController";
import Image from "next/image";
import React, { useState,useContext } from "react";

const AddNewCategory = (prop: any) => {
  const { onClose,folderState ,folderId} = prop;

  const [desc,setDesc]=useState('')

  const {file,text,data,setData,setFolder,folder}=useContext<any>(dataContext)


  console.log({folderId})

  const handleSubmit=()=>{
    // console.log(file,text,desc)
    // data.push({
    //   name:text,
    //   desc,
    //   imgUrl:file
    // })
    // [...prev,prev[flolderId]?.items?.push({itemName:text,desc,imgUrl:file})]
    !folderState ? setData((prev:any)=>[...prev,{itemName:text,desc,imgUrl:file}]) : setFolder((prev:any)=>prev.map((x:any,i:number)=>{
       if(i===folderId){
        x.item = [...x.item, {itemName:text,desc,imgUrl:file}]
        console.log('{x}',x)
        return x
       }
       return x

    })   )
     
    onClose()
  }

  
  // console.log({data})
  
  return (
    <div className="bg-[#FFF6DF] inset-0 w-[full] h-full mx-auto  fixed flex items-center">
      <div className="max-w-[390px] mx-auto">
        {/* here the content will  be in this div */}
        <div className="flex justify-between  mt-10 ">
          <span className="text-[20px] text-[#852E2C] font-[700] font-serif ">
            Add New Category
          </span>
          <span className="pt-2">
            <Image
              src="/assets/cross.png"
              alt="dasdas"
              width={15}
              height={15}
              onClick={onClose}
            />{" "}
          </span>
        </div>

        <div className="flex flex-col space-y-4 mt-6">
          <span className="text-[#852E2C] text-[15px] leading-[21px] font-[600] ">
            Image (Optional)
          </span>

          <CustomBorder
            text="Click here to upload an image"
            imgUrlLocal="/assets/upload.png"
          />
          
        </div>

        <div className="mt-8">
          <CustomInput />
        </div>

        <div>
          <span className="text-[#852E2C] text-[15px] font-[600] leading-[21px]">
            Description (optional)
          </span>
          <br />
          <textarea
            className="border border-red-900 mt-2 resize-none pl-10 pt-2"
            style={{
              borderRadius: "11% 25% 16% 19% / 51% 49% 37% 87% ",
              backgroundColor: "transparent",
            }}
            rows={9}
            cols={40}
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <div className="mt-16">
          <div className="max-w-[318px] flex justify-between   mx-auto">
            <CustomButton
              txtColor="#FFF6DF"
              pillColor="#852E2C"
              label="Cancel"
              onClickFun={onClose}
            />
            <CustomButton txtColor="#852E2C" pillColor="#FFCD00" label="Save" onClickFun={handleSubmit}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
