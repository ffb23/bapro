import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../table/index";
import N1 from "../n1/index";
import "./index.css";

const Index = () => {
  const [showTable, setShowTable] = useState(false);

  const handleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <N1 showButtons={handleTable} />
      {showTable ? <Table className="container" /> : ""}
    </div>
  );
};
export default Index;
