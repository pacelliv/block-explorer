"use client"

import React, { useState } from "react"
import { StyledCopyButton } from "./styles/BlockPage.styled"
import { FaRegCopy } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

type Params = {
    params: {
        miner: string
    }
}

const CopyButton = ({ params: { miner } }: Params) => {
    const [copy, setCopy] = useState<boolean>(false)
    const handleClick = () => {
        setCopy(true)
        setTimeout(() => setCopy(false), 1000)
    }

    return (
        <>
            <StyledCopyButton
                onClick={() => {
                    navigator.clipboard.writeText(miner)
                    handleClick()
                }}
            >
                {copy ? <AiOutlineCheck /> : <FaRegCopy />}
            </StyledCopyButton>
        </>
    )
}

export default CopyButton
