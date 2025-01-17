const { ethers, upgrades } = require("hardhat");

const dpidRegistry = require("../.openzeppelin/unknown-dpid.json");

async function main() {
  const ResearchObject = await ethers.getContractFactory("ResearchObject");
  console.log("Deploying ResearchObject...");
  const proxy = await upgrades.deployProxy(ResearchObject, [
    dpidRegistry.proxies[0].address,
  ]);
  await proxy.deployed();
  console.log("ResearchObject deployed to:", proxy.address);
}

main();
