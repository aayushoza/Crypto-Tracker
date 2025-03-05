"use client";

export default function CryptoList({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-center py-2">No cryptocurrencies found.</p>;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black border-collapse text-sm">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-1 px-1 text-left text-xs font-medium tracking-wider">Coin</th>
            <th className="py-1 px-1 text-left text-xs font-medium tracking-wider">Symbol</th>
            <th className="py-1 px-1 text-right text-xs font-medium tracking-wider">Price (USD)</th>
            <th className="py-1 px-1 text-right text-xs font-medium tracking-wider">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id} className="border-b border-gray-700 hover:bg-gray-900">
              <td className="py-1 px-1 text-xs">
                <div className="flex items-center space-x-1">
                  <img src={coin.image} alt={coin.name} className="w-1 h-1" />
                  <span>{coin.name}</span>
                </div>
              </td>
              <td className="py-1 px-1 text-xs uppercase">{coin.symbol.toUpperCase()}</td>
              <td className="py-1 px-1 text-xs text-right">${coin.current_price.toLocaleString()}</td>
              <td className={`py-1 px-1 text-xs text-right ${(coin.price_change_percentage_24h || 0) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {(coin.price_change_percentage_24h || 0).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

