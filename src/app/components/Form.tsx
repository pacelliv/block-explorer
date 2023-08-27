"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { FormWrapper, StyledForm, Input, Button } from "./styles/Form.styled"
import { BiSearch } from "react-icons/bi"
import { useRouter } from "next/navigation"

const Form = () => {
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
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <Input type="text" value={search} placeholder="Search by block number" onChange={handleChange} />
                <Button>
                    <BiSearch /> Search
                </Button>
            </StyledForm>
        </FormWrapper>
    )
}

export default Form
