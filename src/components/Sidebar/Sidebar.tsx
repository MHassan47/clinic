import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaClipboardList } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BsBarChartFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
const Sidebar: FC = () => {
  //   const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gr dark:bg-darkgr py-6 transition duration-500 ease-in-out transform">
      <div className=" h-screen w-40 flex flex-col justify-between items-center">
        <div className="px-8 py-2">
          <div
            className="flex items-center cursor-pointer mb-10"
            // onClick={() => navigate("/home")}
          >
            <RxDashboard className="text-3xl mr-4 text-white dark:text-gray-400  opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
          <div className="flex items-center mt-4 hover:text-blue-600 cursor-pointer mb-10">
            <FaClipboardList className="text-3xl mr-4 text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
          <div className="flex items-center mt-4 cursor-pointer mb-10">
            <HiChatBubbleLeftRight className="text-3xl mr-4  text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110 " />
          </div>
          <div
            className="flex items-center mt-4 cursor-pointer mb-10"
            // onClick={() => navigate("/create")}
          >
            <BsBarChartFill className="text-3xl mr-4 text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
        </div>
        <div className="flex flex-col px-8 py-2">
          <div className="flex items-center mt-4 cursor-pointer mb-10">
            <HiUserAdd className="text-3xl mr-4 text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
          <div className="flex items-center mt-4 cursor-pointer mb-10">
            <MdSettings className="text-3xl mr-4 text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
          <div className="flex items-center mt-4 cursor-pointer mb-10">
            <HiLogout className="text-3xl mr-4 text-white dark:text-gray-400 opacity-60 hover:opacity-100 dark:hover:text-white hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
