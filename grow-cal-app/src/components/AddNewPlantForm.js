import React, { useState} from 'react';
import localStorage from 'local-storage';

const FORM_FIELDS = {
  "name": "Plant name (required)",
  "scientificName": "Scientific Name",
  "notes": "Notes",
  "lifespan": "Lifespan in weeks",
  "harvest": "Time from seed to harvest in weeks",
  "sunRequirement": "full sun/part sun etc.",
  "imageUrl": "optional image URL"
}

const AddNewPlantForm = (props) => {
  const [formFields, setFormFields] = useState({
    "name": null,
    "scientificName": null,
    "notes": null,
    "lifespan": null,
    "harvest": null,
    "sunRequirement": null,
    "imageUrl": null,
  })
  const [errorMessage, seterrorMessage] = useState("")
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
      <p>NEW PLANT FORM</p>
    </div>
  )

}

export default AddNewPlantForm