require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./task/block-number");

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    sepolia:{
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId:11155111,
    }
  },
  solidity: "0.8.28",
};
