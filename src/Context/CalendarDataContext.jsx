import React, {createContext, useState} from "react"

export const CalendarDataContext = createContext();

export const CalendarDataContextProvider = ({children}) => {
    const [data, setData] = useState({});

    return (
        <CalendarDataContext.Provider value={{ data, setData }}>
            {children}
        </CalendarDataContext.Provider>
    )
};