import React from "react";
import CrudPage from "../layout/CrudPage";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
];
const forms = [
  {
    label: "Nomi",
    name: "name",
  },
];
const Classes = () => {
  return (
    <CrudPage
      pageColumns={columns}
      collectionName={"classes"}
      title="Class"
      pageForm={forms}
    ></CrudPage>
  );
};

export default Classes;
