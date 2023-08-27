"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { NavButton } from "./styles/BlockPage.styled"

type Params = {
    params: {
        number: string
        block: Block
    }
}

const Navigator = ({ params: { number, block } }: Params) => {
    const router = useRouter()

    const goToPreviousBlock = () => {
        router.push(`/block/${Number(number) - 1}/`)
    }

    const goToNextBlock = () => {
        router.push(`/block/${Number(number) + 1}/`)
    }

    return (
        <>
            <span style={{ marginRight: "8px" }}>{parseInt(block.number, 16)}</span>
            <NavButton onClick={goToPreviousBlock} disabled={number === "0"}>
                &#8249;
            </NavButton>
            <NavButton onClick={goToNextBlock}>&#8250;</NavButton>
        </>
    )
}

export default Navigator
