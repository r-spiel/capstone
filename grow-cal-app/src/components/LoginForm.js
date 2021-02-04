import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import localStorage from 'local-storage';

const LoginForm = ({url, setCurrentUserCallback, buttonTextCallback}) => {
  const [loginUserFormField, setloginUserFormField] = useState("")
  const [errorMessageLogin, seterrorMessageLogin] = useState("")
  const [registerNewUserFormField, setRegisterNewUserFormField] = useState("")
  const [errorMessageNewUser, seterrorMessageNewUser] = useState("")

  // Login Existing User
  const onLoginUserInputChange = (event) => {
    setloginUserFormField(event.target.value);
  }

  const onLoginUserFormSubmit = event => {
    event.preventDefault();

    if (loginUserFormField !== "") {
      findUserFromAPI(loginUserFormField)
    }

    setloginUserFormField("")
  };

  const findUserFromAPI = (userName) => {
    axios.get(`${url}/users/userName?userName=${userName}`)
    .then((response) => {
      const userData = response.data;
      setCurrentUserCallback(userData)
      buttonTextCallback()
      console.log(userData)

    })
    .catch((error) => {
      seterrorMessageLogin(error.response.data.message);
      console.log(error);
      // axios error.response, sep from error.message
    });
  }

  // Register New User
  const onRegisterUserInputChange = (event) => {
    setRegisterNewUserFormField(event.target.value);
    console.log(event.target.value)
  }

  const onRegisterUserFormSubmit = event => {
    event.preventDefault();

    if (registerNewUserFormField !== "") {
      postUserToAPI(registerNewUserFormField)
    }

    setRegisterNewUserFormField("")
  };

  const postUserToAPI = (name) => {
    axios.post(`${url}/users`, {userName: name})
    .then((response) => {
      findUserFromAPI(name)
    })
    .catch((error) => {
      seterrorMessageNewUser(error.response.data.message);
      console.log(error.response.data);
    });
  }


  return (
    <div className="card login-card" >
      <h5 className="card-header">Login Existing User</h5>
      <form onSubmit={onLoginUserFormSubmit} className="card-body">
        <div>
          <label htmlFor="userName">User Name:</label>
          <input name="userName" 
            placeholder="enter user_name" 
            onChange={ onLoginUserInputChange }
            value={ loginUserFormField }
            type="text" 
          />
        </div>
        <div className="text-danger">{errorMessageLogin !== "" ? errorMessageLogin : null }</div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <h5 className="card-header">Register New User</h5>
      <form onSubmit={onRegisterUserFormSubmit} className="card-body">
        <div>
          <label htmlFor="userName">User Name:</label>
          <input name="userName" 
            placeholder="enter user_name" 
            onChange={ onRegisterUserInputChange }
            value={ registerNewUserFormField }
            type="text" 
          />
        </div>
        <div className="text-danger">{errorMessageNewUser !== "" ? errorMessageNewUser : null }</div>
        <div>
          <button type="submit">Register New User</button>
        </div>
        

      </form>
    </div>
  );

}

LoginForm.propTypes = {
  url: PropTypes.string
};

export default LoginForm;