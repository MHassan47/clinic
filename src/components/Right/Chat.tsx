import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
function Chat() {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col justify-around w-2/3 h-2/5 shadow-2xl bg-gray-100 dark:bg-gray-800 rounded-2xl dark:text-white transition duration-500 ease-in-out transform">
      <div className="flex justify-between items-center border-b-2 border-gray-400 dark:border-gray-500">
        <h1 className="text-2xl font-bold  mx-6 mb-4"> Chat</h1>
        <div className="w-6 h-6 bg-black rounded-3xl  mx-6 mb-4" />
      </div>
      <div className="flex flex-col items-center gap-10 mt-6 mx-6">
        <div className="flex items-center ">
          <div className="flex w-5/6 items-end gap-4">
            <div className="w-6 h-6 bg-black rounded-3xl" />
            <div className="flex h-max w-4/5 rounded-xl bg-darkgr p-4 font-medium">
              {" "}
              Hey, Sarah! How can I help you?{" "}
            </div>
          </div>
          <h1 className="font-light ">6:02 pm</h1>
        </div>

        <div className="flex items-center ">
          <h1 className="font-light">6:02 pm</h1>
          <div className="flex justify-end items-end w-5/6 gap-4">
            <div className="flex h-max w-4/5 rounded-xl bg-gr p-4 font-medium">
              {" "}
              Hey, How do I add a new patient?{" "}
            </div>
            <div className="w-6 h-6 bg-black rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-end border-t-2 border-gray-400 dark:border-gray-500">
        <input
          type="text"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="outline-none bg-inherit text-lg ml-4 mt-2 w-5/6  "
        />
        <IoIosSend className="text-3xl text-darkgr hover:text-gr dark:text-gr dark:hover:text-darkgr cursor-pointer" />
      </div>
    </div>
  );
}

export default Chat;
