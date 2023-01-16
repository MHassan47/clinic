import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex h-screen w-screen dark:bg-gray-800">
      <Dashboard />
    </div>
  );
}

export default App;
