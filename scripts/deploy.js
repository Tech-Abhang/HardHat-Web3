const { ethers } = require("hardhat");
const fs = require("fs-extra");
require("dotenv").config();


async function main(){
    console.log("Deploying contract...");
    const factory = await hre.ethers.getContractFactory("SimpleStorage");

    const contract = await factory.deploy();
    await contract.waitForDeployment();
    console.log("Contract deployed at address:", contract);



    // const currentFavoriteNumber = await contract.retrieve();
    // console.log("Current favorite number:", currentFavoriteNumber);

    // const transactionResponse = await contract.Store(7);
    // const transactionReceipt = await transactionResponse.wait(1);
    // const updatedFavoriteNumber = await contract.retrieve();
    // console.log("Updated favorite number:", updatedFavoriteNumber);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });