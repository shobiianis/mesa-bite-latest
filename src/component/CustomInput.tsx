import { dataContext } from "@/context/dataController";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";

const nameSchema = Yup.object({
  name: Yup.string().min(2).max(50).required("required"),
});

const CustomInput = () => {
  
  const {text,setText}=useContext<any>(dataContext)


  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       name: "",
  //     },
  //     validationSchema: nameSchema,
  //     onSubmit: (values, action) => {
  //       console.log(values);
  //       action.resetForm();
  //     },
  //   });
  // console.log(errors);

  return (
    <div className="flex flex-col">
      <span className="text-[#852E2C] text-[15px] font-[600]">Name </span>
      <input
        className="border border-red-600 pl-3"
        style={{backgroundColor:"transparent"}}
        type="text"
        name="name"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        // onBlur={handleBlur}
      />
      <div className={`flex justify-between text-[#BF5627] text-[10px]`}>
        <span className="text-end">{text.length}/50</span>
        {/* {errors.name && touched.name ? (
          <p className="form-error">{errors.name}</p>
        ) : null} */}
      </div>
    </div>
  );
};

export default CustomInput;
