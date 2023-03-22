import React, { useState, useEffect } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(false)

    const [location, setLocation] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 0.4)
    }, [])

    return <div>{isLoading === true ? <IsLoaded /> : <>로딩중</>}</div>
}
function IsLoaded() {
    const [isClicked, setIsClicked] = useState(false)
    const [location, setLocation] = useState('')
    const [detailLocation, setDetailLocation] = useState([])
    return (
        <div>
            <div>
                로딩완료!
                <button
                    onClick={(e) => {
                        setIsClicked(true)
                        setLocation(e.target.textContent)
                        setDetailLocation(['서초구양재동'])
                    }}
                >
                    서울
                </button>
                <button
                    onClick={(e) => {
                        setIsClicked(true)
                        setLocation(e.target.textContent)
                        setDetailLocation(['해운대바다'])
                    }}
                >
                    부산
                </button>
            </div>
            <div>현재 내 지역:{location}</div>
            <div>세부지역:{detailLocation}</div>
        </div>
    )
}

export default Loading
