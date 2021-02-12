import React, { useState} from 'react';
import PropTypes from 'prop-types';
import PlantIcon from './PlantIcon'
import PlantDetails from './PlantDetails'
import localStorage from 'local-storage';

const Plants = ({plants, selectAPlant, unselectAPlant, selectedPlantId}) => {


  const plantIconComponents = plants.map((plant) => {
    return (
      <PlantIcon
        key={plant.id} 
        id={plant.id}
        name={plant.name}
        imageUrl={plant.imageUrl}

        selectedPlantId={selectedPlantId}
        selectAPlant={selectAPlant}
        unselectAPlant={unselectAPlant}
      />
    )
  })



  return (
    <div>
      {/* <button onClick={clearSelectedPlantList} >Clear Selected Plants</button> */}
      <p>Select a plant to view it's details and see more options:</p>
      <span className="row m-5">
        {plantIconComponents}
      </span>
      {/* { selectedPlants.length > 0 ? plantDetailsComponents : null } */}
    </div>
  )
}

Plants.propTypes = {

};

export default Plants;