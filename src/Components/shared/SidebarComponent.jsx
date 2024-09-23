import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ImageContainer from "./ImageContainer";
import menuIcon from "../../assets/Icons/menu.svg";

const SidebarComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex h-screen">
      <div className="hidden sm:block w-64 md:w-80 bg-gray-50 border-r rounded-r-lg shadow ">
        <Sidebar />
      </div>
      {/* Mobile sidebar */}
      {showSidebar ? (
        <div className="fixed sm:hidden right-0 bg-white w-full h-full z-10 transition-transform duration-300 ease-in-out transform origin-top scale-95">
          <Sidebar handleCloseClick={handleShowSidebar} />
        </div>
      ) : (
        <></>
      )}
      <div className="sm:hidden float-left" onClick={handleShowSidebar}>
        <ImageContainer icon={menuIcon} size={30} />
      </div>
    </div>
  );
};

export default SidebarComponent;
