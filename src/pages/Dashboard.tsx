import React, { FC } from "react";
import DashboardContent from "../components/Dashboard/DashboardContent";
import BaseLayout from "../components/Other/BaseLayout";

interface props {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}
const Dashboard: FC<props> = ({ setTheme, theme }) => {
  return (
    <div className="flex w-full">
      <BaseLayout>
        <DashboardContent setTheme={setTheme} theme={theme} />
      </BaseLayout>
    </div>
  );
};

export default Dashboard;
