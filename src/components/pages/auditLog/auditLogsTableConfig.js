export const auditLogsConfig = {
    tableHeaders: ["id", "Account Number", "First Name","Last Name","Phone no", "Type of Change", "Status", "Email"],
    tableFields: [
      { id: "id", align: "left", checkbox: true, width: "4%" },
      { id: "accountNumber", align: "left", showMaxChar: 30, width: "15%", navigationLink: "/" },
      { id: "firstName",align: "left", showMaxChar: 30, width: "15%" },
      { id: "lastName",align: "left", showMaxChar: 30, width: "15%" },
      { id: "phoneNO",align: "left", showMaxChar: 30, width: "15%" },
      { id: "typeOfChange", align: "left", showMaxChar: 30, width: "15%" },
      { id: "status", align: "left", showMaxChar: 30, width: "15%" },
      { id: "email", align: "left", showMaxChar: 30, width: "15%" },
    ],
  };
  