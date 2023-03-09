import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contract with the account ${deployer.address}`)

    const Factory = await ethers.getContractFactory("Crowdfunding");
    const Crowdfunding = await Factory.deploy();
    await Crowdfunding.deployed();
    console.log(`Contract successfully deplouyed with address ${Crowdfunding.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
