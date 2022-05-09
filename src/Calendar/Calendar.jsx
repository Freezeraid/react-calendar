import React, {useContext} from 'react'
import DAYS from "../Constant/Days";
import MONTHS from '../Constant/Months';
import { MonthContext } from '../Context/MonthContext';
import { ModalContext } from '../Context/ModalContext';
import { ThemeContext } from '../Context/ThemeContext';
import { CalendarDataContext } from '../Context/CalendarDataContext';
import EventForm from '../Form/EventForm';
import './Calendar.css'

export default function Calendar() {
  const {calendarData} = useContext(CalendarDataContext);
  const {month} = useContext(MonthContext);
  const {setDisplay, setTitle, setForm} = useContext(ModalContext);
  const {themeColor} = useContext(ThemeContext);

  const displayDaysNames = () => {
    return (
      <thead>
        <tr>
          { DAYS.map((day, i) => <th key={i} style={{ color: themeColor}}>{day.substring(0, 3)}</th>) }
        </tr>
      </thead>
    )
  }

  const displayDaysNumbers = () => {
    const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
    const maxWeeksInMonth = 6;
    const daysInWeek = DAYS.length;

    let days = [];
    let firstDayMonth = new Date(month.year, month.month, 1).getDay();
    let counter = firstDayMonth === 0 ? - (daysInWeek - 1) : 1;
    for (let i = 0; i < maxWeeksInMonth; i++) {
      days[i] = [];
      for (let j = 0; j < daysInWeek; j++) {
        days[i][j] = ((counter - firstDayMonth) + daysInMonth) % (daysInMonth) + 1;
        counter++;
      }
    }

    const modalDay = (_day) => {
      setDisplay(prev => !prev);
      setTitle(`Manage events of ${MONTHS[month.month - 1]} ${_day}, ${month.year}:`);
      setForm(<EventForm
        day={_day}
        month={month.month}
        year={month.year}
      />);
    }

    let isMonth = false;
    
    return (
      <tbody>
        {
          days.map((ele, i) => {
            return (
              <tr key={i}>
                {
                  ele.map((day, ind) => { 
                    let nameClass = "day-calendar";
                    if (day === 1) isMonth = !isMonth;
                    if (!isMonth) nameClass += " not-month"
                    return <td className={nameClass} key={ind}><span className={`day-span ${isMonth ? 'month-span' : 'not-month-span'}`}
                      style={{border: (calendarData[`${day}${month.month}${month.year}`] !== undefined) && 
                              isMonth ?  
                              calendarData[`${day}${month.month}${month.year}`].length !== 0 ? `2px solid ${themeColor}` : '0' : '0'
                      }}
                      onMouseEnter={(e) => { if (!e.target.className.includes('not-month-span')) e.target.style.backgroundColor = themeColor; }}
                      onMouseLeave={(e) => { if (!e.target.className.includes('not-month-span')) e.target.style.backgroundColor = 'transparent'; }}
                      onClick={(e) => { if (!e.target.className.includes('not-month-span')) modalDay(day); }}
                    >{day}</span></td> 
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    );
  }

  return (
    <table id="calendar-section">
      {displayDaysNames()}
      {displayDaysNumbers()}
    </table>
  )
}
