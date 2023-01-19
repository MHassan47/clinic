import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

function Schedule() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-semibold dark:text-white mb-4">
          Your patients today
        </h1>
        <h2 className="flex items-center text-gr cursor-pointer transition duration-300 ease-in-out transform hover:translate-x-2">
          All Patients <RiArrowRightSLine className="" />
        </h2>
      </div>
      <div className="flex h-full flex-col gap-6 bg-white dark:bg-zinc-800 shadow-2xl p-4 rounded-2xl transition duration-500 ease-in-out transform">
        <div className="flex justify-center items-center gap-2 h-full">
          <h1 className="text-lg">10:00 am</h1>
          <div className="flex w-5/6 justify-between items-center p-4 bg-gray-100 shadow-xl dark:bg-neutral-900 dark:text-white font-medium rounded-2xl transition duration-500 ease-in-out transform">
            <img
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              className="flex w-12 h-12 bg-lightgr rounded-3xl object-cover"
            />

            <div className="flex flex-col">
              <div className="flex justify-center items-center text-lg dark:text-white  ">
                Sarah Hosten
              </div>
              <div className="flex justify-center items-center text-lg text-gray-400">
                Diagnosis: Bronchitis
              </div>
            </div>
            <BsThreeDotsVertical className="text-3xl" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 h-full">
          <h1 className="text-lg">11:15 am</h1>
          <div className="flex w-5/6 justify-between items-center p-4 bg-gray-100 shadow-xl  dark:bg-neutral-900 dark:text-white font-medium rounded-2xl transition duration-500 ease-in-out transform">
            <img
              src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="flex w-12 h-12 bg-lightgr rounded-3xl object-cover"
            />

            <div className="flex flex-col">
              <div className="flex justify-center items-center text-lg dark:text-white ">
                James Lane
              </div>
              <div className="flex justify-center items-center text-lg text-gray-400">
                Diagnosis: Liver cirrhosis
              </div>
            </div>
            <BsThreeDotsVertical className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
