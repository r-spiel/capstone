import React from 'react';
import moment from 'moment'



const Event = ({singleEvent, plantId, deleteEventCallback}) => {
  const deleteEventHandler = () => {
    deleteEventCallback(plantId, singleEvent.id)
  }

  return (
    <div className="event-card card m-1" key={singleEvent.id}>
      <div className="card-body">
        <span>
          <p className="title-inline"><span className="bold">Event title:</span> {singleEvent.title}</p>
          <button type="button" className="btn bg-white text-danger float-right" onClick={ deleteEventHandler } >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </span>


        <p className="pt-3"><span className="bold">Start Date/Time:</span> {moment(singleEvent.startTime).format('MMMM Do YYYY, h:mm a')}</p>
        <p><span className="bold">End Date/Time:</span> {moment(singleEvent.endTime).format('MMMM Do YYYY, h:mm a')}</p>
      </div>

    </div>
  )

}

export default Event