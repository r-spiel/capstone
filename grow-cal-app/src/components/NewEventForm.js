import React, { useState} from 'react';



const NewEventForm = ({newEventCallback, plantName, plantId}) => {
  const defaultFormFields = {
    title: plantName,
    startTime: '',
    endTime: ''
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
        <input id="startTime" name="title" onChange={onInputChange} value={formFields.title} type="text" className="form-control"/>

        <label>Start Time: * use format: 2019-08-12T10:30:00.000Z *</label>
        <p>For example: 2021-02-10T11:30:00.000Z</p>
        <input id="startTime" name="startTime" onChange={onInputChange} value={formFields.startTime} placeholder="format: 2021-02-10T11:30:00.000Z" type="text" className="form-control"/>

        <label>End Time: </label>
        <input id="endTime" name="endTime" onChange={onInputChange} value={formFields.endTime} placeholder="insert day/time format" type="text" className="form-control"/>
      
        <button type="submit" className="btn">Add Event</button>
      </form>
    </div>
  )

}

export default NewEventForm;