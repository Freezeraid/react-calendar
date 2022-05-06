import React, {useContext} from 'react'
import { MonthContext } from '../Context/MonthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Month.css'

export default function Month() {
  const {getDisplayMonth, changeMonth} = useContext(MonthContext);

  const leftArrow = <FontAwesomeIcon onClick={() => changeMonth(-1)} icon={faAngleLeft} />
  const rightArrow = <FontAwesomeIcon  onClick={() => changeMonth(1)}icon={faAngleRight} />

  return (
    <section id="month-section">
        {leftArrow}
        <time dateTime={getDisplayMonth()}>{getDisplayMonth()}</time>
        {rightArrow}
    </section>
  )
}
