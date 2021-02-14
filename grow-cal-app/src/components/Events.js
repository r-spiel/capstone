import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Event from './Event'
import localStorage from 'local-storage';
import moment from 'moment'

const Events = ({plantId, eventList, deleteEventCallback}) => {

  // const deleteEventHandler = (eventId) => {
  //   deleteEventCallback(plantId, eventId)
  // }

  const eventMap = eventList.map((singleEvent) => {
    return (
      <Event key={singleEvent.id} singleEvent={singleEvent} plantId={plantId} deleteEventCallback={deleteEventCallback} />
    )
  })

  return (
    <div className="row p-2 justify-content-center">
      {eventMap}
    </div>
  )

}

export default Events;