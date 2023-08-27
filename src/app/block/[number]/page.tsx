import { getBlock } from "@/lib/getBlock"
import { getENS } from "@/lib/utils/getENS"
import { StyledBlockPage, Title, Container, HeaderDiv, Divider } from "@/app/components/styles/BlockPage.styled"
import { formatDate, getBlockAge } from "@/lib/utils/formatDate"
import { AiOutlineQuestionCircle, AiOutlineClockCircle } from "react-icons/ai"
import { ethers } from "ethers"
import Navigator from "@/app/components/Navigator"
import CopyButton from "@/app/components/CopyButton"

type Params = {
    params: {
        number: string
    }
}

export const generateMetadata = ({ params: { number } }: Params) => {
    return {
        title: `Ethereum Block #${number} | Blockscan`,
    }
}

const BlockPage = async ({ params: { number } }: Params) => {
    const blockData: Promise<Block> = getBlock("0x" + Number(number).toString(16))
    const block = await blockData
    const percentage = ((parseInt(block.gasUsed, 16) * 100) / parseInt(block.gasLimit, 16)).toFixed(2)

    return (
        <StyledBlockPage>
            <Title>
                <h3>Block</h3>
                <p>#{parseInt(block.number, 16)}</p>
            </Title>
            <Container>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Block Height: </span>
                    </div>
                    <div>
                        <Navigator params={{ number, block }} />
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Timestamp: </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <AiOutlineClockCircle style={{ fontSize: "16px" }} />
                        <span>
                            {getBlockAge(block.timestamp)} ({formatDate(block.timestamp)} +UTC)
                        </span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Transactions: </span>
                    </div>
                    <div>
                        <span>{block.transactions.length} transactions in this block</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Withdrawals: </span>
                    </div>
                    <div>
                        <span>
                            {block.withdrawals.length > 0 ? block.withdrawals.length : ""} withdrawals in this block
                        </span>
                    </div>
                </HeaderDiv>
                <Divider />
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Fee Recipient: </span>
                    </div>
                    <div>
                        <span>{await getENS(block.miner)}</span>
                        <CopyButton params={{ miner: block.miner }} />
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Total Difficulty: </span>
                    </div>
                    <div>
                        <span>{parseInt(block.totalDifficulty, 16).toLocaleString("en")}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Size: </span>
                    </div>
                    <div>
                        <span>{parseInt(block.size, 16).toLocaleString("en")} bytes</span>
                    </div>
                </HeaderDiv>
                <Divider />
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Gas Used: </span>
                    </div>
                    <div>
                        <span>{parseInt(block.gasUsed, 16).toLocaleString("en")}</span>{" "}
                        <span style={{ color: "gray" }}>({percentage}%)</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Gas Limit: </span>
                    </div>
                    <div>
                        <span>{parseInt(block.gasLimit, 16).toLocaleString("en")}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Base Fee Per Gas: </span>
                    </div>
                    <div>
                        <span>{ethers.formatUnits(BigInt(block.baseFeePerGas), "ether")} ETH</span>{" "}
                        <span style={{ color: "gray" }}>
                            ({ethers.formatUnits(BigInt(block.baseFeePerGas), "gwei")} Gwei)
                        </span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Burnt Fees: </span>
                    </div>
                    <div>
                        <span>
                            🔥{" "}
                            {ethers.formatUnits(
                                (BigInt(block.baseFeePerGas) * BigInt(block.gasUsed)).toString(),
                                "ether",
                            )}{" "}
                            ETH
                        </span>{" "}
                    </div>
                </HeaderDiv>
            </Container>
            <Container>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Hash: </span>
                    </div>
                    <div>
                        <span>{block.hash}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Parent Hash: </span>
                    </div>
                    <div>
                        <span>{block.parentHash}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>State Root: </span>
                    </div>
                    <div>
                        <span>{block.stateRoot}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Withdrawals Root: </span>
                    </div>
                    <div>
                        <span>{block.withdrawalsRoot}</span>
                    </div>
                </HeaderDiv>
                <HeaderDiv>
                    <div>
                        <AiOutlineQuestionCircle style={{ fontSize: "16px" }} />
                        <span>Nonce: </span>
                    </div>
                    <div>
                        <span>{block.nonce}</span>
                    </div>
                </HeaderDiv>
            </Container>
        </StyledBlockPage>
    )
}

export default BlockPage
