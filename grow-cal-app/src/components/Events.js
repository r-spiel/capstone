import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Plant from './Plant'
import localStorage from 'local-storage';

const Events = ({eventList}) => {

  // An event looks like this: 
  // {
  //   "title": "Tomatoes - plant",
  //   "startTime": "2021-2-5:time",
  //   "endTime": "2021-2-5:time",
  //   "notes": "Some notes about this event"
  // }

  const eventMap = eventList.map((singleEvent) => {
    return (
      <div className="card" key={singleEvent.id}>
        <p>Event title: {singleEvent.title}</p>
        <p>Start Date/Time: {singleEvent.startTime} End Date/Time: {singleEvent.endTime}</p>
        <p>Details: {singleEvent.notes}</p>
      </div>
    )
  })

  return (
    <div>
      <p>Events go here</p>
      {eventMap}
    </div>
  )

}

export default Events;