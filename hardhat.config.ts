import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "@xyrusworx/hardhat-solidity-json";
import "dotenv/config";
import "hardhat-gas-reporter";
import { HardhatUserConfig, task } from "hardhat/config";
import "solidity-docgen";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account) => console.log(account.address));
});

// You need to export an object to set up your config.
// Go to https://hardhat.org/config/ to learn more.
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    bsc: {
      url: `https://bsc-dataseed1.binance.org`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    polygon: {
      url: `https://polygon-rpc.com`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mumbai: {
      url: `https://matic-mumbai.chainstacklabs.com`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    gnosis: {
      url: `https://rpc.gnosischain.com`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    arbitrum: {
      url: "https://arbitrum.blockpi.network/v1/rpc/public",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    base: {
      url: "https://base-mainnet.public.blastapi.io",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    optimism: {
      url: "https://optimism-mainnet.public.blastapi.io",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    cronos: {
      url: "https://cronos-evm.publicnode.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mantle: {
      url: "https://rpc.mantle.xyz",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    ontology: {
      url: "https://dappnode2.ont.io:10339",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    linea: {
      url: "https://linea.decubate.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    cyber: {
      url: "https://cyber.alt.technology",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    taiko: {
      url: "https://taiko.blockpi.network/v1/rpc/public",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    blast: {
      url: "https://blast.blockpi.network/v1/rpc/public",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    xlayer: {
      url: "https://rpc.xlayer.tech",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    coredao: {
      url: "https://core.public.infstones.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    metis: {
      url: "https://metis-pokt.nodies.app",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    neon: {
      url: "https://neon-proxy-mainnet.solana.p2p.org",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    polygonzk: {
      url: "https://zkevm-rpc.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    scroll: {
      url: "https://rpc.scroll.io",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    zeta: {
      url: "https://zetachain-evm.blockpi.network/v1/rpc/public",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mint: {
      url: "https://rpc.mintchain.io",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mode: {
      url: "https://mode.drpc.org",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    avalanche: {
      url: "https://avax.meowrpc.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    lisk: {
      url: "https://rpc.api.lisk.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    form: {
      url: "https://rpc.form.network/http",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    ink: {
      url: "https://rpc-gel.inkonchain.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    iota: {
      url: "https://json-rpc.evm.iotaledger.net",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    sonic: {
      url: "https://rpc.soniclabs.com/",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    xdc: {
      url: "https://erpc.xinfin.network",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    soneium: {
      url: "https://rpc.soneium.org",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    world: {
      url: "https://worldchain-mainnet.g.alchemy.com/public",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || "",
    enabled: true,
    currency: "USD",
    showTimeSpent: true
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      bsc: process.env.BSCSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      gnosis: process.env.GNOSISSCAN_API_KEY || "",
      arbitrumOne: process.env.ARBISCAN_API_KEY || "",
      base: process.env.BASESCAN_API_KEY || "",
      optimisticEthereum: process.env.OPTIMISTICSCAN_API_KEY || "",
      cronos: process.env.CRONOSCAN_API_KEY || "",
      mantle: process.env.MANTLESCAN_API_KEY || "",
      // ontology: "", // no etherscan
      linea: process.env.LINEASCAN_API_KEY || "",
      // cyber: "", // no etherscan
      taiko: process.env.TAIKOSCAN_API_KEY || "",
      blast: process.env.BLASTSCAN_API_KEY || "",
      xlayer: process.env.OKLINK_API_KEY || "",
      coredao: process.env.COREDAOSCAN_API_KEY || "",
      metis: "metis",
      neon: "neon",
      polygonZkEVM: process.env.ZKEVM_POLYGONSCAN_API_KEY || "",
      scroll: process.env.SCROLLSCAN_API_KEY || "",
      // zeta: "", // no etherscan
      // mint: "", // no etherscan
      mode: "mode",
      avalanche: "avalanche",
      lisk: "lisk",
      form: "form",
      ink: "ink",
      iota: "iota",
      sonic: process.env.SONICSCAN_API_KEY || "",
      xdc: process.env.XDCSCAN_API_KEY || "",
      soneium: "soneium",
      world: process.env.WORLDSCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "cronos",
        chainId: 25,
        urls: { apiURL: "https://api.cronoscan.com/api", browserURL: "https://cronoscan.com" }
      },
      {
        network: "mantle",
        chainId: 5000,
        urls: { apiURL: "https://api.mantlescan.xyz/api", browserURL: "https://mantlescan.xyz" }
      },
      {
        network: "linea",
        chainId: 59144,
        urls: { apiURL: "https://api.lineascan.build/api", browserURL: "https://lineascan.build" }
      },
      {
        network: "taiko",
        chainId: 167000,
        urls: { apiURL: "https://api.taikoscan.io/api", browserURL: "https://taikoscan.io" }
      },
      {
        network: "blast",
        chainId: 81457,
        urls: { apiURL: "https://api.blastscan.io/api", browserURL: "https://blastscan.io" }
      },
      {
        network: "xlayer",
        chainId: 196,
        urls: {
          apiURL: "https://www.oklink.com/api/v5/explorer/contract/verify-source-code-plugin/XLAYER",
          browserURL: "https://oklink.con"
        }
      },
      {
        network: "coredao",
        chainId: 1116,
        urls: { apiURL: "https://openapi.coredao.org/api", browserURL: "https://scan.coredao.org" }
      },
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
          browserURL: "https://explorer.metis.io"
        }
      },
      {
        network: "neon",
        chainId: 245022934,
        urls: {
          apiURL: "https://api.neonscan.org/hardhat/verify",
          browserURL: "https://neonscan.org"
        }
      },
      {
        network: "scroll",
        chainId: 534352,
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com"
        }
      },
      {
        network: "mode",
        chainId: 34443,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/34443/etherscan",
          browserURL: "https://modescan.io"
        }
      },
      {
        network: "avalanche",
        chainId: 43114,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://snowtrace.io"
        }
      },
      {
        network: "lisk",
        chainId: 1135,
        urls: {
          apiURL: "https://blockscout.lisk.com/api",
          browserURL: "https://blockscout.lisk.com"
        }
      },
      {
        network: "form",
        chainId: 478,
        urls: {
          apiURL: "https://explorer.form.network/api",
          browserURL: "https://explorer.form.network"
        }
      },
      {
        network: "ink",
        chainId: 57073,
        urls: {
          apiURL: "https://explorer.inkonchain.com/api",
          browserURL: "https://explorer.inkonchain.com"
        }
      },
      {
        network: "iota",
        chainId: 8822,
        urls: {
          apiURL: "https://explorer.evm.iota.org/api",
          browserURL: "https://explorer.evm.iota.org"
        }
      },
      {
        network: "sonic",
        chainId: 146,
        urls: {
          apiURL: "https://api.sonicscan.org/api",
          browserURL: "https://sonicscan.org"
        }
      },
      {
        network: "xdc",
        chainId: 50,
        urls: {
          apiURL: "https://api.xdcscan.com/api",
          browserURL: "https://xdcscan.com"
        }
      },
      {
        network: "soneium",
        chainId: 1868,
        urls: { apiURL: "https://soneium.blockscout.com/api", browserURL: "https://soneium.blockscout.com" }
      },
      {
        network: "world",
        chainId: 480,
        urls: { apiURL: "https://api.worldscan.org/api", browserURL: "https://worldscan.org" }
      }
    ]
  },
  sourcify: { enabled: false },
  docgen: { pages: "files", templates: "./docs/templates" }
};

export default config;
