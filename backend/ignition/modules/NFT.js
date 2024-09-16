const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {

  const nft = m.contract("CoreNFT", ["https://aveek-goyal.github.io/10k-nft-collection/generated_metadata/"]);

  return { nft };
});