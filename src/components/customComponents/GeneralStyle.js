const generalStyle = {
  container: {
    display: "flex",
    width: "100%",
    height: "100vh",
    flexWrap: "nowrap",
  },
  sidebar: {
    position: "sticky",
    top: 0,
    left: 0,
    width: "260px",
    height: "100vh",
    "@media (max-width: 650px)": {
      display: "none",
    },
    "@media (max-width: 899px)": {
      width: "200px", // For small screens
    },
    "@media (min-width: 900px) and (max-width: 1079px)": {
      width: "200px", // For medium screens
    },
    "@media (min-width: 1080px) and (max-width: 1439px)": {
      width: "260px", // For large screens
    },
    "@media (min-width: 1440px)": {
      width: "260px", // For extra-large screens
    },
  },
  children: {
    flexGrow: 1,
    flexShrink: 0,
    width: "calc(100% - 260px)",
    "@media (max-width: 650px)": {
      width: "200px", // Adjust for small screens
    },
    "@media (max-width: 899px)": {
      width: "400px", // Adjust for small screens
    },
    "@media (min-width: 900px) and (max-width: 1079px)": {
      width: "600px", // Adjust for medium screens
    },
    "@media (min-width: 1080px) and (max-width: 1439px)": {
      width: "800px", // Adjust for large screens
    },
    "@media (min-width: 1440px)": {
      width: "1000px", // For extra-large screens
    },
  },
};
export default generalStyle;
