import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [selectedMinutes, setSelectedMinutes] = useState(5)
  const [timeLeft, setTimeLeft] = useState(5 * 60) // in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const intervalRef = useRef(null)
  const audioRef = useRef(null)

  // Time options in minutes
  const timeOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsFinished(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft])

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true)
      setIsFinished(false)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsFinished(false)
    setTimeLeft(selectedMinutes * 60)
  }

  const handleTimeChange = (e) => {
    const minutes = parseInt(e.target.value)
    setSelectedMinutes(minutes)
    setTimeLeft(minutes * 60)
    setIsRunning(false)
    setIsFinished(false)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="vignette"></div>

      <div className="container">
        <div className="glitch-wrapper">
          <h1 className="title" data-text="COLLAB TIMER">COLLAB TIMER</h1>
        </div>

        <div className="timer-card">
          <div className="card-glow"></div>

          <div className="time-selector-wrapper">
            <label htmlFor="time-select" className="selector-label">
              SELECT DURATION
            </label>
            <select
              id="time-select"
              value={selectedMinutes}
              onChange={handleTimeChange}
              className="time-selector"
              disabled={isRunning}
            >
              {timeOptions.map(mins => (
                <option key={mins} value={mins}>
                  {mins} MINUTES
                </option>
              ))}
            </select>
          </div>

          <div className={`timer-display ${isFinished ? 'finished' : ''} ${isRunning ? 'running' : ''}`}>
            <div className="timer-text">{formatTime(timeLeft)}</div>
            <div className="timer-shadow">{formatTime(timeLeft)}</div>
          </div>

          <div className="controls">
            <button
              onClick={handleStart}
              disabled={isRunning || timeLeft === 0}
              className="btn btn-start"
            >
              <span className="btn-text">START</span>
            </button>

            <button
              onClick={handleStop}
              disabled={!isRunning}
              className="btn btn-stop"
            >
              <span className="btn-text">STOP</span>
            </button>

            <button
              onClick={handleReset}
              className="btn btn-reset"
            >
              <span className="btn-text">RESET</span>
            </button>
          </div>

          {isFinished && (
            <div className="finished-message">
              <span className="finished-text">TIME EXPIRED</span>
            </div>
          )}
        </div>

        <div className="noise"></div>
      </div>
    </div>
  )
}

export default App
