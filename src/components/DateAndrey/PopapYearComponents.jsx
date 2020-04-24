import React from 'react'
import {
    popap_year,
    popap_year_wrapper,
    hide,
    popap_year_months
} from './DateAndrey.module.css'
import { useState } from 'react'
const PopapYearComponents = ({ year, PopapYear, displyPopapYear, onSetYear }) => {
    document.body.addEventListener('click', (e) => {
        if (e.target.className !== popap_year_wrapper && e.target.className !== popap_year && e.target.className !== popap_year_year) {
            if (displyPopapYear) PopapYear.isClose();
        }
    })
    const years = []
    for (let i = new Date().getFullYear(); i >= 1970; i--) {
        years.push(i);
    }
    const onYear = (y) => {
        onSetYear(y);
        PopapYear.isClose();
    }

    return (
        <div className={popap_year_wrapper}>
            <div id="s" className={popap_year}>
                {years.map((y, idx) => {
                    if (y === year) {
                        return (
                            <div
                                id="scroll"
                                className={popap_year_months}
                                onClick={() => onYear(y)}
                                key={idx}>{y}</div>

                        )
                    }
                    else {
                        return (
                            <div
                                className={popap_year_months}
                                onClick={() => onYear(y)}
                                key={idx}>{y}</div>
                        )
                    }

                })
                }
            </div>
        </div>

    )
}
export default PopapYearComponents;