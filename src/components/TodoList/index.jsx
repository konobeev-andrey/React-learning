import React, { useState } from 'react';
import { Item } from './components/Item'
import { Adder } from './components/Adder'
import { list, todoList } from './TodoList.module.css'

const TodoList = () => {
    const localTodoList = JSON.parse(localStorage.getItem('TodoList'))
    const [idCount, setIdCount] = useState(+localStorage.getItem('idCount') + 1)

    const [todos, setTodos] = useState( 
        localTodoList ? localTodoList : []
     );

    const getId = () => {
        setIdCount(idCount + 1);
        localStorage.setItem('idCount', idCount);
        return idCount
    }

    const addTodoState = (input) => {
        const newArrey = [...todos, { text: input, id: getId(), status: false }];
        setTodos(newArrey);
        localStorage.setItem('TodoList', JSON.stringify(newArrey)); 
    }
    const deleteTodoState = (todoId) => {
        const newArrey = todos.filter(({ id }) => id !== todoId);
        setTodos(newArrey);
        localStorage.setItem('TodoList', JSON.stringify(newArrey)); 
    }
    const completeInState = (todoId) => {
        const newArrey = todos.map((item) => item.id === todoId ? { text: item.text, id: item.id, status: !item.status } : item);
        setTodos(newArrey);
        localStorage.setItem('TodoList', JSON.stringify(newArrey)); 
    }
    const saveChangeTodoState = (todoText, todoId) => {
        const newArrey = todos.map((item) => item.id === todoId ? { text: todoText, id: item.id, status: item.status } : item);
        setTodos(newArrey);
        localStorage.setItem('TodoList', JSON.stringify(newArrey)); 
    }
    return (
        <div className={todoList}>
            <Adder
                addTodoState={addTodoState}
            />
            <div className={list}
                id="list">
                {todos.map(({ text, id, status }) => (
                    <Item
                        text={text}
                        id={id}
                        status={status}
                        key={id}
                        completeInState={completeInState}
                        deleteTodoState={deleteTodoState}
                        saveChangeTodoState={saveChangeTodoState}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;