import React, { useEffect } from "react";
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/RegisterSchema";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
export default function Register() {
  useEffect(() => {
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  });
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={handleSubmit(formSubmit)}
        action=""
        className="flex flex-col justify-evenly h-[600px] bg-gray-900 bg-opacity-50 p-4 w-full sm:w-[400px] items-center rounded-2xl"
      >
        <label className="w-full relative" htmlFor="">
          <h6>Email:</h6>
          <input
            className="bg-gray-100 placeholder:text-gray-900 text-gray-900 p-2 w-full border-0 outline-none rounded placeholder:opacity-50"
            placeholder="Your Email"
            type="text"
            {...register("email")}
          />
       
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </label>
        <label className="w-full relative " htmlFor="">
          <h6>Username:</h6>
          <input
            className={`bg-gray-100 placeholder:text-gray-900 text-gray-900 p-2 w-full  outline-none rounded placeholder:opacity-50`}
            placeholder="Your Username"
            type="text"
            {...register("username")}
          />
      
          {errors.username?.message && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </label>
        <label className="w-full relative" htmlFor="">
          <h6>Password:</h6>
          <input
            className="bg-gray-100 text-gray-950 p-2 w-full border-0 outline-none rounded placeholder:text-gray-950 placeholder:opacity-50"
            placeholder="Your password"
            type="password"
            {...register("password")}
          />
        
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </label>
        <label className="w-full relative" htmlFor="">
          <h6>Confirm Password:</h6>
          <input
            className="bg-gray-100 text-gray-950 p-2 w-full border-0 outline-none rounded placeholder:text-gray-950 placeholder:opacity-50"
            placeholder="Please Confirm password"
            type="password"
            {...register("confirmPassword")}
          />
        
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </label>
        <input
          className="py-2 bg-gray-950 w-full bg-opacity-100 text-primary rounded cursor-pointer duration-500 hover:bg-opacity-50 "
          type="submit"
          value={"login"}
        />
      </form>
    </div>
  );
}
