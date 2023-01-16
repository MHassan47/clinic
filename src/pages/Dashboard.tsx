import React from "react";
import DashboardContent from "../components/Dashboard/DashboardContent";
import BaseLayout from "../components/Other/BaseLayout";

function Dashboard() {
  return (
    <div className="flex w-full">
      <BaseLayout>
        <DashboardContent />
      </BaseLayout>
    </div>
  );
}

export default Dashboard;
