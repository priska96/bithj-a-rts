export function ColorSwatchTable({ rows = [] }) {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className="border-b border-gray-200">
            <td
              style={{ background: row.color, width: '120px', height: '80px' }}
              className="border border-gray-300"
            ></td>
            <td className="p-4">
              <strong>{row.name}</strong>
              <br />
              {row.code || row.color}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ColorSwatchTable;
