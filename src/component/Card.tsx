import { dataContext } from "@/context/dataController";
import Image from "next/image";
import React, { useContext } from "react";

const Card = (prop:any) => {
  const {label,desc,imgUrl,index,folderBox,folderId}=prop

  const {data,setData,setFolder,folder}=useContext<any>(dataContext)

  const handleDeleteItem=()=>{

    folderBox ?setFolder((prev:any)=>prev.map((x:any,i:number)=>{
      if(i===folderId){
       x.item.splice(index,1)
       console.log('{x}',x)
       return x
      }
      return x

   })   )
    : setData((prev:any)=>{return prev.splice(index,1)})

    // setFolder((prev:any)=>{
    //  return prev[folderId].item.splice(index,1)

    // })

    console.log({folderId});
    console.log({index});
    console.log(folder);
    
    
    
    


 
     
  }


  return (
    <div
      style={{ backgroundImage: `url('${imgUrl}')` }}
      className="w-[324px] h-[300px]  bg-cover border-[#852E2C] border-[2px] mb-4 rounded-md"
    >
      <div
        className="w-[322px] h-[297px] flex items-end mx-auto"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(133,46,44,0.4),rgb(133,46,44))",
          // backdropFilter: "blur(8px) brightness(80%)",
        }}
      >
        <div className="w-full">
          <div className="flex flex-col mx-2">
            <div className="flex justify-between ">
              <span className="w-[65px] h-[21px] bg-[#FFCD00] text-[#852E2C] rounded-[10px] text-[10px] py-1 px-2">
                10 ITEMS
              </span>
              <div className="flex w-[104px] justify-around">
                <Image
                  src={"/assets/setting.png"}
                  width={28}
                  height={28}
                  alt=""
                />
                <Image src={"/assets/edit.png"} width={28} height={28} alt="" />
                <Image
                  src={"/assets/delete.png"}
                  width={28}
                  height={28}
                  alt=""
                  onClick={handleDeleteItem}  
                />
              </div>
            </div>
            <span className="text-[20px] text-[#FFFFFF] font-500">
              {label}
            </span>
            <span className="text-[10px] text-[#FFFFFF] font-400">
              {desc.length>30 ? `${desc.slice(0,30)}...`   :desc}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
