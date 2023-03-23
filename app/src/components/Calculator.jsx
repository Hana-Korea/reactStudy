import React, { useState, useRef } from 'react'

function Calculator() {
    const firstInput = useRef()
    const secondInput = useRef()
    const [result, setResult] = useState()
    const sum = () => {
        setResult(Number(firstInput.current.value) + Number(secondInput.current.value))
    }
    return (
        <div>
            <input ref={firstInput} />
            <input ref={secondInput} />
            <button onClick={sum}>더하기</button>
            <div>{result}</div>
        </div>
    )
}

export default Calculator
