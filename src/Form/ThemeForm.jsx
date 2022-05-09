import React, { useContext } from 'react'
import { CirclePicker } from 'react-color';
import { ThemeContext } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './Form.css'

export default function ThemeForm() {
    const { isDark, switchTheme, themeColor, changeThemeColor } = useContext(ThemeContext);

    const buttonTheme = isDark ? <FontAwesomeIcon onClick={() => switchTheme()} icon={faSun} />
    : <FontAwesomeIcon onClick={() => switchTheme()} icon={faMoon} /> ;

    const handleChangeComplete = (color) => {
        changeThemeColor(color.hex);
    }

    return (
        <div id="form-container">
            <div>
                <h3>Change main color:</h3>
                <CirclePicker
                    color={themeColor}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
            <div>
                <h3>Switch Light/Dark Theme:</h3>
                {buttonTheme}
            </div>
        </div>
    )
}
