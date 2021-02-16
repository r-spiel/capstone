import React, { useState} from 'react';

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
    "label": "Image URL: image url, or leave blank for default image",
    "placeholder": "image url, or leave blank for default image"
  }
]

const AddNewPlantForm = (props) => {
  const defaultFormFields = {
    "name": null,
    "scientificName": null,
    "notes": null,
    "lifespan": null,
    "harvest": null,
    "sunRequirement": null,
    "imageUrl": "https://i.ibb.co/YTxPjdb/plant-svg.png"
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [errorMessage, setErrorMessage] = useState("")

  const onInputChange = event => {
    const newFormFields = {
      ...formFields
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault()

    if (formFields.name !== null ) {
      props.newPlantAPICallback(formFields)
      props.hideNewPlantForm(false)
      setFormFields(defaultFormFields)
    } else {
      setErrorMessage("Name cannot be blank")
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
    <div className="card p-2 mt-2">
      <h3>NEW PLANT FORM</h3>
      <p>*plant name must be unique*</p>
      <div className="text-danger">{ errorMessage !== "" ? errorMessage : null }</div>
      <form onSubmit={onFormSubmit}>
        {inputBoxes}
        <input type="submit" value="Add Plant" className="submit-btn" />
      </form>
      
    </div>
  )

}

export default AddNewPlantForm