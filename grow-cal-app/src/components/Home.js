import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MyCalendar from './MyCalendar';
import Plants from "./Plants";
import AddNewPlantForm from "./AddNewPlantForm";
import localStorage from 'local-storage';

const Home = ({url}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])
  const [showNewPlantForm, setShowNewPlantForm] = useState(false)
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [newPlantError, setNewPlantError] = useState("")

  // GET - initial API call to set the user's Plant list
  useEffect(() => {
    axios.get(`${url}/users/${localStorage.get('id')}/plants`)
      .then((response) => {
        const usersPlantList = response.data;
        console.log(usersPlantList)
        setPlantList(usersPlantList);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  // POST new plant to user's list
  const addPlantToAPI = (plantObj) => {
    axios.post(`${url}/users/${localStorage.get('id')}/plants`, plantObj)
    .then((response) => {
      const userData = response.data;
      
      console.log(response)
      console.log(userData)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      setNewPlantError("Error, plant name cannot be the same as any other plant in your Garden.")
      // axios error.response, sep from error.message
    });
  }

  // const getPlantsList = () => {
  //   axios.get(`${url}/users/${localStorage.get('id')}/plants`)
  //   .then((response) => {
  //     const userData = response.data;
  //     setCurrentUserCallback(userData)
  //     buttonTextCallback()
  //     console.log(userData)

  //   })
  //   .catch((error) => {
  //     seterrorMessageLogin(error.response.data.message);
  //     console.log(error);
  //     // axios error.response, sep from error.message
  //   });
  // }

  return (
    <div>
      <p>Homepage for logged in users</p>
      <MyCalendar />


      <h2>My Plant List</h2>
      <button onClick={ () => setShowNewPlantForm(!showNewPlantForm) }>add custom plant</button>
      <button>add plant from database</button>

      { showNewPlantForm ? <AddNewPlantForm newPlantAPICallback={addPlantToAPI} newPlantErrorMsg={newPlantError} /> : null }

      { plantList.length > 0 ? <Plants plants={plantList} /> : "Please add plants to your list!"}
      <div className="text-danger">{errorMessage !== "" ? errorMessage : null }</div>
    </div>
  )
}

Home.propTypes = {

};

export default Home