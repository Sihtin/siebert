import React from "react";
import { Button } from "@mui/material";

const ButtonWithIcon = ({ onClick, children, type, disabled, sx, startIcon, endIcon }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      sx={sx}
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};
export default ButtonWithIcon;
