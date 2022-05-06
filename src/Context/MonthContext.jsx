import React, {createContext, useState} from "react"
import MONTHS from "../Constant/Months";

export const MonthContext = createContext();

export const MonthContextProvider = ({children}) => {
    const d = new Date();
    const [month, setMonth] = useState({month: d.getMonth(), year: d.getFullYear()});

    const getDisplayMonth = () => {
        return `${MONTHS[month.month]} ${month.year}`
    }

    const setMonthAndYear = (_monthIndex, _year) => {
        setMonth({month: _monthIndex, year: _year});
    }

    const changeMonth = (_step) => {
        let newMonth, newYear;
        if (month.month + _step >= 12) {
            newMonth = 0;
            newYear = month.year+1;
        } 
        else if (month.month + _step < 0) {
            newMonth = 11;
            newYear = month.year - 1;
        } 
        else {
            newMonth = month.month + _step;
            newYear = month.year;
        } 

        setMonth({month: newMonth, year: newYear});
    }

    return (
        <MonthContext.Provider value={{ month, getDisplayMonth, changeMonth }}>
            {children}
        </MonthContext.Provider>
    )
};