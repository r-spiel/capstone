import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Event from './Event'
import localStorage from 'local-storage';
import moment from 'moment'

const Events = ({eventList}) => {

  const eventMap = eventList.map((singleEvent) => {


    return (
      <div className="card" key={singleEvent.id}>
        {console.log(singleEvent.startTime)}
        {console.log(typeof singleEvent.startTime)}
        {console.log(typeof singleEvent.startTime)}
        <p>Event title: {singleEvent.title}</p>
        <p>Start Date/Time: {moment(singleEvent.startTime).format('MMMM Do YYYY, h:mm a')}</p>
        {console.log(moment(singleEvent.startTime).format('MMMM Do YYYY, h:mm:ss a'))}
        <p>End Date/Time: {moment(singleEvent.endTime).format('MMMM Do YYYY, h:mm a')}</p>
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