// const {ethers} = require("hardhat");
const path = require("path"); // Import the path module

// async function main(){
//   console.log("deploying a smart contract")
//   const Medical = await ethers.getContractFactory("MedicalRecord");
//   const accounts = await ethers.getSigner();
//   const medical = await Medical.connect(accounts[0]).deploy();
//   await medical.deployed();
//   console.log(`medical is deployed in address ${medical.address}`);
// }

// main()
//   .then(()=>process.exit(0))
//   .catch((error)=>{
//     console.log(error);
//     process.exit(1);
//   });


const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying a smart contract...");

  // Get the first signer from the list of available signers
  const [deployer] = await ethers.getSigners();

  // Log the deployer's address to verify
  console.log("Deployer Address:", deployer.address);

  // Get the contract factory for the MedicalRecord contract
  const Medical = await ethers.getContractFactory("MedicalRecord", deployer);

  // Deploy the contract
  const medical = await Medical.deploy();

  // Wait for the contract to be deployed
  await medical.deployed();

  // Log the deployed contract address
  console.log(`MedicalRecord deployed to address: ${medical.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
