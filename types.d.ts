/**
 * {
        "baseFeePerGas": "0x43abc8ad2",
        "difficulty": "0x0",
        "extraData": "0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465",
        "gasLimit": "0x1c9c380",
        "gasUsed": "0x980dbf",
        "hash": "0x08958f01e186bc3e0bb62554468550097c60ec65228b791988a46f5b91d4b6e7",
        "logsBloom": "0x982301f249ba74445c0037848e1b02813a8bc5726bb6400ee8e50c80549a4786426ca10988e60061628c3d78671c65f14b45a401fb22288062f0c128a16c00b612e0f50d5120892eab2ace7cc09808f6d0c3d98682e7080000b6dd5587783e621b4a9c270220b6a38318bb9191cd1ad552791ef488498ca5218980f7cac944a61d718e5d10f85980a44033ca9ecc8069420439319d440c4d46392ad967ba97295fcc1552b40c74a6d0314feaba2d8e8026406004c3c503a0b464ccd818887514339168ce751501e38786cc2024cbaa41154022832b428931437ab40208c7a8661438b84f2c08a4c0fb5d14a5de302b4cb1e23b1421c4ab40a00d9f1b709f7c49",
        "miner": "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",
        "mixHash": "0x2422f490cc90dd6ac271b138142d0c36f1c09f44ebe4a3c587fbcc8e71243960",
        "nonce": "0x0000000000000000",
        "number": "0x1105db9",
        "parentHash": "0x7b161cac4c528cf8fc65de94d640305214278dda9bacd45ed1d6448189006bb2",
        "receiptsRoot": "0x439bc0d8aaba35cdf515c29a32acb3319735c292a777c2387957ae450cc937e8",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0xba97",
        "stateRoot": "0x68f0fe70a89090dabdca0ad31f8429fd16b8ee0a218797347d7d9e99618cd524",
        "timestamp": "0x64ce705b",
        "totalDifficulty": "0xc70d815d562d3cfa955",
        "transactions": [],
        "transactionsRoot": "0x2e93661e2d952baf1c67d3d911351f92d6185006bd0c039f4165bfbf91d0be05",
        "uncles": [],
        "withdrawals": [],
        "withdrawalsRoot": "0xb5d391da4b3a94f37f9c41637ab0618195adc2152e198633975795a07368096f",
        "numTxs": 130
    }
 */

type Withdrawals = {
    index: string
    validatorIndex: string
    address: string
    amount: string
}

type Block = {
    baseFeePerGas: string
    difficulty: string
    extraData: string
    gasLimit: string
    gasUsed: string
    hash: string
    logsBloom: string
    miner: string
    mixHash: string
    nonce: string
    number: string
    parentHash: string
    receiptsRoot: string
    sha3Uncles: string
    size: string
    stateRoot: string
    timestamp: string
    totalDifficulty: string
    transactions: string[] | []
    transactionsRoot: string
    uncles: []
    withdrawals: Withdrawals[]
    withdrawalsRoot: string
}

type BlockTime = {
    age: string
    dateTime: string
}

type GasUsed = {
    gasUsed: number
    change: number
    percentage: string
}

type TableData = {
    number: number
    hash: string
    time: BlockTime
    numTxs: number
    miner: string
    gasUsed: GasUsed
    gasLimit: number
    baseFee: string
    burntFees: string
}

type BlockNumberData = {
    hex: string
    number: number
}

type NetworkData = {
    price: number
    marketCap: number
}
