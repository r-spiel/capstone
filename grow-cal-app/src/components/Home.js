import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MyCalendar from './MyCalendar';
import Plants from "./Plants";
import AddNewPlantForm from "./AddNewPlantForm";
import localStorage from 'local-storage';
import { Link } from 'react-router-dom'
import SplashPage from './SplashPage';
import PlantDetails from './PlantDetails';

const Home = ({url}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])
  const [eventList, setEventList] = useState([])
  const [showNewPlantForm, setShowNewPlantForm] = useState(false)
  const [selectedPlantId, setSelectedPlantId] = useState(null)
  const [newPlantError, setNewPlantError] = useState("")
  
  const selectAPlant = (plantId) => {
    const found = plantList.find( plant => 
      plant.id === plantId
    )

    if (found) {
      setSelectedPlantId(plantId)
    }
  }

  const unselectAPlant = (plantId) => {
    if (selectedPlantId === plantId) {
      setSelectedPlantId(null)
    }
  }

  const makeEventList = (listOfPlants) => {
    let listOfEvents = []
    listOfPlants.forEach(plant => {
        plant.eventList.forEach(singleEvent => {
  
          listOfEvents.push({
            start: singleEvent.startTime,
            end: singleEvent.endTime,
            title: singleEvent.title,
            allDay: false, 
            backgroundColor: singleEvent.notes
          })
        }
        )
    })
  
    setEventList(listOfEvents)
  }

  const changeShowNewPlantForm = (boolean) => {
    setShowNewPlantForm(boolean)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  // GET - initial API call to set the user's Plant list
  useEffect(() => {
    getPlantsList()
  }, []);

  const getPlantsList = () => {
    axios.get(`${url}/users/${localStorage.get('id')}/plants`)
    .then((response) => {
      const usersPlantList = response.data;
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
      getPlantsList()
      // const userData = response.data;
      // console.log(userData)

    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  // PUT (update) plant
  const editPlantCallback = (editForm, id) => {
    axios.put(`${url}/userPlants/${id}`, editForm)
    .then((response) => {
      getPlantsList()

    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  const deletePlant = (plantId) => {
    axios.delete(`${url}/userPlants/${plantId}`)
    .then((response) => {
      getPlantsList()
      console.log(response)

    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  // EVENTS
  // ADD NEW EVENT: 
  const addEventToPlant = (eventObj, plantId) => {
    axios.post(`${url}/userPlants/${plantId}/events`, eventObj)
    .then((response) => {
      getPlantsList();
    })
    .catch((error) => {
      console.log(error.response);
    });
  }

  const deleteEventFromPlant = (plantId, eventId) => {
    axios.delete(`${url}/userPlants/${plantId}/events/${eventId}`)
    .then((response) => {

      getPlantsList();
      // refreshPage()
      console.log(response)
    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  const showPlantDetails = plantList.filter((plant) => plant.id === selectedPlantId).map((selectedPlant) => {
    return (
      <PlantDetails 
        plantObj={selectedPlant} 
        key={selectedPlant.id} 

        newEventCallback={addEventToPlant}
        deleteEventCallback={deleteEventFromPlant}
        editPlantCallback={editPlantCallback}
        refreshPage={refreshPage}
        deletePlant={deletePlant}
        url={url}
      />
    )
  })

  const addNewPlantRef = useRef()

  const toggleShowNewPlantForm = () => {
    setShowNewPlantForm(!showNewPlantForm)
    addNewPlantRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  if ( !localStorage.get('user') ) {
    return (
      <SplashPage />
    )
  } else {
    return (
      <div>
        <MyCalendar eventList={eventList} />
  
  
        <h2>My Plant List</h2>
        <button className="btn bg-white border border-secondary" onClick={ toggleShowNewPlantForm }>add custom plant</button>
        {/* <button onClick={ redirect } >add plant from database</button> */}
  
        <span ref={addNewPlantRef} >
          <button className="btn bg-white ml-2 link-to-db border border-secondary"><Link to="/capstone/addFromDatabase">add plant from database</Link></button>
        </span>
  
        { showNewPlantForm ? <AddNewPlantForm newPlantAPICallback={addPlantToAPI} newPlantErrorMsg={newPlantError} hideNewPlantForm={changeShowNewPlantForm} /> : null }
        <div className="mt-3">
          { plantList.length > 0 ? <Plants plants={plantList} selectedPlantId={selectedPlantId} selectAPlant={selectAPlant} unselectAPlant={unselectAPlant} /> : "Your plant list is empty!  Add some plants! 🌱"}
          {/* <div className="text-danger">{errorMessage !== "" ? errorMessage : null }</div> */}
        
          { selectedPlantId ? showPlantDetails : null }
        </div>

      </div>
    )
  }

}

Home.propTypes = {

};

export default Home