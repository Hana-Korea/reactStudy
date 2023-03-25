import React, { useState, useRef, useEffect } from 'react'

function Count2() {
    const [count, setCount] = useState(0)
    // const [rendered, setRendered] = useState(0)
    const renderRef = useRef(0)
    let countVar = 0
    const countRef = useRef(0)
    const increaseState = () => {
        setCount(count + 1)
    }
    const increaseRef = () => {
        console.log(countRef.current)
        countRef.current += 1
    }
    const increaseVar = () => {
        countVar += 1
        console.log(countVar)
        return countVar
    }
    // useEffect(() => {
    //     console.log('렌더링')
    //     setRendered(rendered + 1)
    // })
    useEffect(() => {
        console.log('렌더링')
        renderRef.current += 1
    })
    return (
        <div>
            <p>State:{count}</p>
            <p>Ref:{countRef.current}</p>
            <p>Var:{countVar}</p>
            <button onClick={increaseState}>state올려</button>
            <button onClick={increaseRef}>ref올려</button>
            <button onClick={increaseVar}>var올려</button>
        </div>
    )
}

export default Count2
