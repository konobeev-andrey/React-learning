import React from 'react'
import {
    date_picker,
    date_picker__weeks,
    date_picker__date,
    date_picker__days,
    select__day,
} from './DatePicker.module.css'
import { useState } from 'react';

const DatePicker = ({onChage}) => {

    const date = new Date();

    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [year, setYear] = useState(date.getFullYear());

    //variables
    const currentWeekDay = new Date(year, month - 1, 0).getDay();

    let PrevDaysInMonth = [];
    if(currentWeekDay === 0){
        PrevDaysInMonth = []
    } else{
        for (let i = 1; i <= new Date(year, month - 1, 0).getDate(); i++) {
            PrevDaysInMonth.push(i)
        }
    }

    let daysInMonth = [];
    for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
        daysInMonth.push(i);
    }

    //methods
    const onNextMonth = () => {
        if (month > 11) {
            setYear(year + 1);
            setMonth(1);
        } else {
            setMonth(month + 1)
        }
    };

    const onPrevMonth = () => {
        if (month < 2) {
            setYear(year - 1);
            setMonth(12);
        } else {
            setMonth(month - 1)
        }
    };

    const PickedDate = () =>{
        if(onChage){
            onChage(`${year}/${month}/${day}`);
        }
    }

    return (
        <div className={date_picker} onClick={PickedDate}>
            <div className={date_picker__date}>
                <button onClick={onPrevMonth}>🡄</button>
                <span>{year} г</span>
                <span>{month}</span>
                <button onClick={onNextMonth}>🡆</button>
            </div>
            <div className={date_picker__weeks}>
                <span>Пн</span>
                <span>Вт</span>
                <span>Ср</span>
                <span>Чт</span>
                <span>Пт</span>
                <span>Сб</span>
                <span>Вс</span>
            </div>
            <div className={date_picker__days}>
                {PrevDaysInMonth.slice(-currentWeekDay).map((i, idx) => {
                    return(
                        <button key={idx} disabled="disabled">
                            {i}
                        </button>
                    )
                })}
                {daysInMonth.map((d, idx) => {
                    const Picked = () =>  setDay(d);
                    return (
                        <button
                            key={idx}
                            className={d === day ? select__day : ''}
                            onClick={Picked}>{d}</button>
                    )
                })}
            </div>
        </div>
    )
};

export default DatePicker;