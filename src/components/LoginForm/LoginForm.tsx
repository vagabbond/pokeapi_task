import React, { FC } from "react";
import { useForm } from "react-hook-form";
interface ILoginFormProps {
 onSubmit: (data: any) => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ onSubmit }) => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const submitHandler = (data: any) => onSubmit(data);
 return (
  <div className=" flex justify-center items-center h-custom">
   <form
    onSubmit={handleSubmit(submitHandler)}
    className="flex flex-col w-input gap-3"
   >
    <div className="flex flex-col gap-2 w-full justify-start">
     <label
      htmlFor="firstName"
      className=" text-sm font-medium text-gray-900 dark:text-white"
     >
      First name
     </label>
     <input
      type="text"
      id="firstName"
      className={`w-full h-input  border text-gray-900 border-gray-300  text-sm rounded-lg py-3 px-4 ${
       errors.firstName && "border-red-500  "
      }
     hover:border-blue-500 focus:border-blue-500 hover:border-2 focus:border-2 focus:outline-none`}
      placeholder="John"
      {...register("firstName", { required: true })}
     />

     {errors.firstName && (
      <span className="text-red-500 text-sm">This field is required</span>
     )}
    </div>
    <div className="flex flex-col gap-2 w-full justify-start">
     <label
      htmlFor="lastName"
      className=" text-sm font-medium text-gray-900 dark:text-white"
     >
      Last name
     </label>
     <input
      type="text"
      id="lastName"
      className={`w-full h-input  border text-gray-900 border-gray-300  text-sm rounded-lg py-3 px-4 ${
       errors.firstName && "border-red-500  "
      }
     hover:border-blue-500 focus:border-blue-500 hover:border-2 focus:border-2 focus:outline-none`}
      placeholder="Wick"
      {...register("lastName", { required: true })}
     />
     {errors.firstName && (
      <span className="text-red-500 text-sm">This field is required</span>
     )}
    </div>
    <button
     type="submit"
     className="w-1/3 h-base bg-blue-600 rounded-lg text-sm px-4 text-white font-medium hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
     disabled={Object.keys(errors).length > 0}
    >
     Submit
    </button>
   </form>
  </div>
 );
};
