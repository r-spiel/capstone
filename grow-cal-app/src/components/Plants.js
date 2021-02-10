import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Plant from './Plant'
import PlantDetails from './PlantDetails'
import localStorage from 'local-storage';

const Plants = ({plants, deletePlant, url, refreshPage, editPlantCallback, newEventCallback }) => {
  
  // pass in the list of plants to plant to check for edit??? That the edited name is not the same as any currently there already?  

  const plantComponents = plants.map((plant) => {
    return (

      <Plant 
        plantObj={plant} 
        key={plant.id} 

        newEventCallback={newEventCallback}
        editPlantCallback={editPlantCallback}
        refreshPage={refreshPage}
        deletePlant={deletePlant}
        plantList={plants}
        url={url}
      />
    )
  })

  return (
    <span className="row m-5">
      {plantComponents}
    </span>
  )
}

Plants.propTypes = {

};

export default Plants;