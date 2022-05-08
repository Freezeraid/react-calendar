import React, {createContext, useState} from "react"
import COLORS from '../Constant/Colors'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [ isDark, setIsDark ] = useState(false);
    const [ themeColor, setThemeColor ] = useState(COLORS.defaultTheme);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, themeColor, setThemeColor }}>
            {children}
        </ThemeContext.Provider>
    )
};