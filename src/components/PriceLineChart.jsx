import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function PriceLineChart({ coins }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Price Trend</h2>
      <LineChart width={500} height={300} data={coins}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="current_price" stroke="#6366f1" />
      </LineChart>
    </div>
  );
}

export default PriceLineChart;
