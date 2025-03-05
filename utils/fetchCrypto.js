// utils/fetchCrypto.js
export const mockCryptoData = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    current_price: 86259,
    price_change_percentage_24h: -7.91,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    current_price: 2158.1,
    price_change_percentage_24h: -13.17,
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
    current_price: 0.999,
    price_change_percentage_24h: 0.01,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
    current_price: 2.4,
    price_change_percentage_24h: -8.7,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
    current_price: 576.45,
    price_change_percentage_24h: -5.93,
  }
];

export const fetchCrypto = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1',
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      return mockCryptoData;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
    return mockCryptoData;
  }
};
