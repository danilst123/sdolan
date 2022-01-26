import { TextField as MuiTextField } from "@mui/material";
import React, { useState } from "react";
import ErrorFieldHelper from "./ErrorFieldHelper";

const TextField = ({ className, value, helperText = null, ...rest }) => {
  const [empty, setempty] = useState(!value);
  return (
    <MuiTextField
      {...rest}
      className={`field textfield ${className}`}
      data-empty={empty}
      helperText={helperText}
      // helperText={
      //   <ErrorFieldHelper>Вы ввели неправильный код</ErrorFieldHelper>
      // }
      // error
      onInput={(event) => {
        setempty(!event.target.value);
      }}
    />
  );
};

export default TextField;
