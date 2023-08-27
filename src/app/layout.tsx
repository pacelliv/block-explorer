import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ThemeWrapper from "./ThemeWrapper"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Block Explorer",
    description: "Find information about blocks in Ethereum",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeWrapper>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ThemeWrapper>
    )
}

export default RootLayout
