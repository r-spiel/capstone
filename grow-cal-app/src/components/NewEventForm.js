import React, { useState} from 'react';



const NewEventForm = ({newEventCallback, plantName, plantId}) => {
  const defaultFormFields = {
    title: plantName,
    startTime: '',
    endTime: '',
    notes: ''
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  // param for newEventcallback: const addEventToPlant = (eventObj, plantId)

  const onInputChange = (event) => {
    setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
  }

  const onFormSubmit = event => {
    event.preventDefault()

    if (formFields.name !== null ) {
      newEventCallback(formFields, plantId)
      setFormFields(defaultFormFields)
    } else {
      // setErrorMessage("Name cannot be blank")
    }
    
  }

  return (
    <div>
      <p>NEW EVENT FORM</p>
      <form onSubmit={onFormSubmit} className="form-group">
        <label>Event Title: </label>
        <input id="startTime" name="title" onChange={onInputChange} value={formFields.title} type="text"/>

        <label>Start Time: </label>
        <input id="startTime" name="startTime" onChange={onInputChange} value={formFields.startTime} placeholder="insert day/time format" type="text"/>

        <label>End Time: </label>
        <input id="endTime" name="endTime" onChange={onInputChange} value={formFields.endTime} placeholder="insert day/time format" type="text"/>

        <label>Event Notes: </label>
        <input id="notes" name="notes" onChange={onInputChange} value={formFields.notes} placeholder="notes for this event" type="text"/>
      
        <button type="submit" className="btn">Add Event</button>
      </form>
    </div>
  )

}

export default NewEventForm;