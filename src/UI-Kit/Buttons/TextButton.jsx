import React from "react";

const TextButton = (props) => {
  return (
    <div className="text-btn" {...props}>
      {props.children}
    </div>
  );
};

export default TextButton;
