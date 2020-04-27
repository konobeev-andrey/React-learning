import React from 'react'
import {
    date_picker,
    date_picker_date,
    btn,
    date_picker_week,
    date_picker_days,
    select_day,
    prev_days,
    button_days,
    popap_year,
    popap_wrapper,
    popap_year_years,
    popap_year_months,
    select_year_and_month,
    popap_wrapper_year,
    popap_wrapper_month,
    popap_month,
} from './DateAndrey.module.css'
import { useState } from 'react'

const DateAndrey = () => {

    const date = new Date();

    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    const currentWeekDay = new Date(year, month, 0).getDay();

    let daysInMonth = [];
    for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
        daysInMonth.push(i);
    }


    let PrevDaysInMonth = [];
    if (currentWeekDay === 0) {
        PrevDaysInMonth = [];
    } else {
        for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
            PrevDaysInMonth.push(i)
        }
    }
    const quantityDaysInLastWeek = new Date(year, month + 1, 0).getDate() + currentWeekDay;
    const ArrayMonth = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    const onPrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1)
        }
        else setMonth(month - 1);
    }
    const onNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1)
        }
        else setMonth(month + 1);
    }

    const [displyPopup, setDisplyPopup] = useState('');

    const years = []
    for (let i = new Date().getFullYear(); i >= 1970; i--) {
        years.push(i);
    }

    const onClickEvent = ({ target: { id } }) => {
        if (id) setDisplyPopup(id.slice(id.match('__')['index'] + 2));
    }

    const onBlurEvent = (e) => {
        if (e.target.tabIndex === 1) {
            setDisplyPopup('')
        }
    }


    return (
        <div className={date_picker}>
            <div
                tabIndex={1}
                className={date_picker_date}
                onClick={onClickEvent}
                onBlur={onBlurEvent}
            >
                <button
                    className={btn}
                    onClick={onPrevMonth}> &#60; </button>
                <div
                    id={'choise__year'}
                    className={btn}>{year}</div>
                <div
                    id={'choise__month'}
                    className={btn}>{ArrayMonth[month]}</div>
                <button
                    className={btn}
                    onClick={onNextMonth}>&#62; </button>
                {displyPopup === 'year' && (
                    <div className={`${popap_wrapper} ${popap_wrapper_year}`}>
                        <div className={popap_year}>
                            {years.map((y, idx) => {
                                const click = () => {
                                    setYear(y);
                                    setDisplyPopup('');
                                }
                                return <div
                                    id={y === year ? select_year_and_month : ''}
                                    className={popap_year_years}
                                    onClick={click}
                                    key={idx}>{y}</div>
                            })}
                        </div>
                    </div>
                )}
                {displyPopup === 'month' && (
                    <div className={`${popap_wrapper} ${popap_wrapper_month}`}>
                        <div className={popap_month}>
                            {ArrayMonth.map((m, idx) => {
                                const click = () => {
                                    setMonth(idx);
                                    setDisplyPopup('');
                                }
                                return <div
                                    id={idx === month ? select_year_and_month : ''}
                                    className={popap_year_months}
                                    onClick={click}
                                    key={idx}>{m}</div>
                            })}
                        </div>
                    </div>
                )}
            </div>
            <div className={date_picker_week}>
                <span>Пн</span>
                <span>Вт</span>
                <span>Ср</span>
                <span>Чт</span>
                <span>Пт</span>
                <span>Сб</span>
                <span>Вс</span>
            </div>
            <div className={date_picker_days}>
                {PrevDaysInMonth.slice(-currentWeekDay).map((d, idx) => {
                    const onDayInPrevMonth = () => {
                        onPrevMonth();
                        setDay(d);
                    }
                    return (
                        <button
                            key={idx}
                            className={prev_days}
                            onClick={onDayInPrevMonth}>{d}</button>
                    )
                })}
                {
                    daysInMonth.map((d, idx) => {
                        const picked = () => setDay(d);
                        return (
                            <button
                                key={idx}
                                className={button_days}
                                id={d === day ? select_day : ''}
                                onClick={picked}>{d}</button>
                        )
                    })
                }

                {
                    daysInMonth.slice(0, 42 - quantityDaysInLastWeek).map((d, idx) => {
                        const onDayInNextMonth = () => {
                            onNextMonth();
                            setDay(d);
                        }
                        return (
                            <button
                                key={idx}
                                className={prev_days}
                                onClick={onDayInNextMonth}>{d}</button>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default DateAndrey;