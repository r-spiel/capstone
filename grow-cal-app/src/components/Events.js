import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Event from './Event'
import localStorage from 'local-storage';

const Events = ({eventList}) => {

  const eventMap = eventList.map((singleEvent) => {


    return (
      <div>
        <Event singleEvent={singleEvent} />
      </div>
      // <div className="card" key={singleEvent.id}>
      //   {/* {console.log(singleEvent.startTime)}
      //   {console.log(typeof singleEvent.startTime)}
      //   {console.log(typeof singleEvent.startTime)} */}
      //   <p>Event title: {singleEvent.title}</p>
      //   <p>Start Date/Time: {dateStartReadable}</p>
      //   <p>End Date/Time: {singleEvent.endTime}</p>
      // </div>
    )
  })

  return (
    <div>
      {eventMap}
    </div>
  )

}

export default Events;