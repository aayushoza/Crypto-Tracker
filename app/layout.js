// web-app/app/layout.js

import './globals.css'; // <-- Import your global styles here

export const metadata = {
  title: 'Crypto Price Tracker',
  description: 'Track top cryptocurrency prices in real time',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
