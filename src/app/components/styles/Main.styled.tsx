"use client"

import styled from "styled-components"

export const Main = styled.main``

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
    padding: 3em 0;
    height: max-content;
`

export const TitleContainer = styled.section`
    margin: 3em 0 1em 1em;
    display: flex;
    align-items: baseline;
    gap: 10px;

    @media (max-width: 935px) {
        flex-direction: column;
    }

    div {
        display: flex;
        align-items: baseline;
        gap: 10px;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
    }

    h2 {
        color: gray;
        font-weight: 600;
    }
`

export const CardContainer = styled.section`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 194px;
    height: fit-content;
    padding: 1em 0.5em;
    background-color: #104050;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    letter-spacing: 0.3px;

    h4 {
        margin-bottom: 0.5em;
    }
`
