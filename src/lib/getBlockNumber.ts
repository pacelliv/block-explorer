const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL || ""

export const getBlockNumber = async () => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = JSON.stringify({
        jsonrpc: "2.0",
        id: 0,
        method: "eth_blockNumber",
        params: [],
    })

    const requestOptions = {
        method: "POST",
        headers,
        body,
    }

    const res = await fetch(MAINNET_RPC_URL, requestOptions)

    if (!res.ok) {
        throw new Error("Failed to fetch block number")
    }

    const blockNumberData = await res.json()

    return {
        hex: blockNumberData.result,
        number: parseInt(blockNumberData.result, 16),
    }
}
