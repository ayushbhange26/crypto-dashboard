import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import PriceLineChart from "./components/PriceLineChart";
import MarketBarChart from "./components/marketBarChart";
import CoinsTable from "./components/CoinsTable";
import Loader from "./components/Loader";


function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd", per_page: 6 },
      })
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PriceLineChart coins={coins} />
        <MarketBarChart coins={coins} />
        <CoinsTable coins={coins} />
      </main>
    </div>
  );
}

export default App;
