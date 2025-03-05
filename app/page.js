// app/page.js
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CryptoTracker from '@/components/CryptoTracker';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black">
        <CryptoTracker />
      </div>
    </QueryClientProvider>
  );
}
