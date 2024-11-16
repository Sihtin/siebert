const sidebarStyle = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000000",
  },
  imageText: {
    fontStyle: "OpenSans",
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: "14px",
  },
  buttonText: {
    height: "54px",
    width: "100%",
    fontStyle: "OpenSans",
    color: "#FFFFFF",
    fontSize: "14px",
    backgroundColor: "none",
    borderRadius: "8px",
    "&.Mui-selected": {
      backgroundColor: "00FE99",
      color: "black",
    },
  },
  dividerStyle: {
    borderColor: "#FFFFFF33",
    width: "225px",
  },
  iconStyle: {
    marginRight: "8px",
    width: "16px",
    height: "16px",
  },
  logoutButton: {
    height: "100px",
    width: "250px",
    position: "absolute !important",
    bottom: "10px !important",
  },
  logoutButtonStyle: {
    height: "54px",
    width: "100%",
    fontStyle: "OpenSans",
    color: "#FFFFFF",
    fontSize: "14px",
    backgroundColor: "none",
    borderRadius: "8px",
    "&.Mui-selected": {
      backgroundColor: "00FE99",
      color: "black",
    },
  },
  logoutText: {
    fontStyle: "OpenSans",
    color: "#FFFFFF",
    fontSize: "14px",
  },
};
export default sidebarStyle;
