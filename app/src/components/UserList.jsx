import React, { useState } from 'react'
import { userData } from '@/constants/userData'

function UserList() {
    const [users, setUsers] = useState(userData)
    const addUser = (user) => {
        setUsers([...users, user])
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>{user.name}</div>
                    <button
                        onClick={() => {
                            addUser({ id: 11, name: 'qww' })
                        }}
                    >
                        추가
                    </button>
                </div>
            ))}
        </div>
    )
}

export default UserList
