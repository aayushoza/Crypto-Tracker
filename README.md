# Crypto Price Tracker

## Overview
This project is a simple cryptocurrency price tracker dashboard built with Next.js. It displays live prices for 5 cryptocurrencies using a public API (such as CoinGecko), featuring a search bar to filter results and a "Refresh" button to update data manually. The app uses a state management library (e.g., React Query) for efficient data handling and includes responsive design for optimal viewing on both web and mobile devices.

In addition, developer documentation is provided via Docusaurus, detailing the project setup, API integration, state management approach, and challenges faced during development.

## Features
- **Live Prices:** Displays real-time data for 5 cryptocurrencies.
- **Search Functionality:** Filter the displayed cryptocurrencies with a search bar.
- **Manual Refresh:** A refresh button allows users to update prices on-demand.
- **Loading Indicators:** Shows a loading state while fetching data.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Developer Documentation:** Comprehensive guide available in the docs folder.

## Technologies Used
- **Frontend:** Next.js, React, HTML, CSS
- **API Integration:** CoinGecko API (or a similar public API)
- **State Management:** React Query (alternatively, Zustand or Context API)
- **Documentation:** Docusaurus

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

#### 1. Clone the Repository
bash
git clone https://github.com/aayushoza/Crypto-Tracker.git
cd Crypto-Tracker
'''
#### 2. Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
bash
npm run dev
 or
yarn dev
 or
pnpm dev
 or
bun dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

#### 3. Docusaurus Documentation 

This documentation of the project is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

$ npm
### Local Development

$ npm start
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

$ npm build
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

$ USE_SSH=true yarn deploy
Not using SSH:

$ GIT_USER=<Your GitHub username> yarn deploy
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
