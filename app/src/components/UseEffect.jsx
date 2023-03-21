import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 2000)
    })
    useEffect(() => {
        setText('추')
    }, [isLoading])

    return (
        <div>
            {isLoading === true ? <>로딩완료</> : <>로딩중</>}
            <input />
            <div>{text}</div>
        </div>
    )
}

export default UseEffect
