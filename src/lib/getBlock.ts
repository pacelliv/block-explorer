const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL || ""

export const getBlock = async (number: string) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = JSON.stringify({
        jsonrpc: "2.0",
        id: 0,
        method: "eth_getBlockByNumber",
        params: [number, false],
    })

    const requestOptions = {
        method: "POST",
        headers,
        body,
    }

    const res = await fetch(MAINNET_RPC_URL, requestOptions)

    if (!res.ok) {
        throw new Error("Failed to fetch block")
    }

    const block = await res.json()
    return block.result
}
