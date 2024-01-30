import React from "react";
import CrudPage from "../layout/CrudPage";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const forms = [
  {
    label: "Nomi",
    name: "name",
  },
];
const Subject = () => {
  return (
    <CrudPage
      pageColumns={columns}
      collectionName={"subjects"}
      title="Subject"
      pageForm={forms}
    ></CrudPage>
  );
};

export default Subject;
