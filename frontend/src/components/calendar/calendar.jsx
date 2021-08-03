import React, {useState} from "react";
import Calendar from "react-calendar";
import '../../styles/profile.css';

const ReactCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='calendar-container'>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
      );
}

export default ReactCalendar;