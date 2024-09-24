import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import closeIcon from "../../assets/Icons/close.svg";
import { avatar, sideBarOptions } from "../../assets/constants";
import { Link } from "react-router-dom";

const Sidebar = ({ handleCloseClick = () => {} }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <nav className="px-2 md:px-6">
      <div className="py-6 flex items-center justify-between border-b-2">
        <h1 className="bg-red-600 text-white text-2xl sm:text-4xl m-2 px-4 py-2 rounded">
          Streamify
        </h1>
        <div
          className="float-right block h-10 w-10 md:hidden"
          onClick={handleCloseClick}
        >
          <ImageContainer icon={closeIcon} size={30} />
        </div>
      </div>
      <div className="px-2 py-5 flex flex-col">
        {sideBarOptions.map((item) => (
          <Link
            to={item.path}
            key={item.value}
            className={`cursor-pointer border-b-2 p-4 text-left text-md ${
              activeTab === item.value ? "bg-black text-white rounded-lg" : ""
            }`}
            onClick={() => setActiveTab(item.value)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="fixed bottom-4 left-4 flex items-center gap-4">
        <img
          src={avatar}
          alt="avatar"
          className="w-9 h-9 rounded-full border-2 border-gray-400"
        />
        <div className="flex flex-col items-start">
          <p className="font-medium">Chris Hood</p>
          <p className="text-sm text-gray-500">hello@example.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
