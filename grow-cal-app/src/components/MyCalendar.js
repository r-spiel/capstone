import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import localStorage from 'local-storage';

const localizer = momentLocalizer(moment)

const MyCalendar = ({eventList}) => {
  const myEventsList = []

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MyCalendar;

// SAMPLE EVENTS:

// {
//   id: 0,
//   title: "All Day Event very long title",
//   allDay: true,
//   start: new Date(2015, 3, 0),
//   end: new Date(2015, 3, 1)
// },
// {
//   id: 1,
//   title: "Long Event",
//   start: new Date(2015, 3, 7),
//   end: new Date(2015, 3, 10)
// },

// {
//   id: 2,
//   title: "DTS STARTS",
//   start: new Date(2016, 2, 13, 0, 0, 0),
//   end: new Date(2016, 2, 20, 0, 0, 0)
// },

// {
//   id: 3,
//   title: "DTS ENDS",
//   start: new Date(2016, 10, 6, 0, 0, 0),
//   end: new Date(2016, 10, 13, 0, 0, 0)
// }