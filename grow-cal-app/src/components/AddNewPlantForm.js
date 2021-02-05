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
  const [errorMessage, setErrorMessage] = useState("")

  // setErrorMessage(props.newPlantErrorMsg)

  const onInputChange = event => {
    const newFormFields = {
      ...formFields
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault()

    props.newPlantAPICallback(formFields)
  }

  const inputBoxes = FORM_FIELDS.map((field, i) => {
    return (
      <div>
        <label htmlFor={field.key}>{field.label}</label>
        <input key={i} name={field.key} placeholder={field.placeholder} 
          value={formFields[field.key]} type="text" onChange={onInputChange}
        />
      </div>
    )
  })


  return (
    <div>
      <p>NEW PLANT FORM</p>
      {/* <div className="text-danger">{ errorMessage !== "" ? errorMessage : null }</div> */}
      <form onSubmit={onFormSubmit}>
        {inputBoxes}
        <input type="submit" value="Add Plant" className="submit-btn" />
      </form>
      
    </div>
  )

}

export default AddNewPlantForm