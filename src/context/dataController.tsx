import { createContext, useState } from "react";


export const dataContext =createContext('')

const DataController=(prop:any)=>{

// const [data,setData]=useState([{
//     itemName:"sandwitches",
//     desc:"world famous",
//     // noOfItems:10,
//     imgUrl:''
// }])

const [data,setData]=useState([
    // {itemName:"fajita",desc:"delightFul", imgUrl:'/assets/bagpack.jpg'}
])
const [folder,setFolder]=useState(
    [
    // { title:'food',folderImgUrl:'',item:[{itemName:"fajita",desc:"delightFul", imgUrl:'/assets/bagpack.jpg'}]},
    // {title:'food',folderImgUrl:'',item:[{itemName:"fajita",desc:"delightFul", imgUrl:'/assets/bagpack.jpg'}]}
]
)

const [text,setText]=useState('')
const [file, setFile] = useState<File | null>(null);

return (
    <dataContext.Provider value={{data,text,setText,file,setFile,setData,folder,setFolder}} >
        {prop.children}
    </dataContext.Provider>
)

}

export default DataController