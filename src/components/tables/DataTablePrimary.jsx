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
        {rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} data-label={column.title}>
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center">
              No hay registros
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTablePrimary;
