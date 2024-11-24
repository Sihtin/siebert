export const accountManagementConfig = {
  tableHeaders: ["id", "Account Number", "User Name", "Type of Change", "Email", "Creation Date"],
  tableFields: [
    { id: "id", align: "left", checkbox: true, width: "4%" },
    { id: "accountNumber", align: "left", showMaxChar: 30, width: "20%", navigationLink: "/" },
    { id: "firstName", concatId:"lastName",align: "left", showMaxChar: 30, width: "20%" },
    { id: "emailAddress", align: "left", showMaxChar: 30, width: "24%" },
    { id: "creationDate", align: "left", showMaxChar: 30, width: "28%" },
  ],
};
