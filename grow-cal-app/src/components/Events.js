import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Plant from './Plant'
import localStorage from 'local-storage';

const Events = ({eventList}) => {

  const eventMap = eventList.map((singleEvent) => {
    return (
      <div className="card" key={singleEvent.id}>
        <p>Event title: {singleEvent.title}</p>
        <p>Start Date/Time: {singleEvent.startTime} End Date/Time: {singleEvent.endTime}</p>
      </div>
    )
  })

  return (
    <div>
      {eventMap}
    </div>
  )

}

export default Events;