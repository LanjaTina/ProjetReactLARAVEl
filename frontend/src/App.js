import './App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        ollDay: true,
        start: new Date(2022,10,0),
        end : new Date(2022,10,0)
    },
    {
        title: "VAcation",
        ollDay: true,
        start: new Date(2022,10,7),
        end : new Date(2022,10,10)
    },
    {
        title: "Conference",
        ollDay: true,
        start: new Date(2022,10,20),
        end : new Date(2022,10,23)
    }

]



function App() {
    const [newEvent, setNewEvent] = useState({title: "", start:"", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvents() {
        setAllEvents([...allEvents. newEvent])
    }

    return(
        <div className='App'>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder='Add Title' style={{width: "20%", marginRight: "10px"}}
                    value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
            <DatePicker placeholderText='Start Date' style={{marginRight: "10px"}}
            selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
            <DatePicker placeholderText='End Date' 
            selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
            <button style={{margintop: "10px"}} onClick={handleAddEvents}>confirmer</button>
            </div>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            style={{height: 500, margin: "50px"}} />
        </div>
    )
}


export default App; 