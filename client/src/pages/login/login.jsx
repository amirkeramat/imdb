import React from "react";

export default function login() {
  return (
    <div className="flex w-full justify-center">
      <form
        action=""
        className="flex flex-col justify-evenly h-[400px] bg-gray-900 bg-opacity-50 p-4 w-full sm:w-[400px] items-center rounded-2xl"
      >
        <label className="w-full " htmlFor="">
          <h6>Username:</h6>
          <input
            className="bg-primary placeholder:text-gray-900 text-gray-900 p-2 w-full border-0 outline-none rounded"
            placeholder="Username"
            type="text"
          />
        </label>
        <label className="w-full" htmlFor="">
          <h6>Password:</h6>
          <input
            className="bg-primary text-gray-950 p-2 w-full border-0 outline-none rounded placeholder:text-gray-950"
            placeholder="password"
            type="password"
          />
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
