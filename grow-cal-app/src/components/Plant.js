import React, { useState } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import UpdatePlantForm from './UpdatePlantForm'
import Events from './Events'
import NewEventForm from './NewEventForm';

const Plant = (props) => {
  
  // const [showEditPlantForm, setShowEditPlantForm] = useState(false)
  // const [showNewEventForm, setShowNewEventForm] = useState(false)
  // const [eventList, setEventList] = useState(
  //   props.plantObj.eventList
  // )

  const plantObj = props.plantObj

  // const id = props.plantObj.id

  // const deletePlantOnClick = () => {
  //   props.deletePlant(id)
  // }

  return (
    <span className="card plant-icon-card m-1">
      <img src={plantObj.imageUrl} alt={plantObj.name} className="card-img-top"/>

      <div className="card-body">
      
          <h6 className="plant-icon-title">{plantObj.name}</h6>

      </div>
    </span>
  )

}

export default Plant