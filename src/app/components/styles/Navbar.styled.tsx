"use client"

import styled from "styled-components"

export const Nav = styled.nav`
    background-color: #293640;
    color: #fff;
    padding: 1em 0;
    top: 0;
    z-index: 99;
    position: sticky;
`

export const InnerNav = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1.5em;
`

export const Span = styled.span`
    font-size: 1.3rem;
`

export const Form = styled.form`
    width: 400px;
    display: flex;
    gap: 10px;
    margin: auto 0 auto auto;
`

export const Input = styled.input`
    width: 90%;
    background-color: #293640;
    border: 2px solid #384a58;
    color: #fff;
    padding: 0.5em;
    display: flex;
    font-size: inherit;
    border-radius: 6px;
    letter-spacing: 0.2px;

    &:focus {
        outline: none;
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
