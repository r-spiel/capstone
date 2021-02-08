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
      <span>
        {plantObj.name} ({plantObj.scientificName}) 
        <button type="button" onClick={ () => setShowAddPlantDetails(!showAddPlantDetails) }>
          add to my garden
        </button>
        <p>Notes: {plantObj.notes}</p>
        <p>{plantObj.sunRequirement}, Lifespan: {plantObj.lifespan}, Weeks to harvest from planting: {plantObj.harvest}</p>
        { showAddPlantDetails ? 
          <AddNewPlantFromDBForm 
            plantObj={plantObj} 
            addPlantCallback={addPlantCallback} 
            hidePlantForm={hideAddPlantForm}
          /> 
          : null 
        }
      </span>


      
    </div>
  )
}

PlantDB.propTypes = {

};

export default PlantDB;