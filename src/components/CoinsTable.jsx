function CoinsTable({ coins }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow md:col-span-2">
      <h2 className="text-lg font-semibold mb-4">Top Coins</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Price (USD)</th>
            <th className="p-2">24h Change</th>
            <th className="p-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="border-t hover:bg-gray-50">
              <td className="p-2 flex items-center gap-2">
                <img src={coin.image} alt="" className="w-6 h-6" />
                {coin.name}
              </td>
              <td className="p-2">${coin.current_price.toLocaleString()}</td>
              <td
                className={`p-2 font-medium ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-2">${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinsTable;
