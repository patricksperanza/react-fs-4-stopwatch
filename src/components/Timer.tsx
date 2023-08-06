import { useState, useEffect, useRef } from "react"
import { formatTime } from "../utils/format"

const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const timer = useRef<NodeJS.Timer>()

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(timer.current)
  }, [isRunning])

  return (
    <div className="timer">
      <h2 className="display">{formatTime(time)}</h2>
      <div className="actions">
        <button
          className={`btn ${isRunning ? "red" : "green"}`}
          onClick={() => {
            if (isRunning) clearInterval(timer.current)
            setIsRunning((prevIsRunning) => !prevIsRunning)
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="btn"
          onClick={() => {
            setTime(0)
            setIsRunning(false)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
