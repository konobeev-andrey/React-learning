import React from 'react'
import {
    todo__root,
    todo__root_container,
    todo__items
} from './NewTodoList.module.css'
import { useState } from 'react'
import { Item } from './components/Item'
import { Adder } from './components/Adder'

const NewTodoList = () => {

    const [todos, setTodos] = useState([
        { text: 'Первая задача', id: 1 }
    ]);
    const addTodoState = (input) => {
            setTodos([...todos, { text: input, id: todos.length + 1 }])
    }

    const deleteTodo = (todoId) => {
        const newArr = todos.filter((item) => item.id !== todoId);
        setTodos(newArr)
    }

    const editTodo = (todoId, editText) => {
        const newArr = todos.map((item) => item.id === todoId ? {text: editText, id: item.id } : item) 
        // const newArr = todos.map((item) => {
        //     if (item.id === todoId) {
        //         return { text: editText, id: item.id }
        //     } else {
        //         return { text: item.text, id: item.id }
        //     }
        // });
        setTodos(newArr)
    }

    return (
        <div className={todo__root}>
            <div className={todo__root_container}>
            <Adder
                addTodoState={addTodoState}
            />  
                <ul className={todo__items}>
                    {todos.map(({ text, id }) => (
                        <Item
                            key={id}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            text={text}
                            id={id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NewTodoList