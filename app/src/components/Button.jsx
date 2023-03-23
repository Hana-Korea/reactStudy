import React from 'react'
import style from '../styles/button.module.css'

function Button() {
    return (
        <div>
            <button
                className={`${style.button}
              ${style.large} ${style.secondary}  
            `}
            >
                버튼입니다
            </button>
        </div>
    )
}
export default Button
