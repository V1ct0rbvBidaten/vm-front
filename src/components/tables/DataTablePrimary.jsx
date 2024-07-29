const DataTablePrimary = ({ columns, rows }) => {
  return (
    <table className="table-primary">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <td key={index}>{column.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.render
                  ? column.render(row[column.dataIndex], row)
                  : row[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTablePrimary;
