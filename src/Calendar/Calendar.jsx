import React, {useContext} from 'react'
import { MonthContext } from '../Context/MonthContext';
import DAYS from "../Constant/Days";
import COLORS from "../Constant/Colors";
import { ThemeContext } from '../Context/ThemeContext';
import './Calendar.css'

export default function Calendar() {
  const {month} = useContext(MonthContext);
  const {isDark, themeColor} = useContext(ThemeContext);

  const displayDaysNames = () => {
    return (
      <thead>
        <tr>
          { DAYS.map((day, i) => <th key={i}>{day.substring(0, 3)}</th>) }
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
                      style={{ borderColor: isDark ? 
                              COLORS.darkgrey :
                              COLORS.lightgrey
                      }}
                      onMouseEnter={(e) => { if (!e.target.className.includes('not-month-span')) e.target.style.backgroundColor = themeColor; }}
                      onMouseLeave={(e) => { if (!e.target.className.includes('not-month-span')) e.target.style.backgroundColor = 'transparent'; }}
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
