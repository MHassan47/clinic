import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

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
    <div className="flex h-screen w-screen dark:bg-black">
      <Sidebar />
    </div>
  );
}

export default App;
