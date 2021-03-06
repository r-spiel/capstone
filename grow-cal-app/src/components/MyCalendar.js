import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
// import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
// import timeGridPlugin from '@fullcalendar/timegrid';


const MyCalendar = ({eventList}) => {

  return (
    <div id='calendar' className="calendar shadow-lg">
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
        weekends={ true }
        events={ eventList }
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