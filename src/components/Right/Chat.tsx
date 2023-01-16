import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
function Chat() {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col justify-around w-4/5 h-2/5 shadow-2xl bg-gray-100 dark:bg-neutral-900 rounded-2xl text-slate-700 transition duration-500 ease-in-out transform">
      <div className="flex justify-between items-center border-b-2 border-gray-400 dark:border-gray-500">
        <h1 className="text-2xl font-bold dark:text-white mx-6 mb-4">
          Messages
        </h1>
        <div className="flex items-center mb-4">
          <h1 className="font-medium text-slate-700 dark:text-white">
            Mohamed Hassan
          </h1>
          <img
            src="https://avatars.githubusercontent.com/u/98605431?v=4"
            className="w-8s h-8 bg-black rounded-3xl  mx-6  object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 mt-6 mx-6">
        <div className="flex items-center ">
          <div className="flex w-5/6 items-end gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/98605431?v=4"
              className="w-8 h-8 bg-black rounded-3xl object-cover"
            />
            <div className="flex h-max w-4/5 rounded-xl bg-darkgr p-4 font-medium text-white">
              {" "}
              Hey, Dr. Kamal! How can I help you?
            </div>
          </div>
          <h1 className="font-light dark:text-white">6:02 pm</h1>
        </div>

        <div className="flex items-center ">
          <h1 className="font-light dark:text-white">6:02 pm</h1>
          <div className="flex justify-end items-end w-5/6 gap-4">
            <div className="flex h-max w-4/5 rounded-xl bg-gr p-4 font-medium text-white">
              {" "}
              Hey Mohamed, How do I add a new patient?{" "}
            </div>
            <img
              className="w-8 h-8 bg-black rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="pfp"
            />
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
