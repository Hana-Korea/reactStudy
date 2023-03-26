import React, { useRef, useEffect } from 'react'

function Login() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const onLogin = () => {
        alert(`안녕하세요 ${inputRef.current.value}`)
    }
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            onLogin()
        }
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="id를 입력해주세요" onKeyDown={onEnter} />
            <button onClick={onLogin}>로그인</button>
        </div>
    )
}

export default Login
