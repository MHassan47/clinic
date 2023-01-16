import React from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PatientsData() {
  let patients = 104;
  return (
    <div className="flex h-full gap-6">
      <div className="bg-white w-2/5 shadow-2xl dark:bg-zinc-800 rounded-3xl p-6 transition duration-500 ease-in-out transform">
        <CircularProgressbarWithChildren
          value={60}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
            // Colors
            pathColor: `#547b41`,
            textColor: "white",
            trailColor: "#8ac185",
            backgroundColor: "#3e98c7",
          })}
        >
          <div className=" font-bold text-2xl dark:text-white">104</div>
          <div className="font-semibold text-md text-gray-500 dark:text-gray-300">
            Patients
          </div>
        </CircularProgressbarWithChildren>
        <div className="flex flex-col mx-2 my-6 gap-4 dark:text-white ">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-4 h-4 rounded-3xl bg-gr" />
            <h1 className="flex">Male </h1>
            <h1 className="font-semibold"> 40%</h1>
          </div>
          <div className="flex flex-row gap-4 items-center dark:text-white">
            <div className="w-4 h-4 rounded-3xl bg-darkgr" />
            <h1 className="flex">Female</h1>
            <h1 className="font-semibold">60%</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-2/5 dark:text-white">
        <div className="flex flex-col h-1/2 bg-white shadow-2xl dark:bg-zinc-800 rounded-3xl p-6 transition duration-500 ease-in-out transform">
          <h1 className="text-xl font-semibold mb-2">New Patients</h1>
          <div className="flex flex-row items-center justify-around">
            <h1 className="font-semibold text-5xl">51</h1>
            <div className="flex items-center text-center bg-lightgr text-darkgr font-bold rounded-3xl w-1/3">
              <RiArrowDropUpLine />
              52%
            </div>
          </div>
        </div>

        <div className="flex flex-col h-1/2 shadow-2xl bg-white dark:bg-zinc-800 rounded-3xl p-6 transition duration-500 ease-in-out transform">
          <h1 className="text-xl font-semibold mb-2">Old Patients</h1>
          <div className="flex flex-row items-center justify-around">
            <h1 className="font-semibold text-5xl ">32</h1>
            <div className="flex items-center text-center bg-red-300 text-red-500 font-bold rounded-3xl w-1/3 h-2/3">
              <RiArrowDropDownLine /> 14%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsData;
