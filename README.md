# Smart contract development base - Hardhat

The setup in this repository can be used as a quick starting point for smart contract development.

A version using [Truffle](https://trufflesuite.com/truffle) is available [here](https://github.com/schronck/contracts-base).

## Requirements

To run the project you need:

- [Node.js](https://nodejs.org) development environment.
- (optional) A file named `.env`

Your `.env` file should contain the following variables:

```bash
# The private key of your wallet.
PRIVATE_KEY=

# Your infura.io project ID for deploying to Ethereum networks.
INFURA_ID=

# Your API key for verification.
ETHERSCAN_API_KEY=
```

## Setup

Pull the repository from GitHub, then install its dependencies by executing this command:

```bash
npm install
```

## Contract deployment

To deploy the smart contracts to a network, replace _[networkName]_ with the name of the network and _[scriptName]_ with the name of the script you wish to run in this command:

```bash
hardhat run scripts/[scriptName] --network [networkName]
```

Networks can be configured in _hardhat.config.ts_. We've preconfigured the following:

- `hardhat` (for local testing, default)
- `ethereum` (Ethereum Mainnet)
- `goerli` (Görli Ethereum Testnet)
- `rinkeby` (Rinkeby Ethereum Testnet)
- `ropsten` (Ropsten Ethereum Testnet)
- `bsc` (BNB Smart Chain)
- `bsctest` (BNB Smart Chain Testnet)
- `polygon` (Polygon Mainnet (formerly Matic))
- `mumbai` (Matic Mumbai Testnet)
- `gnosis` (Gnosis Chain (formerly xDai Chain))

## Verification

For automatic verification on block explorers, you can use the Etherscan plugin:

```bash
npx hardhat verify [contractAddress] [constructorArguments] --network [networkName]
```

For more detailed instructions, check out it's documentation [here](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan#usage).

## Linting

The project uses [Solhint](https://github.com/protofire/solhint) for Solidity smart contracts and [ESLint](https://eslint.org) for TypeScript files. To lint all files, simply execute:

```bash
npm run lint
```

To lint only the Solidity files:

```bash
npm run lint-contracts
```

To lint only the TypeScript files:

```bash
npm run lint-ts
```

## Tests

To run the unit tests written for this project, execute this command in a terminal:

```bash
npm test
```

To run the unit tests only in a specific file, just append the path to the command. For example, to run tests just for Greeter:

```bash
npm test test/GreeterTest.ts
```

## Documentation

The documentation for the contracts is generated via the [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) package. Run the tool via the following command:

```bash
npm run docgen
```

The output can be found in the _[docs](docs)_ folder.
