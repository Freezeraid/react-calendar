import React, {useContext} from 'react'
import { MonthContext } from '../Context/MonthContext'
import { ModalContext } from '../Context/ModalContext'
import { ThemeContext } from '../Context/ThemeContext'
import MonthForm from '../Form/MonthForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Month.css'

export default function Month() {
  const { getDisplayMonth, changeMonth } = useContext(MonthContext);
  const { setDisplay, setTitle, setForm } = useContext(ModalContext);
  const { themeColor } = useContext(ThemeContext);

  const leftArrow = <FontAwesomeIcon 
                      style={{ color: themeColor}}
                      onClick={() => changeMonth(-1)} icon={faAngleLeft} />
  const rightArrow = <FontAwesomeIcon 
                      style={{ color: themeColor}} 
                      onClick={() => changeMonth(1)}icon={faAngleRight} />

  const changeDate = () => {
    setDisplay(prev => !prev);
    setTitle("Change Month and Year:");
    setForm(<MonthForm/>);
  }

  return (
    <section id="month-section">
        {leftArrow}
        <time onClick={changeDate} dateTime={getDisplayMonth()}>{getDisplayMonth()}</time>
        {rightArrow}
    </section>
  )
}
