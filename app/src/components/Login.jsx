import React, { useState } from 'react'

function Login() {
    // 유저가 입력한 Id,password 값을 받아와서 state로 저장
    // 이 state 값을 서버로 전송
    const [userId, setUserId] = useState()
    const [password, setPassword] = useState()
    const onUserIdChange = (e) => {
        setUserId(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            login()
        }
    }
    const login = () => {
        alert(userId)
        alert(password)
    }
    return (
        <div>
            <input placeholder="아이디" onChange={onUserIdChange} />
            <input placeholder="패스워드" type="password" onChange={onPasswordChange} onKeyDown={onKeyDown} />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default Login
