import React, { FC } from "react";
import Chat from "../Right/Chat";
import Sidebar from "../Sidebar/Sidebar";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex w-2/3 h-full">{props.children}</div>
      <div className="flex justify-center shadow-xl items-end w-1/3 bg-white dark:bg-zinc-800 transition duration-500 ease-in-out transform">
        <Chat />
      </div>
    </div>
  );
};

export default BaseLayout;
