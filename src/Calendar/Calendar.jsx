import React, {useContext} from 'react'
import { MonthContext } from '../Context/MonthContext';
import DAYS from "../Constant/Days";
import './Calendar.css'

export default function Calendar() {
  const {month} = useContext(MonthContext);

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
    
    return (
      <tbody>
        {
          days.map((ele, i) => {
            return (
              <tr key={i}>
                {
                  ele.map((day, ind) => <td key={ind}>{day}</td>)
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
