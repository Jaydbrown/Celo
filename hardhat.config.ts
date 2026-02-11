import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    "celo-sepolia": {
      url: "https://celo-sepolia.drpc.org",
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 11142220,
    },
  },
  etherscan: {
    apiKey: {
      "celo-sepolia": "empty",
    },
    customChains: [
      {
        network: "celo-sepolia",
        chainId: 11142220,
        urls: {
          apiURL: "https://celo-sepolia.blockscout.com/api",
          browserURL: "https://celo-sepolia.blockscout.com",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;