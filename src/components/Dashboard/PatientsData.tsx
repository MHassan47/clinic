import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PatientsData() {
  let patients = 104;
  return (
    <div className="flex border-2 justify-center gap-10">
      <div className="flex bg-white dark:bg-gray-700 rounded-3xl p-6">
        <CircularProgressbarWithChildren
          value={75}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

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
            trailColor: "rgba(0,0,0,0.1)",
            backgroundColor: "#3e98c7",
          })}
        >
          <div className="font-bold text-2xl dark:text-white">104</div>
          <div className="font-semibold text-md text-gray-500 dark:text-gray-300">
            Patients
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="flex flex-col bg-white dark:bg-gray-700 rounded-3xl p-6 ">
        <h1 className="text-lg font-semibold">New Patients</h1>
        <h1 className="font-bold">51</h1>
        <div className="text-center bg-lightgr text-darkgr font-bold rounded-3xl">
          52%
        </div>
      </div>
    </div>
  );
}

export default PatientsData;
