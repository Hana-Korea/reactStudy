import React, { useState, useEffect } from 'react'
import Timer from '../Timer'

function Count() {
    const [timer, setTimer] = useState(false)

    return (
        <div>
            <h1>useEffect</h1>
            {timer && <Timer />}
            <button
                onClick={() => {
                    setTimer(!timer)
                }}
            >
                버튼
            </button>
        </div>
    )
}

export default Count
