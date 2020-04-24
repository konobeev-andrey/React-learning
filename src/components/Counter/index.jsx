import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { counter, button, value } from './Counter.module.css'


const Counter = ({ initialCount, maxValue, minValue, type, onChange}) => {

    const [count, setCount] = useState(minValue || initialCount || 0);
    const onPlus = () => {
        setCount(count + 1);
        if (onChange) {
            onChange(count, type)
        }
    };
    const onMinus = () => {
        setCount(count - 1);
        if (onChange) {
            onChange(count, type)
        }
    }

    const onChangeEvent = (event) => {
        let value = event.target.value;
        if (value) {
            setCount(parseInt(value));
        } else {
            setCount(0)
        }
        if (onChange) {
            onChange(count, type)
        }
    }

    return (
        <div className={counter}>
            <button
                className={button}
                onClick={onMinus}
                disabled={minValue === count || count === 0}><FaMinus /></button>
            <input className={value} value={count} onChange={onChangeEvent} />
            <button
                className={button}
                onClick={onPlus}
                disabled={count === maxValue}><FaPlus /></button>
        </div>
    );
};

export default Counter;