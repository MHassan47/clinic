import React from "react";
import { FaUserMd } from "react-icons/fa";
function Profile() {
  return (
    <div>
      <div className="flex">
        <div className="flex items-center flex-col gap-2">
          <img
            className="flex justify-center items-center w-32 h-32 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="pfp"
          />
          <h1 className="text-xl dark:text-white text-slate-700 font-medium mt-2">
            Dr. Kamal
          </h1>
          <h1 className="text-xl dark:text-white text-slate-700 mt-4">
            Your activity today{" "}
          </h1>
          <h1 className="text-4xl font-medium dark:text-white text-slate-700">
            86%
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
