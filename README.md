# Smart contract development base - Hardhat

The setup in this repository can be used as a quick starting point for smart contract development.

A version using [Truffle](https://trufflesuite.com/truffle) is available [here](https://github.com/schronck/contracts-base).

## Setup

To run the project you need [Node.js](https://nodejs.org) development environment.

Pull the repository from GitHub, then install its dependencies by executing this command:

```bash
npm install
```

Certain actions, like deploying to a public network or verifying source code on block explorers, need environment variables in a file named `.env`. See _[.env.example](.env.example)_ for more info.

## Contract deployment

To deploy the smart contracts to a network, replace _[networkName]_ with the name of the network and _[scriptName]_ with the name of the script you wish to run in this command:

```bash
npx hardhat run scripts/[scriptName] --network [networkName]
```

Networks can be configured in _[hardhat.config.ts](hardhat.config.ts)_. We've preconfigured the following:

- `hardhat` (for local testing, default)
- `ethereum` (Ethereum Mainnet)
- `goerli` (Görli Ethereum Testnet)
- `sepolia` (Sepolia Ethereum Testnet)
- `bsc` (BNB Smart Chain)
- `bsctest` (BNB Smart Chain Testnet)
- `polygon` (Polygon Mainnet (formerly Matic))
- `mumbai` (Matic Mumbai Testnet)
- `gnosis` (Gnosis Chain (formerly xDai Chain))
- `arbitrum` (Arbitrum One (Mainnet))
- `base` (Base Mainnet)
- `optimism` (Optimism Mainnet)
- `cronos` (Cronos Mainnet)
- `mantle` (Mantle Network Mainnet)
- `ontology` (Ontology EVM Mainnet)
- `linea` (Linea Mainnet)
- `cyber` (Cyber Mainnet)
- `taiko` (Taiko Mainnet)
- `blast` (Blast)
- `xlayer` (X Layer Mainnet)
- `coredao` (Core Blockchain Mainnet)
- `metis` (Metis Andromeda Mainnet)
- `neon` (Neon EVM Mainnet)
- `polygonzk` (Polygon zkEVM)
- `scroll` (Scroll)
- `zeta` (ZetaChain Mainnet)
- `mint` (Mint Blockchain Mainnet)
- `mode` (Mode Network Mainnet)
- `avalanche` (Avalanche C-Chain)
- `lisk` (Lisk Mainnet)
- `form` (Form Mainnet)
- `ink` (Ink Mainnet)
- `iota` (IOTA EVM Mainnet)
- `sonic` (Sonic Mainnet)
- `xdc` (XDC Network Mainnet)
- `soneium` (Soneium Mainnet)
- `world` (World Chain Mainnet)

## Verification

For source code verification on block explorers, you can use the Verify plugin:

```bash
npx hardhat verify [contractAddress] [constructorArguments] --network [networkName]
```

For more detailed instructions, check out it's documentation [here](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#usage).

Some block explorers might not support the verify plugin. In that case, use [hardhat-solidity-json](https://www.npmjs.com/package/@xyrusworx/hardhat-solidity-json) to generate the standard JSON output and verify the contracts manually:

```bash
npx hardhat solidity-json
```

The generated files will be under the [artifacts/solidity-json](./artifacts/solidity-json) folder, which you can typically submit on block explorers.

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
npm test test/Greeter.spec.ts
```

## Documentation

The documentation for the contracts is generated via the [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) package. Run the tool via the following command:

```bash
npm run docgen
```

The output can be found in the _[docs](docs)_ folder.
