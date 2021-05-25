
 export const tableColumns = [
    {
      id: "1",
      styles: { fontWeight: "bold" },
      name: "userTable.name",
      dataField: "name",
      sortable: true,
    },
    {
      id: "2",
      styles: { fontWeight: "bold" },
      name: "userTable.surname",
      dataField: "surname",
      sortable: true,
    },
    {
      id: "3",
      styles: { fontWeight: "bold" },
      name: "userTable.address",
      dataField: "address",
      sortable: true,
    },
    {
      id: "4",
      styles: { fontWeight: "bold" },
      name: "userTable.email",
      dataField: "email",
      sortable: true,
    },
    {
      id: "5",
      styles: { fontWeight: "bold" },
      name: "userTable.creationDate",
      dataField: "creationDate",
      sortable: true,
    },
    ({
      id: "6",
      styles: { fontWeight: "bold" },
      name:  "userTable.dni",
      dataField: "dni",
      sortable: true,

    })
  ];

  export const resetOption = [
    {
      id: "7",
      styles: { fontWeight: "bold" },
      name: "userTable.reset",
      dataField: "reset",
    },
  ];

export const MODAL_TYPE = {
  EDIT: "EDIT",
  DELETE: "DELETE",
  INFO: "INFO"
}
