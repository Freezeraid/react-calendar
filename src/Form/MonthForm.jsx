import React, { useContext, useRef, useEffect } from 'react'
import { MonthContext } from '../Context/MonthContext'
import MONTHS from "../Constant/Months";
import './Form.css'
import './MonthForm.css'

export default function MonthForm() {
    const { setMonthAndYear, month } = useContext(MonthContext);

    const monthInput = useRef(null);
    const yearInput = useRef(null);

    const changeYearAndMonthtype = () => {
        setMonthAndYear(monthInput.current.value, yearInput.current.value);
    }

    useEffect(() => {
        monthInput.current.value = month.month + 1;
        yearInput.current.value = month.year;
    }, [month])

    return (
        <div id="form-container">
            <div>
                <h3 id="month-year">{MONTHS[month.month]} {month.year}</h3>
                <div id="change-month-form">
                    <input ref={monthInput} onChange={changeYearAndMonthtype} type="number" name="month-input" id="month-input" max={12} min={1}/>
                    /
                    <input ref={yearInput} onChange={changeYearAndMonthtype} type="number" name="year-input" id="year-input"/>
                </div>
            </div>
        </div>
    )
}
