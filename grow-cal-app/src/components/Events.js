import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event'


const Events = ({plantId, eventList, deleteEventCallback}) => {

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