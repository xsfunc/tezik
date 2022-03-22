# tezik

This project is the front-end of [tezik](https://tezik.vercel.app).
See also backend part -- [tezik-dipdup](https://github.com/xsfunc/tezik-dipdup).
The front-end uses [Nextjs](https://nextjs.org/), a React framework.

## Installation

```bash
git clone https://github.com/xsfunc/tezik
```

Go to the project directory

```bash
npm install
# or
yarn install
```

Create a `.env.local` file with the following content:

```
NEXT_PUBLIC_DIPDUP_HOST=https://dipdup.ml/v1/graphql
NEXT_PUBLIC_TZKT_HOST=tzkt.io
NEXT_PUBLIC_DOMAINS_HOST=https://domains.dipdup.net/v1/graphql

NEXT_PUBLIC_QUIPU_FA_2_FACTORY=KT1PvEyN1xCFCgorN92QCfYjw3axS6jawCiJ
NEXT_PUBLIC_QUIPU_FA_1_2_FACTORY=
NEXT_PUBLIC_QUIPU_T2T_DEX=KT1Ni6JpXqGyZKXhJCPQJZ9x5x5bd7tXPNPC
NEXT_PUBLIC_QUIPU_TOKEN_LIST_IPFS=QmfJKnZDbmEnE15u1sVznRT6b35sPQ9mHLbiy7gZSWfreY

NEXT_PUBLIC_DEFAULT_RPC=https://mainnet.api.tez.ie
NEXT_PUBLIC_NETWORK=mainnet

```

This will set the front-end to run against the main tzkt API and the contracts on the **mainnet** so **BE CAREFUL**.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Stack used

* [nextjs](https://nextjs.org/) / [react](https://reactjs.org/)
* [typescript](https://www.typescriptlang.org/)
* [material-ui](https://mui.com/) components
* [taquito](https://tezostaquito.io/) to interact with the blockchain
* [redux-toolkit](https://redux-toolkit.js.org/) to manage state

### Project structure

* `/components`: reusable components used multiple times in the app
* `/features`: project modules with main features
* `/layouts`: UI layouts
* `/pages`: the different pages of the website (see nextjs doc)
* `/services`: modules to interact with external services
* `/utils`: general-purpose utility functions 