export const accountManagementConfig = {
  tableHeaders: ["id", "Account Number", "Request or Change", "Type of Change", "Document Date", "Creation Date"],
  tableFields: [
    { id: "id", align: "left", checkbox: true, width: "4%" },
    { id: "accountNumber", align: "left", showMaxChar: 30, width: "24%", navigationLink: "/" },
    { id: "requestOrChange", align: "left", showMaxChar: 30, width: "24%" },
    { id: "typeOfChange", align: "left", showMaxChar: 30, width: "24%" },
    { id: "creationDate", align: "left", showMaxChar: 30, width: "24%" },
  ],
};
