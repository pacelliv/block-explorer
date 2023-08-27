import { getBlockNumber } from "./getBlockNumber"
import { getENS } from "./utils/getENS"
import { toGwei } from "./utils/toGwei"
import { getBlockAge, formatDate } from "./utils/formatDate"
import { ethers } from "ethers"

const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL || ""

export const getBlocks = async () => {
    const currentBlock = (await getBlockNumber()).number

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const blocks = []

    for (let i = currentBlock; i > currentBlock - 50; i--) {
        const body = JSON.stringify({
            jsonrpc: "2.0",
            id: i,
            method: "eth_getBlockByNumber",
            params: ["0x" + i.toString(16), false],
        })

        const requestOptions = {
            method: "POST",
            headers,
            body,
        }

        const res = await fetch(MAINNET_RPC_URL, requestOptions)

        if (!res.ok) {
            throw new Error("Failed to fetch request")
        }

        const data = await res.json()
        const { number, hash, timestamp, transactions, miner, gasUsed, gasLimit, baseFeePerGas } = data.result
        const GAS_TARGET = 15000000
        const change = Math.round(((parseInt(gasUsed, 16) - GAS_TARGET) / GAS_TARGET) * 100)
        const percentage = ((parseInt(gasUsed, 16) * 100) / parseInt(gasLimit, 16)).toFixed(2)

        blocks.push({
            number: parseInt(number, 16),
            hash: hash,
            time: {
                age: getBlockAge(timestamp),
                dateTime: formatDate(timestamp),
            },
            numTxs: transactions.length,
            miner: miner,
            gasUsed: { gasUsed: parseInt(gasUsed, 16), change, percentage },
            gasLimit: parseInt(gasLimit, 16),
            baseFee: toGwei(baseFeePerGas),
            burntFees: ethers.formatUnits((BigInt(baseFeePerGas) * BigInt(gasUsed)).toString(), "ether"),
        })
    }

    return blocks
}
