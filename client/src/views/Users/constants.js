//  export const tableColumns = [
//     {
//       id: "1",
//       styles: { fontWeight: "bold" },
//       name: "userTable.name",
//       dataField: "name",
//       // isSorted: true,
//     },
//     {
//       id: "2",
//       styles: { fontWeight: "bold" },
//       name: "userTable.surname",
//       dataField: "surname",
//       // isSorted: true,
//     },
//     {
//       id: "3",
//       styles: { fontWeight: "bold" },
//       name: "userTable.address",
//       dataField: "address",
//       // isSorted: true,
//     },
//     {
//       id: "4",
//       styles: { fontWeight: "bold" },
//       name: "userTable.email",
//       dataField: "email",
//       // isSorted: true,
//     },
//     {
//       id: "5",
//       styles: { fontWeight: "bold" },
//       name: "userTable.creationDate",
//       dataField: "creationDate",
//       // isSorted: true,
//     },
//     ({
//       id: "6",
//       styles: { fontWeight: "bold" },
//       name:  "userTable.dni",
//       dataField: "dni",
//       // isSorted: true,

//     })
//   ];

export const columnHandler = (intl) => {
  const tableColumns = [
    {
      id: "1",
      Header: intl.formatMessage({ id: "userTable.name" }),
      accessor: "name",
      isSorted: true,
    },
    {
      id: "2",
      Header: intl.formatMessage({ id: "userTable.surname" }),
      accessor: "surname",

      isSorted: true,
    },
    {
      id: "3",
      Header: intl.formatMessage({ id: "userTable.address" }),
      accessor: "address",
      isSorted: true,
    },
    {
      id: "4",
      Header: intl.formatMessage({ id: "userTable.email" }),
      accessor: "email",
      isSorted: true,
    },
    {
      id: "5",
      Header: intl.formatMessage({ id: "userTable.creationDate" }),
      accessor: "creationDate",
      isSorted: true,
    },
    {
      id: "6",
      Header: intl.formatMessage({ id: "userTable.dni" }),
      accessor: "dni",
      isSorted: true,
    },
  ];

  return tableColumns;
};
export const resetOptionHandler = (intl) => {
  const resetOption = [
    {
      id: "7",
      Header: intl.formatMessage({ id: "userTable.reset" }),
      accessor: "reset",
    },
  ];
  return resetOption;
};

export const MODAL_TYPE = {
  EDIT: "EDIT",
  DELETE: "DELETE",
  INFO: "INFO",
};
