import React, { useState} from 'react';
import localStorage from 'local-storage';

const Plant = (props) => {

//   <Plant 
//   key={plant.id} 
//   id={plant.id} 
//   name={plant.name} 
//   scientificName={plant.scientificName} 
//   lifeSpan={plant.lifeSpan} 
//   harvest={plant.harvest} 
//   sunRequirement={plant.sunRequirement} 
// />

    // {
    //   "name": "Plant name",
    //   "scientificName": "Scientific Name",
    //   "notes": "Notes",
    //   "lifespan": "Lifespan in weeks",
    //   "harvest": "From seed to harvest time in weeks",
    //   "sunRequirement": "full sun/part sun etc."
    // }

  return (
    <div>
      <p>{props.name} ({props.scientificName}) - {props.notes}</p>
      <p>{props.sunRequirement}, Lifespan: {props.lifespan}, Weeks to harvest from planting: {props.harvest}</p>
    </div>
  )

}

export default Plant