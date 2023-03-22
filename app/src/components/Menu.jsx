import React, { useState } from 'react'

function Menu() {
    const [num, setNum] = useState(0)
    const [isHovering, setIsHovering] = useState()
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert('눌렀다')
        }
    }
    const onChange = (e) => {
        setNum(e.target.value)
    }
    const onFocus = (e) => {
        setNum('작성중입니다')
    }
    const onBlur = () => {
        setNum('더이상 작성하지 않으실겁니까?')
    }
    const onMouseOver = () => {
        setIsHovering(true)
    }
    const onMouseOut = () => {
        setIsHovering(false)
    }
    return (
        <div>
            <input onChange={onChange} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} />
            <div> {num} </div>
            <p onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                {' '}
                mouse
            </p>
            {isHovering === true ? <p>마우스가 들어왔음</p> : <p>마우스 나갔음</p>}
        </div>
    )
}

export default Menu
