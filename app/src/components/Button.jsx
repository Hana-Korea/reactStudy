import React from 'react'
import '@/styles/button.scss'

function Button({ size, color }) {
    return (
        <div>
            <button
                className={`button
              ${size} ${color}
            `}
            >
                버튼입니다ㄴ
            </button>
        </div>
    )
}
export default Button
