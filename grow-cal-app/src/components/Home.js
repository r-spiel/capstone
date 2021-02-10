import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MyCalendar from './MyCalendar';
import Plants from "./Plants";
import AddNewPlantForm from "./AddNewPlantForm";
import localStorage from 'local-storage';
import { Link } from 'react-router-dom'
import SplashPage from './SplashPage';
import moment from 'moment';

const Home = ({url}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])
  const [eventList, setEventList] = useState([])
  const [showNewPlantForm, setShowNewPlantForm] = useState(false)
  const [selectedPlants, setSelectedPlants] = useState([])
  const [newPlantError, setNewPlantError] = useState("")
  
  const addPlantToSelected = (plantObj) => {
    const updatedSelectedPLantsList = [...selectedPlants, plantObj]
    setSelectedPlants(updatedSelectedPLantsList)
  }

  const clearSelectedPlantList = () => {
    setSelectedPlants([])
  }

  const makeEventList = (listOfPlants) => {
    let listOfEvents = []
    listOfPlants.forEach(plant => {
      plant.eventList.forEach(singleEvent => {
  
        listOfEvents.push({
          start: singleEvent.startTime,
          end: singleEvent.endTime,
          title: singleEvent.title,
          allDay: false
        })
      }
      )
    })
  
    setEventList(listOfEvents)
    // console.log(listOfEvents)
  }

  const changeShowNewPlantForm = (boolean) => {
    setShowNewPlantForm(boolean)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  // GET - initial API call to set the user's Plant list
  useEffect(() => {
    axios.get(`${url}/users/${localStorage.get('id')}/plants`)
      .then((response) => {
        const usersPlantList = response.data;
        console.log(usersPlantList)
        setPlantList(usersPlantList);
        makeEventList(usersPlantList)
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  const getPlantsList = () => {
    axios.get(`${url}/users/${localStorage.get('id')}/plants`)
    .then((response) => {
      const usersPlantList = response.data;
      console.log(usersPlantList)
      setPlantList(usersPlantList);
      makeEventList(usersPlantList)
    })
    .catch((error) => {
      setErrorMessage(error.response.data.message);
    });
  }


  // POST new plant to user's list
  const addPlantToAPI = (plantObj) => {
    axios.post(`${url}/users/${localStorage.get('id')}/plants`, plantObj)
    .then((response) => {
      const userData = response.data;
      // refreshPage()

      getPlantsList()

      console.log(response)
      console.log(userData)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  // PUT (update) plant
  const editPlantCallback = (editForm, id) => {
    axios.put(`${url}/userPlants/${id}`, editForm)
    .then((response) => {
      console.log(editForm)
      // redirect to home
      refreshPage()
      console.log(response)
      console.log(response.data)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  const deletePlant = (plantId) => {
    axios.delete(`${url}/userPlants/${plantId}`)
    .then((response) => {
      // const userData = response.data;
      refreshPage()
      console.log(response)
      console.log(response.data)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  // EVENTS
  // ADD NEW EVENT: 
  const addEventToPlant = (eventObj, plantId) => {
    axios.post(`${url}/userPlants/${plantId}/events`, eventObj)
    .then((response) => {
      refreshPage()
      console.log(response)
    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  console.log(eventList)

  if ( !localStorage.get('user') ) {
    return (
      <SplashPage />
    )
  } else {
    return (
      <div>
        <p>Homepage for logged in users</p>
        <MyCalendar eventList={eventList} />
  
  
        <h2>My Plant List</h2>
        <button onClick={ () => setShowNewPlantForm(!showNewPlantForm) }>add custom plant</button>
        {/* <button onClick={ redirect } >add plant from database</button> */}
  
        <span>
          <button><Link to="/addFromDatabase">add plant from database</Link></button>
        </span>
  
        { showNewPlantForm ? <AddNewPlantForm newPlantAPICallback={addPlantToAPI} newPlantErrorMsg={newPlantError} hideNewPlantForm={changeShowNewPlantForm} /> : null }
  
        { plantList.length > 0 ? <Plants newEventCallback={addEventToPlant} editPlantCallback={editPlantCallback} refreshPage={refreshPage} plants={plantList} deletePlant={deletePlant} url={url} /> : "Please add plants to your list!"}
        <div className="text-danger">{errorMessage !== "" ? errorMessage : null }</div>
      </div>
    )
  }

}

Home.propTypes = {

};

export default Home