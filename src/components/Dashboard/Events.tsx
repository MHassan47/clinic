import React from "react";
import { MdEdit } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
function Events() {
  return (
    <div className="flex flex-col w-5/6 h-full">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-semibold dark:text-white mb-4">Events</h1>
        <h2 className="flex items-center text-gr cursor-pointer transition duration-300 ease-in-out transform hover:translate-x-2">
          All Events <RiArrowRightSLine className="" />
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex h-full justify-between p-4 shadow-2xl bg-white dark:bg-zinc-800 dark:text-white font-medium rounded-2xl transition duration-500 ease-in-out transform">
          <div className="flex flex-col">
            <h1>Team meeting</h1>
            <h2>11:30 - 12:30</h2>
            <div className="flex mt-2">
              <div className="flex w-6 h-6 bg-lightgr rounded-3xl" />
              <div className="flex w-6 h-6 bg-gr rounded-3xl -ml-2" />
              <div className="flex w-6 h-6 bg-darkgr rounded-3xl -ml-2" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center text-2xl text-white w-8 h-8 bg-gray-700 rounded-3xl">
              <MdEdit />
            </div>
            <div className="flex justify-center items-center text-2xl text-white w-8 h-8 bg-gr rounded-3xl">
              <RiArrowRightSLine />
            </div>
          </div>
        </div>

        <div className="flex h-full justify-between p-4 bg-white shadow-2xl dark:bg-zinc-800 dark:text-white font-medium rounded-2xl transition duration-500 ease-in-out transform">
          <div className="flex flex-col">
            <h1>Conference</h1>
            <h2>9:30 - 12:30</h2>
            <div className="flex mt-2">
              <div className="flex w-6 h-6 bg-lightgr rounded-3xl" />
              <div className="flex w-6 h-6 bg-gr rounded-3xl -ml-2" />
              <div className="flex w-6 h-6 bg-darkgr rounded-3xl -ml-2" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center text-2xl text-white w-8 h-8 bg-gray-700 rounded-3xl">
              <MdEdit />
            </div>
            <div className="flex justify-center items-center text-2xl text-white w-8 h-8 bg-gr rounded-3xl">
              <RiArrowRightSLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
