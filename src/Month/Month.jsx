import React, {useContext} from 'react'
import { MonthContext } from '../Context/MonthContext'
import { ModalContext } from '../Context/ModalContext'
import MonthForm from '../Form/MonthForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Month.css'

export default function Month() {
  const {getDisplayMonth, changeMonth} = useContext(MonthContext);
  const { setDisplay, setTitle, setForm } = useContext(ModalContext);

  const leftArrow = <FontAwesomeIcon onClick={() => changeMonth(-1)} icon={faAngleLeft} />
  const rightArrow = <FontAwesomeIcon  onClick={() => changeMonth(1)}icon={faAngleRight} />

  const changeDate = () => {
    setDisplay(prev => !prev);
    setTitle("Changer le mois et l'année:");
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
