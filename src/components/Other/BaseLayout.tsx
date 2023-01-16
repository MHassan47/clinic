import React, { FC } from "react";
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
      <div className="flex w-2/3">{props.children}</div>
      <div className="flex w-1/3 bg-gray-300"></div>
    </div>
  );
};

export default BaseLayout;
