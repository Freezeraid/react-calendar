import React, { useContext, useRef } from 'react'
import { CalendarDataContext } from '../Context/CalendarDataContext';
import { ThemeContext } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import COLORS from '../Constant/Colors';
import './Form.css'
import './EventForm.css'

export default function EventForm({day, month, year}) {
    const dayIndex = `${day}${month}${year}`;

    const { themeColor } = useContext(ThemeContext);
    const { data, setData } = useContext(CalendarDataContext);

    const eventTitle = useRef(null);
    const eventHour = useRef(null);

    const deleteEvent = (_index) => {
        let dayData = data[dayIndex];
        let newData = {...data};
        let newDayData = dayData.filter((_, index) => {
            return index !== _index
        });
        newData[dayIndex] = newDayData;
        setData(newData);
    }

    const displayCalendarData = () => {
        let dayData = data[dayIndex]
        if (dayData === undefined) return;
        return dayData.map((element, index) => {
            return (
                <div className='day-event' key={index}>
                    <div>
                        <FontAwesomeIcon onClick={() => deleteEvent(index)} icon={faTrashCan}/>
                        <h4>{element.title}</h4>
                    </div>
                    <span className='hour-event' style={{ color: COLORS.grey }}>{element.hour}</span>
                </div>
            )
        });
    }

    const sendNewEvent = (e) => {
        e.preventDefault();
        if (eventTitle.current.value === "" || eventHour.current.value === "") return;
        let newEvent = {title: eventTitle.current.value, hour: eventHour.current.value};
        let newData = {...data};
        if (newData[dayIndex] === undefined) newData[dayIndex] = [];
        newData[dayIndex].push(newEvent);
        setData(newData);
    }

    return (
        <div id="form-container" className='event-form-container'>
            <div id="event-container">
                {displayCalendarData()}
            </div>
            <div>
                <form id="add-event-form" onSubmit={sendNewEvent}>
                    <input type="text" ref={eventTitle} name="event-title" id="event-title" maxLength={40}/>
                    <input type="time" ref={eventHour} name="event-hour" id="event-hour" />
                    <input type="submit" value="Add" 
                    style={{ backgroundColor:themeColor }}/>
                </form>
            </div>
        </div>
    )
}
