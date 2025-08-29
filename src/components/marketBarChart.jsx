import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function MarketBarChart({ coins }) {
  // Formatter for big numbers
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Market Cap Comparison</h2>
      <BarChart width={500} height={300} data={coins}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatNumber} />
        <Tooltip formatter={(value) => formatNumber(value)} />
        <Legend />
        <Bar dataKey="market_cap" fill="#10b981" />
      </BarChart>
    </div>
  );
}

export default MarketBarChart;
