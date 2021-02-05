import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Plant from './Plant'
import localStorage from 'local-storage';

const Plants = ({plants}) => {
  

  const plantComponents = plants.map((plant) => {
    return (
      <Plant 
        key={plant.id} 
        id={plant.id} 
        name={plant.name} 
        scientificName={plant.scientificName} 
        lifespan={plant.lifespan} 
        harvest={plant.harvest} 
        sunRequirement={plant.sunRequirement} 
      />
    )
  })

  return (
    <div>
      {plantComponents}
    </div>
  )
}

Plants.propTypes = {

};

export default Plants;