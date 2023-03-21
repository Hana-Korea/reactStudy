/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'

function Timer() {
    const [isClicked, setIsClicked] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const countDown = () => {
        setSeconds(seconds - 1)
    }

    useEffect(() => {
        if (isClicked) {
            setTimeout(() => {
                countDown()
            }, 1000)
        }
    }, [seconds])

    return (
        <div>
            <div>{seconds}</div>
            <button
                onClick={() => {
                    setIsClicked(true)
                    setTimeout(() => {
                        countDown()
                    }, 1000)
                }}
            >
                타이머시작
            </button>
            <button
                onClick={() => {
                    setIsClicked(false)
                }}
            >
                타이머중지
            </button>
        </div>
    )
}

export default Timer
