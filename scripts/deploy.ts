import { ethers } from "hardhat";

async function main() {

  //deploy GameToken
  const GameToken = await ethers.deployContract("GameToken");
  await GameToken.waitForDeployment();
  console.log(`GameToken  deployed to ${GameToken.target}`);


  //deploy Vault
  const Vault = await ethers.deployContract("Vault");
  await Vault.waitForDeployment();
  console.log(`Vault deployed to ${Vault.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
