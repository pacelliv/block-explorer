const { ethers } = require("ethers")

export const toGwei = (baseFeeInHex: string) => {
    const baseFeeInWei = parseInt(baseFeeInHex, 16)
    const baseFeeInGwei = ethers.formatUnits(baseFeeInWei, "gwei")
    return String(baseFeeInGwei).slice(0, 5)
}
