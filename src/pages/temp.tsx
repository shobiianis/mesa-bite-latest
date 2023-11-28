import Card from '@/component/Card'
import Cart from '@/component/Card'
import CustomButton from '@/component/CustomButton'
import { dataContext } from '@/context/dataController'
import AddNewCategory from '@/screens/AddNewCategory'
import CategoryFolder from '@/screens/CategoryFolder'
import React from 'react'
import { useContext } from "react"
const temp = () => {  
  const data=useContext(dataContext)
  return (
    <div>
        {/* <CategoryFolder/> */}
         {/* <AddNewCategory/> */}
            
            <Card/>

     

    </div>
  )
}

export default temp