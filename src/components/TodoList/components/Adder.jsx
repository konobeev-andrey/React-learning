import React, { useState } from 'react';
import { add } from '../TodoList.module.css'

export const Adder = ({ addTodoState }) => {
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input) {
            addTodoState(input);
            setInput('');
        }
    }
    const keyEnter = (e) => {
        if (e.key === 'Enter') addTodo()
    }


    return (
        <div className={add}>
            <input type="text" placeholder="Задача..."
                value={input}
                onKeyDown={keyEnter}
                onChange={e => setInput(e.target.value)}
            />
            <button
                onClick={addTodo}
            >Добавить</button>
        </div>
    )
}