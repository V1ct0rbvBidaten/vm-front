import React from "react";

const DataTablePrimary = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        {columns.map((column, index) => (
          <th key={index}>{column.title}</th>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default DataTablePrimary;
