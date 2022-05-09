import React, {createContext, useState} from "react"
import { useCookies } from "react-cookie";
import COOKIESNAMES from "../Constant/CookiesNames";

export const CalendarDataContext = createContext();

export const CalendarDataContextProvider = ({children}) => {
    const pastOneMonthDate = new Date(new Date().setDate(new Date().getDate() + 31));
    const [ cookieCalendar, setCookieCalendar ] = useCookies([COOKIESNAMES.calendar]);
    const [ calendarData, setCalendarData ] = useState(() => {
            if (cookieCalendar[COOKIESNAMES.calendar] === undefined) return {};
            else return cookieCalendar[COOKIESNAMES.calendar];
        }
    );

    const changeCalendarData = (_calendarData) => {
        setCookieCalendar(COOKIESNAMES.calendar, _calendarData, {expires : pastOneMonthDate});
        setCalendarData(_calendarData);
    }

    return (
        <CalendarDataContext.Provider value={{ calendarData, changeCalendarData }}>
            {children}
        </CalendarDataContext.Provider>
    )
};