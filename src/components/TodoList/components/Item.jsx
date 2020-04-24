import React, { useState } from 'react'
import { MdDelete, MdSave, MdCheck } from 'react-icons/md'
import { todo, completed, dlt, save, inputEdit, todoText } from '../TodoList.module.css'

export const Item = ({ text, id, status, deleteTodoState, completeInState, saveChangeTodoState }) => {

    const [input, setInput] = useState(text);
    const changeTodo = (e) => setInput(e.target.value);

    const [edit, setEdit] = useState(false);
    const OpenEdit = () => {
        setEdit(true);
        setInput(text);
    }
    const CloseEdit = () => {
        setEdit(false);
    }

    const saveChangeTodo = () => {
        saveChangeTodoState(input, id);
    }

    const deleteTodo = () => {
        deleteTodoState(id);
    }
    const complete = () => {
        completeInState(id);
    }
    const keyEnter = (e) => {
        if (e.key === 'Enter') {
            saveChangeTodo();
            CloseEdit()
        }
    }

    return (
        <div className={status ? completed : todo}>
            <div className={save}
                onClick={complete}
            > {status && <MdCheck />} 
            </div>
            {edit ?
                <input type="text"
                    className={inputEdit}
                    value={input}
                    onChange={changeTodo}
                    onBlur={CloseEdit}
                    onKeyDown={keyEnter}
                    autoFocus />
                :
                <div
                    className={todoText}
                    onDoubleClick={OpenEdit}
                >{text}</div>}
            {edit && <div className={save}
                onClick={saveChangeTodo}
            > <MdSave /> </div>}
            {status && <div className={dlt} onClick={deleteTodo}> <MdDelete /> </div>}
        </div>
    )
}