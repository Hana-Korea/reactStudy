import React, { useState, useRef } from 'react'

function Calculator() {
    const result = useRef(0)
    // const result = 0 이라고 변수선언하는 것과 useRef의 차이점
    // 변수는 컴포넌트가 다시 렌더링될 때 변수가 초기화된다.(다시 선언됨)
    // useRef 의 경우에는 컴포넌트가 재렌더링되더라도 변수값을 계속 저장하고 있는다.
    const firstInput = useRef()
    const secondInput = useRef()
    const sum = () => {
        result.current = Number(firstInput.current.value) + Number(secondInput.current.value)
        console.log(result.current)
    }
    return (
        <div>
            <input ref={firstInput} />
            <input ref={secondInput} />
            <button onClick={sum}>더하기</button>
            <div>{result.current}</div>
        </div>
    )
}

export default Calculator
