const accountManagementStyles = {
  heading: {
    fontStyle: "OpenSans",
    fontSize: "32px",
    fontWeight: 600,
  },
  sendEmailButtonStyle: {
    height: "44px",
    backgroundColor: "#E1FBF0",
    fontStyle: "OpenSans",
    letterSpacing: "0.8px",
    fontWeight: 500,
    fontSize: "13px",
    color: "#000000DE",
    borderRadius: "8px",
    border: "1px solid #037547",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#00FE99",
      border: "1px solid #00FE99",
      fontSize: "13px",
      fontWeight: "bold",
      boxShadow: "none",
    },
    textTransform: "none",
  },
  popupOverlay: {
    position: "fixed",
    padding:"4px",
    top: 40,
    left: 0,
    width: "100%",
    height: "93%",
    zIndex: 990,
    "@media (max-width: 649px)": {
      left:0,
    },
    "@media (min-width: 650px) and (max-width: 899px)": {
      left:200,
    },
    "@media (min-width: 900px) and (max-width: 1079px)": {
      left:200,
    },
    "@media (min-width: 1080px) and (max-width: 1439px)": {
      left:260,
    },
    "@media (min-width: 1440px)": {
      left:260,
    },
  },
  popupContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  },
};
export default accountManagementStyles;
