import React, { useEffect } from 'react'

function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 열일중')
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h3>타이머를 시작합니다.콘솔창을 보세요!</h3>
        </div>
    )
}

export default Timer
