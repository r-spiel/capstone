import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Plants = (props) => {
  const [formFields, setFormFields] = useState({
    "name": null,
    "scientificName": null,
    "notes": null,
    "lifespan": null,
    "harvest": null,
    "sunRequirement": null
  })
  const [errorMessage, seterrorMessage] = useState("")

  // TODO: UPDATE THESE AS PROPS
  const url = "http://localhost:8080"
  const userID = 1
  const plantForm =   {
    "name": "Plant name",
    "scientificName": "Scientific Name",
    "notes": "Notes",
    "lifespan": "Lifespan in weeks",
    "harvest": "From seed to harvest time in weeks",
    "sunRequirement": "full sun/part sun etc."
  }

  const plant =   {
    "name": "Zuchinni",
    "scientificName": "Solanum lycopersicum",
    "notes": "some detailed notes about growing Tomatoes",
    "lifespan": 10,
    "harvest": 13,
    "sunRequirement": "full sun"
  }

  const onInputChange = (event) => {
    setFormFields(event.target.value);
  }

  const onFormSubmit = event => {
    event.preventDefault();

    // post to API
    addPlantToAPI(plant)


    // reset form state
  };

  const addPlantToAPI = (plantObj) => {
    axios.post(`${url}/users/${userID}/plants`, plantObj)
    .then((response) => {
      const userData = response.data;
      // setCurrentUserCallback(userData)
      // buttonTextCallback()
      console.log(response)
      console.log(userData)

    })
    .catch((error) => {
      seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  const inputBoxes = Object.keys(plantForm).forEach(key => {
      return (
        <span>
          <label>{key}</label>
          <input name={key} placeholder={plantForm.key} onChange={onInputChange} value={formFields.key} type="text" />
        </span>
        
      )
    })


  return (
    <div>
      <h5>Add Plant</h5>
      <form onSubmit={onFormSubmit} className="card-body">
        <div>
          { inputBoxes }
        </div>
        {errorMessage !== "" ? errorMessage : null }
        <div>
          <button type="submit">Add New Plant</button>
        </div>
        

      </form>
    </div>
  );

}

Plants.propTypes = {

};

export default Plants;