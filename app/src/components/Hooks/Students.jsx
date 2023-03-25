import React, { useState } from 'react'

function Students() {
    const [names, setNames] = useState([])
    const [newName, setNewName] = useState('')
    const onChange = (e) => {
        setNewName(e.target.value)
    }
    const onClick = (e) => {
        setNames([...names, newName])
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }
    return (
        <div>
            <h1>출석부</h1>
            <input value={newName} onChange={onChange} onKeyDown={onKeyPress} />
            <button onClick={onClick}>버튼</button>
            {names.map((name) => (
                <div>{name}</div>
            ))}
        </div>
    )
}

export default Students
