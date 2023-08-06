export const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    const hoursDisplay = hours < 10 ? '0' + hours : String(hours)
    const minutesDisplay = minutes < 10 ? '0' + minutes : String(minutes)
    const secondsDisplay = seconds < 10 ? '0' + seconds : String(seconds)

    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`
}
