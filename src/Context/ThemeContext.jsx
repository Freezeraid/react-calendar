import React, {createContext, useState} from "react"
import COOKIESNAMES from '../Constant/CookiesNames'
import { useCookies } from "react-cookie";
import COLORS from '../Constant/Colors'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const pastOneMonthDate = new Date(new Date().setDate(new Date().getDate() + 31));
    const [ cookieTheme, setCookieTheme ] = useCookies(COOKIESNAMES.theme);
    const [ cookieColor, setCookieColor ] = useCookies(COOKIESNAMES.color);

    const [ isDark, setIsDark ] = useState(() => {
        if (cookieTheme[COOKIESNAMES.theme] === undefined) return false;
        else return cookieTheme[COOKIESNAMES.theme];
    });
    const [ themeColor, setThemeColor ] = useState(() => {
        if (cookieColor[COOKIESNAMES.color] === undefined) return COLORS.defaultTheme;
        else return cookieColor[COOKIESNAMES.color];
    });

    const switchTheme = () => {
        setCookieTheme(COOKIESNAMES.theme, !isDark, {expires : pastOneMonthDate});
        setIsDark(prev => !prev);
    }

    const changeThemeColor = (_hexColor) => {
        setCookieColor(COOKIESNAMES.color, _hexColor, {expires : pastOneMonthDate});
        setThemeColor(_hexColor);
    }

    return (
        <ThemeContext.Provider value={{ isDark, switchTheme, themeColor, changeThemeColor }}>
            {children}
        </ThemeContext.Provider>
    )
};