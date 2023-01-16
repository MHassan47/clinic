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
      <div className="flex w-full">{props.children}</div>
      <div className="flex w-full"></div>
    </div>
  );
};

export default BaseLayout;
