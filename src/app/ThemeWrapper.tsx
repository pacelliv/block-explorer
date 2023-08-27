"use client"

import React from "react"
import StyledComponentsRegistry from "@/lib/registry"
// import { ThemeProvider } from "styled-components" // @TODO: add light/dark mode
import GlobalStyles from "./components/styles/Global"

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
        </StyledComponentsRegistry>
    )
}

export default ThemeWrapper
