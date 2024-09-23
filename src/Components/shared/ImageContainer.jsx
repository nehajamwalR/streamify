import React from "react";

const ImageContainer = ({ icon, size = 24, color = "gray-500" }) => {
  return (
    <img
      src={icon}
      alt="Image_icon"
      className={`${color}`}
      style={{ width: size, height: size }}
    />
  );
};

export default ImageContainer;
