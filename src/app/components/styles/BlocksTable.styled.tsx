"use client"

import styled from "styled-components"

export const TableWrapper = styled.div`
    overflow-x: auto;
    margin: 0 1em;
    border-radius: 10px;
    border: solid 1px transparent;
    box-shadow: 0px 0px 20px 2px #e5e5e5;
    background-color: #fff;

    &::-webkit-scrollbar {
        height: 12px;
    }

    &::-webkit-scrollbar-track {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 0.2em;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #cacaca;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #bababa;
    }

    table {
        width: 100%;
        margin: 0 auto;
        border-collapse: collapse;
        font-size: 14px;
        letter-spacing: 0.2px;
    }

    div {
        padding: 1em 1em 1.5em;
        font-size: 14px;
        letter-spacing: 0.2px;
    }

    div:nth-of-type(2) {
        padding: 1.5em 1em 1em;
    }

    th {
        padding: 1em;
        text-align: left;
    }

    td {
        padding: 0.5em 1em;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #cecece;
    }

    p {
        width: max-content;
        padding: 0.6em;
        background-color: #315ea7;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.3s ease;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p:hover {
        background-color: #3f72c4;
    }

    button {
        margin: 0;
        background-color: transparent;
        border: none;
        font-weight: 800;
        font-family: inherit;
        cursor: pointer;
        color: #315ea7;
    }

    .copy-button {
        background-color: transparent;
        border: none;
        padding: 0.3em 0.2em 0;
    }

    .icon {
        font-size: 16px;
        pointer-events: none;
        color: gray;
        pointer: cursor;
    }

    .show {
        display: block;
    }

    .hidden {
        display: none;
    }
`
