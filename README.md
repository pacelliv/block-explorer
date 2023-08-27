## Week 3 project - Block Explorer 🔍

### Introduction 👩‍🏫👨‍🏫

From ethereum.org [docs](https://ethereum.org/en/developers/docs/apis/json-rpc/):

> In order for a software application to interact with the Ethereum blockchain - either by reading blockchain data or sending transactions to the network - it must connect to an Ethereum node.

> For this purpose, every Ethereum client implements a JSON-RPC specification, so there is a uniform set of methods that applications can rely on regardless of the specific node or client implementation.

> JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over HTTP, or in many various message passing environments. It uses JSON (RFC 4627) as data format.

### Description 🌌

This block explorer is a minimal replica of Etherscan that provides real-time insights into the blocks of the Ethereum blockchain. Leveraging a stack of powerful technologies including JSON-RPC API, CoinGecko API, TanStack Table, ethers v6, Next.js, luxon, TypeScript, and Styled Components, this project delivers an efficient and user-friendly platform for users to explore Ethereum blocks.

Features:

1. Home Page: The central hub showcases a table with the latest 50 Ethereum blocks, powered by TanStack Table. Easy navigation, advanced filtering, and sorting options help users access essential block data like block number, miner, gas usage, and timestamp.

2. Block Page: View detailed information on individual blocks, including gas limits, receipts root, and transaction root. Luxon ensures time data is presented in a user-friendly format, enhancing comprehension.

3. JSON-RPC API Integration: Used to interact with the Ethereum blockchain, fetching accurate and up-to-date block data.

4. CoinGecko API: Fetch the current Ether price from CoinGecko API, offering context to transaction values and gas fees.

5. Ethers v6 Library: Interact directly with Ethereum blockchain, to retrieve validator's ENS and to handle the units of numbers.

6. Next.js and TypeScript: Enhance efficiency and maintainability with Next.js and TypeScript. Enjoy server-side rendering and improved page loading times.

7. Styled Components: Used to create customizable React Components elements.

### Quick Start 🏃‍♀️🏃

```bash
git clone https://github.com/pacelliv/block-explorer
cd block-explorer
```

To install the dependencies run:

```bash
npm install
```

### Using the application 👩‍💻👨‍💻

You will need a Alchemy API key, follow the instructions shown [here](https://docs.alchemy.com/reference/api-overview) in order to get one for free.

Then create a `.env.local` file in the root directory of the project and create the following environment variables:

```bash
NEXT_PUBLIC_MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/your_api_key
NEXT_PUBLIC_MAINNET_ALCHEMY_API_KEY=your_api_key
```

Run dev mode:

```bash
npm run dev
```

Build the app with:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Resources 📓📔

-   This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
-   This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font
-   [JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)
-   [TanStack Table v8](https://tanstack.com/table/v8)
-   [Ethers v6](https://docs.ethers.org/v6/)
-   [Styled Components](https://styled-components.com/)
-   [Luxon](https://moment.github.io/luxon/#/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React Icons](https://react-icons.github.io/react-icons/)
