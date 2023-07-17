import React from "react";

const IconRenderer = ({ list, icon }) => {
  let Icon = list[icon].val;

  return (
    <>
      <Icon />
    </>
  );
};

export default IconRenderer;
