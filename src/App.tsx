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

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 dark:bg-neutral-900 transition duration-500 ease-in-out transform">
      <Dashboard setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
