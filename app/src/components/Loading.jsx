import React, { useState, useEffect } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(false)
    const [location, setLocation] = useState()
    const [detailLocation, setDetailLocation] = useState([])

    useEffect(() => {
        if (location === '서울') {
            setDetailLocation(['서초구양재동'])
        } else if (location === '부산') {
            setDetailLocation(['해운대바다'])
        }
    }, [location])
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 0.4)
    }, [])

    return (
        <div>
            {isLoading === true ? (
                <>
                    <button
                        onClick={() => {
                            setLocation('서울')
                        }}
                    >
                        서울
                    </button>
                    <button
                        onClick={() => {
                            setLocation('부산')
                        }}
                    >
                        부산
                    </button>

                    <div>현재 내 지역:{location}</div>
                    <div>세부지역:{detailLocation}</div>
                </>
            ) : (
                <>로딩중</>
            )}
        </div>
    )
}

export default Loading
