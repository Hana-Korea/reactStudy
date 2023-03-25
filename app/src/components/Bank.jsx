import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload
    }
}
function UserList() {
    const [number, setNumber] = useState(0)
    const [money, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <p>잔고{money}원</p>
            {/* {money} state는 reducer를 통해서만 업데이트 된다. 앞으로 수정하고 싶을 때마다 dispatch를 불러줄 거임 */}
            <input
                type="number"
                step="1000"
                value={number}
                onChange={(e) => {
                    setNumber(Number(e.target.value))
                }}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'deposit', payload: number })
                }}
            >
                예금
            </button>
            <button>송금</button>
        </div>
    )
}

export default UserList
