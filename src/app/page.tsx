import { getBlock } from "@/lib/getBlock"
import { getNetworkData } from "@/lib/getNetworkData"
import {
    Main,
    Wrapper,
    TitleContainer,
    CardContainer,
    Card,
} from "./components/styles/Main.styled"
import { getGasPrice } from "@/lib/getGasPrice"
import { getBlockNumber } from "@/lib/getBlockNumber"
import { BsBoxes } from "react-icons/bs"
import Background from "./components/Background"
import Form from "./components/Form"
import BlocksTable from "./components/BlocksTable"
import { getBlocks } from "@/lib/getBlocks"

export const revalidate = 15 // revalidate fetch requests in the segment every 15 seconds

const Home = async () => {
    const blockDataPromise: Promise<TableData[]> = getBlocks()
    const blockData = await blockDataPromise

    const gasPriceData: Promise<string> = getGasPrice()
    const gasPrice = await gasPriceData

    const networkData: Promise<NetworkData> = getNetworkData()
    const { price, marketCap } = await networkData

    const currentBlockNumberData: Promise<BlockNumberData> = getBlockNumber()
    const currentBlockNumber = (await currentBlockNumberData).number

    const latestFinalizedBlockData: Promise<Block> = getBlock("finalized")
    const latestFinalizedBlock = await latestFinalizedBlockData
    const latestSafeBlockData: Promise<Block> = getBlock("safe")
    const latestSafeBlock = await latestSafeBlockData

    return (
        <Main>
            <Wrapper>
                <Background />
                <Form />
                <CardContainer>
                    <Card>
                        <h4>Current Block</h4>
                        <p>{currentBlockNumber}</p>
                    </Card>
                    <Card>
                        <h4>Safe Block</h4>
                        <p>{parseInt(latestSafeBlock.number, 16)}</p>
                    </Card>
                    <Card>
                        <h4>Finalized Block</h4>
                        <p>{parseInt(latestFinalizedBlock.number, 16)}</p>
                    </Card>
                    <Card>
                        <h4>Market Cap</h4>
                        <p>$ {marketCap.toLocaleString("en")}</p>
                    </Card>
                    <Card>
                        <h4>ETH/USD Price</h4>
                        <p>$ {price.toLocaleString("en")}</p>
                    </Card>
                    <Card>
                        <h4>Gas Price</h4>
                        <p>{gasPrice} Gwei</p>
                    </Card>
                </CardContainer>
            </Wrapper>
            <TitleContainer>
                <div>
                    <BsBoxes style={{ fontSize: "2.1rem" }} />
                    <h1>Recent Blocks</h1>
                </div>
                <h2>Most Recent Blocks in the Ethereum Blockchain</h2>
            </TitleContainer>
            <BlocksTable params={{ tableData: blockData }} />
        </Main>
    )
}

export default Home
