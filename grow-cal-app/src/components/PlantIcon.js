import React, { useEffect, useState } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import UpdatePlantForm from './UpdatePlantForm'
import Events from './Events'
import NewEventForm from './NewEventForm';

const PlantIcon = ({plantObj, addPlantToSelected, unselectFromList, areSelectionsCleared}) => {
  const [isSelected, setIsSelected] = useState(false)

  const selectCard = () => {
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    if (isSelected) {
      addPlantToSelected(plantObj)
    } else {
      // delete from selected list callback
      unselectFromList(plantObj.id)
    }
  }, [isSelected]);

  return (
    <div className={ isSelected ? "card plant-icon-card m-1 border border-danger" : "card plant-icon-card m-1" } onClick={selectCard}>
      {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
      <img src={plantObj.imageUrl} alt={plantObj.name} className="card-img-top"/>

      <div className="card-body">
      
          <h6 className="plant-icon-title">{plantObj.name}</h6>

      </div>
    </div>
  )

}

export default PlantIcon