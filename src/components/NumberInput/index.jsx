import React, { useState } from 'react';

const NumberInput = () => {

    const [pattern, setPattern] = useState('+7(###)###-##-##') 
    const [number, setNumber] = useState('');
    const changeInput = (e) => {
        const val = e.target.value.replace(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, '');
        setNumber(val)
        console.log(val, number)
    }



    const sendNumber = () => console.log(number)
    const downEnter = (e) => {
        if (e.key === 'Enter') sendNumber()
    }

    return (
        <div>
            <input
                type="text"
                value={number}
                onChange={changeInput}
                onKeyDown={downEnter}
                placeholder="Введите номер телефона"
            />
            <button
                onClick={sendNumber}
            >Отправить</button>
        </div>
    )
}
export default NumberInput;