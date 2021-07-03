const TreasuryVester = artifacts.require("TreasuryVester");
const LiquidityPoolManager = artifacts.require("LiquidityPoolManager");

module.exports = function (deployer) {
  // const YAY = '0xf1F94960f2EE20FCB123dd5B38a9ce277cAA9855'; //old without burnOwnTokens at fuji -- should not use

  // const YAY = '0x3d3D4D81D4D702e791480cD782C55B19A506b849'; // at fuji with burnOwnTokens.
  // const YAY = '0x10b3A2445f29F838ed8D9d61a82205A0436B7F75'; // at mainnet with burnOwnTokens.

  const YAY = '0x6713CdC45d304B5D3b4F4E6104203DC854823043'; //same contract at mainnet but testable, called PUPU Token - PUPU

  const WAVAX = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'; // at mainnet.
  // const WAVAX = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'; // at fuji

  deployer.deploy(TreasuryVester, YAY).then(
    () => {
      return deployer.deploy(LiquidityPoolManager, WAVAX, YAY, TreasuryVester.address);
    }
  );

};