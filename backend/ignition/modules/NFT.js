const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {

  const nft = m.contract("CoreNFT", ["https://<your-github-page>.io/<repository-name>/generated_metadata/"]);

  return { nft };
});
