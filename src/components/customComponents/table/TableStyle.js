export const tableStyle = {
  tableContainer: {
    boxShadow: "none",
    backgroundColor: "transparent",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "11px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
  },
};
