import React, { useEffect, useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const LoginForm = ({url, setCurrentUserCallback}) => {
  const [formField, setFormField] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  // login completed callback function listen for 

  // onFormSubmit we'll call the API to search for that userName
  // if valid, set the user otherwise print user not found

  const onInputChange = (event) => {
    setFormField(event.target.value);
  }

  const onFormSubmit = event => {
    event.preventDefault();

    if (formField !== null) {
      findUserFromAPI(formField)
    }

    setFormField("")
  };

  const findUserFromAPI = (userName) => {
    axios.get(`${url}/users/userName?userName=${userName}`)
    .then((response) => {
      const userData = response.data;
      setCurrentUserCallback(userData)
      console.log(userData)

    })
    .catch((error) => {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data);
      // axios error.response, sep from error.message
    });
  }



  return (
    <div className="card" >
      <h5 className="card-header">Login Form</h5>
      <form onSubmit={onFormSubmit} className="card-body">
        <div>
          <label htmlFor="userName">User Name:</label>
          <input name="userName" 
            placeholder="enter user_name" 
            onChange={ onInputChange }
            value={ formField }
            type="text" 
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  );

}

LoginForm.propTypes = {
  url: PropTypes.string
};

export default LoginForm;