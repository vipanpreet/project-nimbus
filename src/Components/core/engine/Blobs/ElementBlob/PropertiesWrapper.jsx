import React from "react";

const PropertiesWrapper = ({ type, children }) => {
  return (
    <div
      className={`p-3 my-5 rounded relative border border-solid ${
        type === "transitions"
          ? "border-teal-500"
          : type === "dimensions"
          ? "border-primaryLight"
          : "border-teal-500"
      }`}
    >
      <div
        className={`absolute ${
          type === "transitions"
            ? "bg-teal-600"
            : type === "dimensions"
            ? "bg-primary"
            : "bg-teal-600"
        }  text-white text-xs -top-2 rounded left-4 px-4 capitalize`}
      >
        {type}
      </div>
      {children}
    </div>
  );
};

export default PropertiesWrapper;
