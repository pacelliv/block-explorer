"use client"

import styled from "styled-components"

export const FormWrapper = styled.div`
    background-color: #293640;
    border: 2px solid #384a58;
    margin: 0 auto 3rem;
    max-width: 800px;
    width: 90%;
    padding: 0.3em 0.5em;
    border-radius: 6px;
    display: flex;
`

export const StyledForm = styled.form`
    display: flex;
    margin: 0 auto;
    gap: 10px;
    flex: 1;
`

export const Input = styled.input`
    background-color: #293640;
    border: 2px solid transparent;
    width: 90%;
    color: #fff;
    padding: 0.5em;
    display: flex;
    font-size: inherit;
    letter-spacing: 0.2px;
    border-radius: 6px;

    &:active {
        border: 2px solid #384a58;
    }

    &:focus {
        outline: none;
        border: 2px solid #384a58;
    }
`

export const Button = styled.button`
    font-size: inherit;
    background-color: #293640;
    border: 2px solid #384a58;
    padding: 0.55em 0.7em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 6px;
    transition: all 0.3s ease;
    gap: 5px;

    &:hover {
        background-color: #303d45;
        border-color: #384a58;
        color: #fff;
    }

    &:focus: {
        background-color: #293640;
        border-color: #384a58;
        color: #fff;
    }
`
