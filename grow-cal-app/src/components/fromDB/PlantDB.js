import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AddNewPlantFromDBForm from './AddNewPlantFromDBForm'
import localStorage from 'local-storage';

const PlantDB = ({plantObj, addPlantCallback}) => {
  const [showAddPlantDetails, setShowAddPlantDetails] = useState(false)
  // pass in the list of plantObjs to plantObj to check for edit??? That the edited name is not the same as any currently there already?  

  const hideAddPlantForm = () => {
    setShowAddPlantDetails(false)
  }

  return (
    <div className="card" key={plantObj.id}>

    <div className="card-body">
      <span>
      <img src={plantObj.imageUrl} alt={plantObj.name} className="plant-details-icon"/>

      <h4 className="title-inline ml-3">{plantObj.name}</h4>
      <button className="float-right" type="button" onClick={ () => setShowAddPlantDetails(!showAddPlantDetails) }>
          add to my plant list
      </button>
        
      </span>
      { plantObj.scientificName ? <p><span className="bold">Scientific Name:</span> {plantObj.scientificName}</p>: null }
      {/* <p>Scientific Name: {plantObj.scientificName}</p> */}
      { plantObj.notes ? <p><span className="bold">Notes:</span> {plantObj.notes}</p> : null }
      { plantObj.sunRequirement ? <p><span className="bold">Sun Requirement:</span> {plantObj.sunRequirement}</p> : null }
      { plantObj.lifespan ? <p><span className="bold">Lifespan:</span>Lifespan: {plantObj.lifespan} weeks </p> : null }
      { plantObj.harvest ? <p><span className="bold">Median Harvest Time:</span> {plantObj.harvest} weeks after planting </p> : null }


        { showAddPlantDetails ? 
          <AddNewPlantFromDBForm 
            plantObj={plantObj} 
            addPlantCallback={addPlantCallback} 
            hidePlantForm={hideAddPlantForm}
          /> 
          : null 
        } 
      </div>
    </div>
  )
}

PlantDB.propTypes = {

};

export default PlantDB;