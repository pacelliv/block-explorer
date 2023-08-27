"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { Nav, InnerNav, Span, Form, Input, Button } from "./styles/Navbar.styled"
import { BiSearch } from "react-icons/bi"
import Link from "next/link"

const Navbar = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch("")
        router.push(`/block/${search}/`)
    }

    return (
        <Nav>
            <InnerNav>
                <Link href="/">
                    <Span>Blockscan</Span>
                </Link>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" value={search} placeholder="Search by block number" onChange={handleChange} />
                    <Button>
                        <BiSearch />
                    </Button>
                </Form>
            </InnerNav>
        </Nav>
    )
}

export default Navbar
