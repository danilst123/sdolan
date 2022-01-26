import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = (props) => {
  return (
    <MuiButton
      className="button"
      variant="contained"
      disableElevation
      {...props}
    />
  );
};

export default Button;
