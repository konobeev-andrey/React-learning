import React, { useState } from 'react'
import {todo__adder} from '../NewTodoList.module.css'



export const Adder = ({addTodoState}) => {
    const [input, setInput] = useState('');
    const onInputEvent = event => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        if (input) {
            setInput('');
            addTodoState(input);
        }
    }
    const downEnter = (event) => {
        if(event.keyCode === 13) addTodo()
    }

    return (
        <div className={todo__adder}>
            <input type="text" value={input} onKeyDown={downEnter} onChange={onInputEvent} />
            <button onClick={addTodo}>
                Добавить
    </button>
        </div>
    )
}