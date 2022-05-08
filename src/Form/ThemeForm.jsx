import React, { useContext } from 'react'
import { CirclePicker } from 'react-color';
import { ThemeContext } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './Form.css'

export default function ThemeForm() {
    const { isDark, setIsDark, themeColor, setThemeColor } = useContext(ThemeContext);

    const buttonTheme = isDark ? <FontAwesomeIcon onClick={() => setIsDark(prev => !prev)} icon={faSun} />
    : <FontAwesomeIcon onClick={() => setIsDark(prev => !prev)} icon={faMoon} /> ;

    const handleChangeComplete = (color) => {
        setThemeColor(color.hex);
    }

    return (
        <div id="form-container">
            <div>
                <h3>Changer la couleur principale :</h3>
                <CirclePicker
                    color={themeColor}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
            <div>
                <h3>Changer le theme :</h3>
                {buttonTheme}
            </div>
        </div>
    )
}
