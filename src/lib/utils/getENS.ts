const { ethers } = require("ethers")

const MAINNET_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_API_KEY

export const getENS = async (address: string) => {
    const provider = new ethers.AlchemyProvider(
        "homestead",
        MAINNET_ALCHEMY_API_KEY,
    )
    const ens = await provider.lookupAddress(address)
    return ens ? ens : address
}
