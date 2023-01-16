import React, { FC, useState } from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className=" w-3/5 h-max mb-6 bg-gray-200 dark:bg-gray-500 rounded-2xl">
      <div className="flex justify-around w-full flex-row border-2l m-4 rounded-xl focus:bg-blue-400 ">
        <form onSubmit={() => console.log()} className="w-5/6">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none bg-inherit text-xl w-full"
          />
        </form>
        <button type="submit">
          <IoSearch className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
