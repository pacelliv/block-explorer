const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL || ""

export const getGasPrice = async () => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = JSON.stringify({
        jsonrpc: "2.0",
        id: 0,
        method: "eth_gasPrice",
        params: [],
    })

    const requestOptions = {
        method: "POST",
        headers,
        body,
    }

    const res = await fetch(MAINNET_RPC_URL, requestOptions)

    if (!res.ok) {
        throw new Error("Failed to fetch gas price")
    }

    const gasPriceInWei = await res.json()
    return String(parseInt(gasPriceInWei.result, 16)).slice(0, 2)
}
