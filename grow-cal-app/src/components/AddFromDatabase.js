import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';

const AddFromDatabase = ({url}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])


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
      // axios error.response, sep from error.message
    });
  }

  useEffect(() => {
    axios.get(`${url}/plants`)
      .then((response) => {
        const usersPlantList = response.data;
        console.log(usersPlantList)
        setPlantList(usersPlantList);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  const dbPlants = plantList.map((plant) => {
    return (
      <div className="card">
        <span>
          {plant.name} ({plant.scientificName}) 
          <button type="button" >
            add to my garden
          </button>
          <p>Notes: {plant.notes}</p>
          <p>{plant.sunRequirement}, Lifespan: {plant.lifespan}, Weeks to harvest from planting: {plant.harvest}</p>
        </span>


        
      </div>
    )
  })

  return (
    <div>
      <p>Plants from the Database:</p>
      
      { dbPlants }
    </div>
  )

}

export default AddFromDatabase