import React, { useState} from 'react';
import localStorage from 'local-storage';

const FORM_FIELDS = [
  {
    "key": "name",
    "label": "Name: ",
    "placeholder": "plant name (required)"
  },
  {
    "key": "scientificName",
    "label": "Scientific Name: ",
    "placeholder": "scientific name"
  },
  {
    "key": "notes",
    "label": "Notes: ",
    "placeholder": "notes about growing this plant"
  },
  {
    "key": "lifespan",
    "label": "Lifespan: ",
    "placeholder": "Lifespan in weeks (if applicable)"
  },
  {
    "key": "harvest",
    "label": "Harvest: ",
    "placeholder": "Time from seed to harvest in weeks"
  },
  {
    "key": "sunRequirement",
    "label": "Sun Requirment: ",
    "placeholder": "full sun/part sun etc."
  },
  {
    "key": "imageUrl",
    "label": "Image URL: ",
    "placeholder": "image url, or leave blank for default image"
  }
]

const UpdatePlantForm = ({plantObj, editRequestCallback, hideAddPlantFormCallback}) => {
  const defaultFormFields = {
    "name": plantObj.name,
    "scientificName": plantObj.scientificName,
    "notes": plantObj.notes,
    "lifespan": plantObj.lifespan,
    "harvest": plantObj.harvest,
    "sunRequirement": plantObj.sunRequirement,
    "imageUrl": plantObj.imageUrl
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [errorMessage, setErrorMessage] = useState("")

  // setErrorMessage(props.newPlantErrorMsg)

  const onInputChange = event => {
    const newFormFields = {
      ...formFields
    };

    newFormFields[event.target.name] = event.target.value;
    // let updatedUserPlant = newFormFields
    // updatedUserPlant["id"] = plantObj.id
    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault()

    if (formFields.name !== null ) { //and check that the name isn't already in the list
      editRequestCallback(formFields, plantObj.id)

      setFormFields(defaultFormFields)
      hideAddPlantFormCallback()
    } else {
      setErrorMessage("UpdatePlantForm.js error")
      console.log("UpdatePlantForm.js error")
    }
    
  }

  const inputBoxes = FORM_FIELDS.map((field, i) => {
    return (
      <div className="form-group">
        <label htmlFor={field.key}>{field.label}</label>
        <input key={i} name={field.key} placeholder={field.placeholder} 
          value={formFields[field.key]} type="text" onChange={onInputChange}
          className="form-control"
        />
      </div>
    )
  })


  return (
    <div className="card p-2">
      <p>EDIT {plantObj.name}</p>
      <p>*plant name must be unique*</p>
      <div className="text-danger">{ errorMessage !== "" ? errorMessage : null }</div>
      <form onSubmit={onFormSubmit}>
        {inputBoxes}
        <input type="submit" value="Update Plant" className="submit-btn" />
      </form>
      
    </div>
  )

}

export default UpdatePlantForm