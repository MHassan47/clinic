import React, { FC } from "react";
import Chat from "../Right/Chat";
import Profile from "../Right/Profile";
import Sidebar from "../Sidebar/Sidebar";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <div className="flex w-full h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex w-3/4 h-full">{props.children}</div>
      <div className="flex flex-col justify-around shadow-xl items-center w-1/4 bg-white dark:bg-zinc-800 transition duration-500 ease-in-out transform">
        <div className="text-right">
          <FaBell className="text-3xl text-slate-700 dark:text-white cursor-pointer" />
        </div>
        <Profile />
        <div className="flex justify-around items-center border-2 rounded-2xl border-gray-400 w-2/5 h-16 ">
          <h1 className="flex items-center dark:text-white font-medium text-slate-700 transition duration-300 ease-in-out transform hover:translate-x-2">
            All Activity
            <RiArrowRightSLine className="text-3xl text-gr" />
          </h1>{" "}
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default BaseLayout;
