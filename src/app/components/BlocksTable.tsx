"use client"

import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table"
import { useMemo, useState, MouseEvent } from "react"
import { TableWrapper } from "./styles/BlocksTable.styled"
import Link from "next/link"
import { BsBox } from "react-icons/bs"
import { FaRegCopy } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

type Params = {
    params: {
        tableData: TableData[]
    }
}

const BlocksTable = ({ params: { tableData } }: Params) => {
    const data: TableData[] = useMemo(() => tableData, [])
    const columnHelper = createColumnHelper<TableData>()
    const [format, setFormat] = useState<boolean>(false)
    const [clickedButtonId, setClickedButtonId] = useState<string | null>(null)

    const handleClick = async (e: MouseEvent<HTMLButtonElement>, id: string, cellValue: string) => {
        setClickedButtonId(id)

        // Copy logic here
        await navigator.clipboard.writeText(cellValue)
        setTimeout(() => {
            setClickedButtonId(null)
        }, 1000)
    }

    const columns = [
        columnHelper.accessor("number", {
            header: () => "Block",
            cell: (info) => (
                <Link href={`/block/${info.getValue()}`}>
                    <p>
                        {" "}
                        <BsBox />
                        {info.getValue()}
                    </p>
                </Link>
            ),
        }),
        columnHelper.accessor("time", {
            header: () => (
                <div style={{ padding: "0" }}>
                    {/* @TODO: add text on hover */}
                    {/* <span>
                        {format
                            ? "Click to show Datetime format"
                            : "Click to show Block Age"}
                    </span> */}
                    <button onClick={() => setFormat(!format)}>{format ? "Age" : "Date Time (UTC)"}</button>
                </div>
            ),
            cell: (info) => (
                <p
                    style={{
                        backgroundColor: "#0cb68c",
                        width: `${format ? "105px" : "170px"}`,
                        display: "inline-block",
                        cursor: "default",
                        paddingLeft: "0.8em",
                    }}
                >
                    {format ? info.getValue().age : info.getValue().dateTime}
                </p>
            ),
        }),
        columnHelper.accessor("numTxs", {
            header: () => "Txs",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("miner", {
            header: () => "Fee Recipient",
            cell: (info) => (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "0",
                    }}
                >
                    <p
                        style={{
                            color: "#0cb68c",
                            padding: "0.6em 0.6em 0.6em 0",
                            backgroundColor: "transparent",
                            cursor: "unset",
                        }}
                    >
                        {info.getValue().slice(0, 10)}...
                        {info.getValue().slice(-10)}
                    </p>
                    <button
                        id={`${info.cell.id}`}
                        className="copy-button"
                        onClick={(e) => {
                            handleClick(e, info.cell.id, info.getValue())
                        }}
                    >
                        <FaRegCopy className={`icon ${clickedButtonId === info.cell.id ? "hidden" : "show"}`} />
                        <AiOutlineCheck className={`icon ${clickedButtonId === info.cell.id ? "show" : "hidden"}`} />
                    </button>
                </div>
            ),
        }),
        columnHelper.accessor("gasUsed", {
            header: () => "Gas Used",
            cell: (info) => (
                <div style={{ padding: "0", width: "205px" }}>
                    <div style={{ padding: "0" }}>
                        <span>{info.getValue().gasUsed.toLocaleString("en")}</span>
                        <span style={{ color: "gray" }}>
                            {" "}
                            ({info.getValue().percentage}% |{" "}
                            {info.getValue().change < 0 ? info.getValue().change : "+" + info.getValue().change}%)
                        </span>
                    </div>
                    <div
                        style={{
                            padding: "0",
                            width: "100%",
                            backgroundColor: "#e1e1e1",
                            height: "2px",
                            marginTop: "7px",
                        }}
                    >
                        <span
                            style={{
                                width: `${info.getValue().percentage}%`,
                                position: "relative",
                                display: "block",
                                backgroundColor: "#315ea7",
                                height: "100%",
                            }}
                        ></span>
                    </div>
                </div>
            ),
        }),
        columnHelper.accessor("gasLimit", {
            header: () => "Gas Limit",
            cell: (info) => info.getValue().toLocaleString("en"),
        }),
        columnHelper.accessor("baseFee", {
            header: () => "Base Fee",
            cell: (info) => <span style={{ minWidth: "90px", display: "inline-block" }}>{info.getValue()} Gwei</span>,
        }),
        columnHelper.accessor("burntFees", {
            header: () => "Burnt Fees",
            cell: (info) => (
                <span style={{ minWidth: "115px", display: "inline-block" }}>{info.getValue().slice(0, 8)} ETH</span>
            ),
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <TableWrapper>
            <div>
                <span>
                    Showing blocks between #{data[data.length - 1].number} to #{data[0].number}
                </span>
            </div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, i) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <span>
                    Showing blocks between #{data[data.length - 1].number} to #{data[0].number}
                </span>
            </div>
        </TableWrapper>
    )
}

export default BlocksTable
