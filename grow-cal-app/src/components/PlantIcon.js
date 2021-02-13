import React, { useEffect, useState } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import UpdatePlantForm from './UpdatePlantForm'
import Events from './Events'
import NewEventForm from './NewEventForm';

const PlantIcon = ({id, name, imageUrl,  selectedPlantId, selectAPlant, unselectAPlant }) => {
  // const [isSelected, setIsSelected] = useState(false)

  // const selectCard = () => {
  //   setIsSelected(!isSelected)
  // }

  // useEffect(() => {
  //   if (isSelected) {
  //     addPlantToSelected(plantObj)
  //   } else {
  //     // delete from selected list callback
  //     unselectFromList(plantObj.id)
  //   }
  // }, [isSelected]);

  const showSelected = () => {
    if (id === selectedPlantId) {
      unselectAPlant(id)
    } else {
      selectAPlant(id)
    }
  }

  return (
    <div className={ id === selectedPlantId ? "d-block card plant-icon-card m-1 border border-danger" : "d-block card plant-icon-card m-1" } onClick={showSelected}>
      {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
      <img src={imageUrl} alt={name} className="card-img-top"/>

      <div className="card-body">
      
          <h6 className="plant-icon-title">{name}</h6>

      </div>
    </div>
  )

}

export default PlantIcon