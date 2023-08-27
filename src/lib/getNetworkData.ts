export const getNetworkData = async () => {
    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&community_data=false&developer_data=false&sparkline=false",
    )

    if (!res.ok) {
        throw new Error("Failed to fetch network data")
    }

    const networkData = await res.json()

    return {
        price: networkData.market_data.current_price.usd,
        marketCap: networkData.market_data.market_cap.usd,
    }
}
