import React, { useState } from "react";
import { Tooltip, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { assetKeys } from "../../util/constant/AssetsConstants";

const styles = {
  inputTextField: {
    "& .MuiOutlinedInput-input": {
      fontSize: "16px",
      padding: "13px",
      fontFamily: "OpenSans",
      fontWeight: 500,
      color: "#30261DB2",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#30261D33",
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#30261D33",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#30261D33",
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "5px",
      marginRight: "0px",
    },
    "& .MuiInputAdornment-root": {
      marginLeft: "-2px",
      marginRight: "-5px",
    },
  },
  labelStyles: {
    fontFamily: "OpenSans",
    paddingLeft: "5px",
    fontWeight: 700,
    fontSize: "16px",
    width: "350px",
  },
  copyText: {
    cursor: "pointer",
  },
  tooltip: {
    sx: {
      backgroundColor: "#F4F4F3",
      borderRadius: "20px",
      color: "#30261D",
      fontWeight: "500",
      fontSize: "12px",
      padding: "7px",
      marginTop: "7px !important",
      fontFamily: "OpenSans",
      opacity: 0.7,
    },
  },
  infoTooltips: {
    sx: {
      backgroundColor: "#F4F4F3",
      borderRadius: "0px",
      color: "#30261D",
      fontWeight: "500",
      fontSize: "12px",
      padding: "7px",
      marginTop: "7px !important",
      fontFamily: "Montserrat",
      opacity: 0.7,
      width: "100px",
      overflowY: "auto",
      maxHeight: "200px",
    },
  },
};

const InputField = ({
  maxLength,
  id,
  name,
  value,
  shrink,
  label,
  placeholder,
  onChange,
  onBlur,
  onInput,
  error,
  helperText,
  disabled,
  grayout = false,
  className,
  sx,
  addStyle,
  readOnly,
  startIcon,
  endIcon,
  textFieldIcon,
  copy,
  copyText,
  copied,
  onCopy,
  infoIcon,
  infoIconStyle,
  infoData,
  ...otherProps
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleCopy = () => {
    if (onCopy) {
      onCopy();
      setIsCopied(true);
    }
  };

  const tooltipClosed = () => {
    setIsCopied(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  const grayoutStyle = grayout ? { color: "#30261D66", opacity: 0.5 } : {};

  return (
    <>
      <InputLabel shrink={shrink} sx={{ ...styles.labelStyles, ...grayoutStyle }}>
        {label}
      </InputLabel>
      <TextField
        id={id}
        name={name}
        placeholder={placeholder}
        variant="outlined"
        value={value}
        disabled={disabled}
        error={error}
        helperText={helperText}
        className={className}
        fullWidth
        sx={addStyle ? sx : styles.inputTextField}
        onBlur={onBlur}
        onChange={onChange}
        onInput={onInput}
        {...otherProps}
        inputProps={{ maxLength: maxLength }}
        type={name === "password" ? (showPassword ? "text" : "password") : "text"} // Toggle type between text and password
        InputProps={{
          readOnly: readOnly,
          ...(textFieldIcon && {
            ...(startIcon && { startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment> }),
            ...(endIcon && { endAdornment: <InputAdornment position="start">{endIcon}</InputAdornment> }),
          }),
          ...(copy && {
            ...(copyText && {
              endAdornment: (
                <InputAdornment position="end" sx={styles.copyText} onClick={handleCopy}>
                  <Tooltip
                    title={isCopied ? copied : copyText}
                    placement="bottom"
                    componentsProps={{ tooltip: styles.tooltip }}
                    onOpen={tooltipClosed}
                  >
                    <img alt="copyIcon" src={assetKeys.copyIcon} />
                  </Tooltip>
                </InputAdornment>
              ),
            }),
          }),
          ...(infoIcon && {
            endAdornment: (
              <InputAdornment position="end" sx={styles.copyText} onClick={handleCopy}>
                <Tooltip
                  title={infoData}
                  placement="right"
                  componentsProps={{ tooltip: styles.infoTooltips }}
                  onOpen={tooltipClosed}
                >
                  <InfoOutlinedIcon style={infoIconStyle} sx={{ fontSize: "18px" }} />
                </Tooltip>
              </InputAdornment>
            ),
          }),
          // Add the password visibility toggle icon
          ...(name === "password" && {
            endAdornment: (name === "password" && value) && (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }),
        }}
      />
    </>
  );
};

export default InputField;
