import React, { FC } from "react";
import Chart from "./Chart";
import PatientsData from "./PatientsData";
import SearchBar from "./SearchBar";
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

interface props {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

const DashboardContent: FC<props> = ({ setTheme, theme }) => {
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex w-full px-10 flex-col">
      <div className="flex items-center my-6 gap-6">
        <SearchBar />
        <div
          className=" transition duration-500 ease-in-out transform flex justify-center items-center 
          bg-white dark:bg-gray-700 h-full w-16 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500"
          onClick={handleThemeChange}
        >
          {theme === "dark" ? (
            <BsFillMoonFill className=" text-2xl text-slate-700 dark:text-white" />
          ) : (
            <RiSunFill className=" text-3xl text-slate-700 dark:text-white" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mx-4 text-slate-700 dark:text-white mb-10">
        <h1 className="text-5xl font-bold ">Dashboard</h1>
        <h1 className="text-lg font-semibold">{formattedDate}</h1>
      </div>
      <div className="flex flex-row ">
        <div className="w-1/2 h-full">
          <PatientsData />
        </div>
        <div className="w-1/2">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
