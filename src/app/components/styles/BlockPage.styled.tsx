"use client"

import styled from "styled-components"

export const StyledBlockPage = styled.main`
    margin: 0 1.5em;
    letter-spacing: 0.2px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 2em;
    margin-bottom: 2.5em;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    padding: 0 0 2em;

    h3 {
        font-size: 20px;
        font-weight: 600;
    }

    p {
        font-size: 15px;
        color: gray;
    }
`

export const Container = styled.section`
    width: 100%;
    border-radius: 10px;
    border: solid 1px transparent;
    box-shadow: 0px 0px 7px 2px #e1e1e1;
    margin: 2em 0 0;
    padding: 0 1.5em;
    font-size: 14px;
    background-color: #fff;
`

export const HeaderDiv = styled.div`
    margin: 1.5em 0;
    display: flex;
    justify-content: space-between;
    max-width: 900px;

    div:nth-of-type(1) {
        color: gray;
        min-width: 125px;
        display: flex;
        align-items: center;
        gap: 7px;
    }

    div:nth-of-type(2) {
        text-align: left;
        width: 570px;
        word-break: break-all;
    }

    @media (max-width: 870px) {
        flex-direction: column;
        gap: 10px;
        margin: 1.7em 0;

        div:nth-of-type(2) {
            width: 100%;
        }
    }
`

export const NavButton = styled.button`
    font-size: 16px;
    padding: 0.09em 0.55em;
    margin: 0 0.1em;
    cursor: pointer;
    border-radius: 5px;
    background-color: #dddddd;
    border: 1px solid #dddddd;

    &:hover {
        background-color: #d8d8d8;
    }
`

export const StyledCopyButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: gray;
    margin-left: 5px;
    font-size: 15px;

    &:hover {
        color: black;
    }
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #efefef;
`
