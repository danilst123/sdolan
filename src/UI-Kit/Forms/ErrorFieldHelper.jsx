import React from "react";

const ErrorFieldHelper = ({ children, ...rest }) => {
  return (
    <p className="field-helper" {...rest}>
      {children}
    </p>
  );
};

export default ErrorFieldHelper;
