// components/CryptoTracker.js
"use client";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCrypto } from '@/utils/fetchCrypto';
import SearchBar from './SearchBar';
import CryptoList from './CryptoList';

export default function CryptoTracker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch crypto data
  const {
    data: cryptoData,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCrypto,
    staleTime: 60000, // 1 minute
    refetchOnWindowFocus: false,
    retry: 2
  });

  // Handler for refresh button
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetch();
    } catch (err) {
      console.error('Error refreshing data:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Filter based on searchTerm
  const filteredData = (cryptoData || []).filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-2 bg-black text-white">
      <h1 className="text-xl font-bold mb-3 text-center">Crypto Price Tracker</h1>
      
      <div className="flex items-center mb-3 space-x-2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`${
            isRefreshing ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-800'
          } text-white py-1 px-3 rounded whitespace-nowrap`}
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {isLoading && <p className="text-center py-2">Loading prices...</p>}
      {isError && <p className="text-center py-2 text-red-500">Failed to fetch data. Using fallback data.</p>}
      
      {cryptoData && (
        <CryptoList data={filteredData} />
      )}
    </div>
  );
}