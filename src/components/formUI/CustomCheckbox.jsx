import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

const CustomCheckbox = ({ checked, onChange, sx, disabled, dataTestId }) => {
  const defaultCheckBox = {
    "& .MuiSvgIcon-root": {
      border: checked ? "2px solid #007CBA" : "2px solid #30261DB2",
      borderRadius: "3px",
    },
  };
  return (
    <Checkbox
      data-testid={dataTestId}
      icon={<CheckIcon style={{ color: "transparent", fontSize: "14px" }} />}
      checkedIcon={<CheckIcon style={{ color: "white", fontSize: "14px", backgroundColor: "green" }} />}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      sx={sx ? sx : defaultCheckBox}
    />
  );
};

export default CustomCheckbox;
