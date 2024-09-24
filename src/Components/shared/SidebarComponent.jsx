import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ImageContainer from "./ImageContainer";
import menuIcon from "../../assets/Icons/menu.svg";

const SidebarComponent = ({ width }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="top-0 left-0 h-screen bg-gray-50 z-10 fixed hidden md:block md:w-72 border-r rounded-r-lg shadow ">
        <Sidebar />
      </div>
      {/* Mobile sidebar */}
      {!showSidebar && (
        <div
          className="mt-7 fixed ml-4 md:ml-0 z-20 h-10 w-10 md:hidden"
          onClick={handleShowSidebar}
        >
          <ImageContainer icon={menuIcon} size={30} />
        </div>
      )}
      {showSidebar ? (
        <div className="left-10 top-10 md:hidden bg-gray-50 border-r w-screen h-full z-20 transition-transform duration-300 ease-in-out transform origin-top scale-95">
          <Sidebar handleCloseClick={handleShowSidebar} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SidebarComponent;
