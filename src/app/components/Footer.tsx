"use client"

import Image from "next/image"
import EthereumLogo from "../../../public/ethereum-eth-logo.svg"
import EffectLogo from "../../../public/scott-webb-rug-like-unsplash.jpg"
import { StyledFooter, ImageWrapper, LogoWrapper } from "./styles/Footer.styled"

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <div>
                    <LogoWrapper>
                        <Image
                            alt="Ethereum logo"
                            src={EthereumLogo}
                            quality={100}
                        />
                        <h3>Designed by Pacelli</h3>
                    </LogoWrapper>
                    <p>
                        Etherscan is a Block Explorer for Ethereum, a
                        decentralized smart contract platform.
                    </p>
                </div>
                <ImageWrapper>
                    <Image
                        alt="Rug like image"
                        src={EffectLogo}
                        quality={100}
                    />
                </ImageWrapper>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </StyledFooter>
    )
}

export default Footer
