import React, { useState} from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { TwitterPicker } from 'react-color';


const NewEventForm = ({newEventCallback, plantName, plantId}) => {
  const defaultFormFields = {
    title: plantName,
    startTime: '',
    startTimeAMPM: 'AM',
    endTime: '',
    endTimeAMPM: 'AM',
  }
  
  const [errorMessage, setErrorMessage] = useState(null)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const [dateStart, setDateStart] = useState(null)
  const [dateEnd, setDateEnd] = useState(null)

  const [selectedColor, setSelectedColor] = useState({"hex": "#79A9A9"})

  const onSelectStartAMPM = (event) => {
    setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
  }

  const onSelectEndAMPM = (event) => {
    setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
  }

  const onStartDateChange = (date) => {
    setDateStart(date);
  }

  const onEndDateChange = (date) => {
    setDateEnd(date);
  }

  const onInputChange = (event) => {
    setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
  }

  const colorPickerHandler = (color) => {
    setSelectedColor(color)
    document.getElementById('selected-color-box').style.backgroundColor = color.hex
  }

  const onFormSubmit = event => {
    event.preventDefault()

    if (formFields.title !== null && dateStart !== null ) {
      const startTimeHM = formFields.startTime.split(':')
      const endTimeHM = formFields.endTime.split(':')

      if (formFields.startTimeAMPM === "PM") {
        startTimeHM[0] = parseInt(startTimeHM[0]) + 12
      } else {
        startTimeHM[0] = parseInt(startTimeHM[0])
      }

      if (formFields.endTimeAMPM === "PM") {
        endTimeHM[0] = parseInt(endTimeHM[0]) + 12
      } else {
        endTimeHM[0] = parseInt(endTimeHM[0])
      }

      const finalStartDate = dateStart
      finalStartDate.setHours(startTimeHM[0], startTimeHM[1])

      const finalEndDate = dateEnd
      finalEndDate.setHours(endTimeHM[0], endTimeHM[1])

      const eventDetails = {
        startTime: finalStartDate,
        endTime: finalEndDate,
        title: formFields.title, 
        notes: selectedColor.hex
      }

      // console.log(eventDetails)
      newEventCallback(eventDetails, plantId)
      setFormFields(defaultFormFields)
    } else {
      setErrorMessage("Title and Start Date cannot be empty")
    }
    
  }

  return (
    <div className="card p-2 new-event-form">
      <h5>Add a New Event:</h5>
      <div className="text-danger">{ errorMessage }</div>
      <form onSubmit={onFormSubmit}>
        <label>Event Title: </label>
        <input id="startTime" name="title" onChange={onInputChange} value={formFields.title} type="text"/>

        <div>
          <label>Start Date:</label>
          <DayPickerInput onDayChange={onStartDateChange} />
          <label>Start Time:</label>
          <input id="startTime" name="startTime" onChange={onInputChange} value={formFields.startTime} placeholder="HH:MM" type="text"/>
          <select onChange={onSelectStartAMPM} defaultValue="AM" name="startTimeAMPM">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        
        {/* <input id="startTime" name="startTime" onChange={onInputChange} value={formFields.startTime} placeholder="format: 2021-02-10T11:30:00.000Z" type="text" className="form-control"/> */}
        <div>
          <label>End Date: </label>
          <DayPickerInput onDayChange={onEndDateChange} />
          <label>End Time:</label>
          <input id="endTime" name="endTime" onChange={onInputChange} value={formFields.endTime} placeholder="HH:MM" type="text"/>
          <select onChange={onSelectEndAMPM} defaultValue="AM" name="endTimeAMPM">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <div>
          <span>
            <p className="title-inline">Selected Color:</p>
            <div id="selected-color-box"></div>
          </span>

          <p>Choose a different color:</p>
          <TwitterPicker color={selectedColor} onChange={colorPickerHandler} />
        </div>
        
        <input type="submit" value="Add Event" className="submit-btn mt-3" />
      </form>
    </div>
  )

}

export default NewEventForm;