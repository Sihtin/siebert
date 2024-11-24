export const accountManagementConfig = {
  tableHeaders: ["id", "Account Number", "First Name", "Last Name","Creation Date", "Email", "Creation Date"],
  tableFields: [
    { id: "id", align: "left", checkbox: true, width: "4%" },
    { id: "accountNumber", align: "left", showMaxChar: 30, width: "20%", navigationLink: "/" },
    { id: "firstName",align: "left", showMaxChar: 30, width: "15%" },
    { id: "lastName",align: "left", showMaxChar: 30, width: "15%" },
    { id: "creationDate", align: "left", showMaxChar: 30, width: "25%" },
    { id: "emailAddress", align: "left", showMaxChar: 30, width: "25%" },
  ],
};
