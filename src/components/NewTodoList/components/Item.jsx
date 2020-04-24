import React, { useState } from 'react'
import { MdDelete, MdSave } from 'react-icons/md'

export const Item = ({ deleteTodo, editTodo, text, id }) => {

    const [input, setInput] = useState(text);
    const onChangeEvent = e => setInput(e.target.value)

    const [edit, setEdit] = useState(false);
    const onEditEvent = () => setEdit(true);
    const onBlueEvent = () => {
        editTodo(id, input)
        setEdit(false)
    }
    
    const onDelete = () => {
        deleteTodo(id);
    }
    const downEnter = (event) => {
        if(event.keyCode === 13) onBlueEvent()
    }

    return (
        <li onDoubleClick={onEditEvent}>
            {edit
                ? <input
                    type="text"
                    value={input}
                    onBlur={onBlueEvent}
                    onChange={onChangeEvent}
                    onKeyDown={downEnter}
                    autoFocus
                />
                : <span>{text}</span>
            }
         {edit &&  <button onClick={onBlueEvent} type='save'><MdSave/></button>}
            <button onClick={onDelete} type='delete'><MdDelete /></button>
        </li>
    )
}