import React, { useReducer, useState } from 'react'
import Student from '../../Student'

const heavyWork = () => {
    console.log('힘든일')
    return ['kang', 'lee']
}

function Students() {
    const [names, setNames] = useState(() => heavyWork())
    const [input, setInput] = useState('')
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onClick = () => {
        setNames([...names, input])
    }
    return (
        <div>
            <input onChange={onChange} value={input} />
            <button onClick={onClick}>버튼</button>
            {names.map((name, i) => (
                <div key={i}>{name}</div>
            ))}
        </div>
    )
}

export default Students
