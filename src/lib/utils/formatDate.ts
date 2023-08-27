const { DateTime } = require("luxon")

export const formatDate = (timestamp: string) => {
    const intUnixTimestamp = parseInt(timestamp, 16)
    const date = DateTime.fromSeconds(intUnixTimestamp).setZone("utc")
    const formattedDate = date.toFormat("yyyy-MM-dd HH:mm:ss")
    return formattedDate
}

export const getBlockAge = (timestamp: string) => {
    const intTimestamp = parseInt(timestamp, 16)
    const currentTime = DateTime.utc()
    const blockMinedTime = DateTime.fromSeconds(intTimestamp).setZone("utc")
    const timeDiff = currentTime.diff(blockMinedTime, ["hours", "minutes", "seconds"])

    const { seconds, minutes, hours, days } = timeDiff.toObject()

    // seconds
    // minutes
    // hours + minutes
    // days + hours

    let ageString = ""

    if (days > 0) {
        ageString = `${Math.floor(days)} day${days > 1 ? "s" : ""} ${hours > 0 ? `${hours} hours ago` : "ago"}`
    } else if (hours > 0) {
        ageString = `${Math.floor(hours)} hour${hours > 1 ? "s" : ""} ${minutes > 0 ? `${minutes} mins ago` : "ago"}`
    } else if (minutes > 0) {
        ageString = `${Math.floor(minutes)} min${minutes > 1 ? "s" : ""} ago`
    } else {
        ageString = `${Math.floor(seconds)} sec${seconds > 1 ? "s" : ""} ago`
    }

    return ageString
}
