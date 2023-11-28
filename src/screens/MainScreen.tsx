import Image from "next/image";
// import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
// import CustomBorder from "../component/CustomBorder";
import { useContext, useState } from "react";
import { dataContext } from "@/context/dataController";
import AddNewCategory from "./AddNewCategory";
import Card from "@/component/Card";
import CategoryFolder from "./CategoryFolder";

const MainScreen = () => {
  const [addNewCategoryModalOpen, setAddNewCategoryModalOpen] =
    useState<boolean>(false);

  const [FolderModalOpen, setFolderModalOpen] = useState(false);
  const[addToFolder,setAddToFolder]=useState(false)
  const [folderId,setFolderId]=useState<number>()

  const data = useContext(dataContext);
  const { folder,setFolder } = useContext<any>(dataContext);

  const handleFolderDelete=(i:number)=>{
   
    setFolder((prev:any)=>
    {return prev.splice(i,1)}
    )
    
  }
  
  return (
    <div className="bg-[#FFF6DF]">
      {addNewCategoryModalOpen && (
        <AddNewCategory onClose={() => setAddNewCategoryModalOpen(false)}  folderState={addToFolder} folderId={folderId} />
      )}
      {FolderModalOpen && (
        <CategoryFolder onClose={() => setFolderModalOpen(false)}  />
      )}
      <div className="w-96 mx-auto mt-4">
        <span className="text-[#852E2C] text-[28px] font-[700] font-serif block">
          YOUR MENU
        </span>
        <br />
        <SearchBar />
        <br />

        <div className="w-[193px] h-[18px] flex justify-between mt-7 mb-10">
          <Image
            src="/assets/plus.png"
            alt=""
            width={16}
            height={16}
            onClick={() => setFolderModalOpen(true)}
          />
          <span className="text-[#852E2C] text-[15px] font-[700]  ">
            Create Category Folder
          </span>
        </div>

        {/* ------------------------------------------folder working starts--------------------------------------- */}
        {folder.length > 0 &&
          folder.map((x: any, folderIndex: number) => (
              
            <div className="border-[#852E2C] border-[3px] rounded-lg max-w-[350px] mb-3 ">
              <div className="flex justify-between px-2 py-2">
                {" "}
                {/* header  */}
                <div className="flex items-center space-x-1">
                  <span>
                    <Image
                      src={"/assets/threelines.png"}
                      width={19}
                      height={10}
                      alt=""
                    />
                  </span>
                  <span className="text-[20px] text-[#852E2C] font-[700] ">
                    {x.title}
                  </span>
                </div>
                <div className="flex justify-around w-[104px] h-[28px] ">
                  <Image
                    src={"/assets/settingRed.png"}
                    width={28}
                    height={28}
                    alt=""
                    />

                  <Image
                    src={"/assets/editRed.png"}
                    width={28}
                    height={28}
                    alt=""
                    />
                  <Image
                    src={"/assets/deleteRed.png"}
                    width={28}
                    height={28}
                    alt=""
                    onClick={()=>handleFolderDelete(folderIndex)}
                    />
                </div>
              </div>
              
              <div className="pl-[10px] hover:cursor-pointer border mx-3 my-2 rounded-md border-[#852E2C] bg-[#852E2C] text-[#FFCD00] "
                    onClick={() => {
                      setAddNewCategoryModalOpen(true)
                      setAddToFolder(true)
                      setFolderId(folderIndex)
                    }}
               > 
                + ADD MORE ITEMS
              </div>
              <div className="pl-[10px]">
                {x.item.map((x: any, i: number) => {
                  return (
                    <Card label={x.itemName} desc={x.desc} imgUrl={x.imgUrl} index={i} folderBox={true} folderId={folderIndex}/>

                  );
                })}
              </div>
             
            </div>
          ))}

        {/* ------------------------------------------folder working ends--------------------------------------- */}

        <div className=" pl-3">
          {data?.data.map((item) => {
            return (
              <Card
                label={item.itemName}
                desc={item.desc}
                imgUrl={item.imgUrl}
                folderBox={false}
              />
            );
          })}
        </div>

        <div
          className="border w-[334px] h-[280px] flex justify-center border-[#852E2C] mt-2"
          style={{ borderRadius: "11% 25% 16% 19% / 51% 49% 37% 87% " }}
        >
          <div className="flex flex-col justify-around">
            <div className="mx-auto">
              <Image
                src="/assets/bigPlus.png"
                alt=""
                width={80}
                height={80}
                onClick={() => {
                  setAddNewCategoryModalOpen(true)
                  setAddToFolder(false)
                }}
              />{" "}
            </div>
            <div className="w-[192px] text-center  font-medium text-[17px] text-[#852E2C]">
              Add New Category to your menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
