export const DataTable = (props) => {
  const tbodyTdStyle = `border border-slate-300 p-2 text-sm text-slate-700`;
  return (
    <>
      {props.data && props.data.length ? (
        <table className="table-auto w-full border-collapse border border-slate-400">
          <thead className="bg-slate-200">
            <tr>
              {Object.keys(props.data[0]).map((item, i) => (
                <th
                  className="border text-sm font-medium capitalize p-2 border-slate-300"
                  key={i}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, key) => (
              <tr key={key}>
                <td className={tbodyTdStyle}>{item.article}</td>
                <td className={tbodyTdStyle}>{item.product_id}</td>
                <td className={tbodyTdStyle}>{item.composition}</td>
                <td className={tbodyTdStyle}>{item.color}</td>
                <td className={tbodyTdStyle}>{item.width}</td>
                <td className={tbodyTdStyle}>{item.weight}</td>
                <td className={tbodyTdStyle}>{item.quantity}</td>
                <td className={tbodyTdStyle}>{item.price}</td>
                <td className={tbodyTdStyle}>{item.us_dollar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center p-4">
          <p>No data found</p>
        </div>
      )}
    </>
  );
};
