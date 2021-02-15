import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import PlantDB from './PlantDB';

const AddFromDatabase = ({url, scrollToTopCallback}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])


  useEffect(() => {
    axios.get(`${url}/plants`)
      .then((response) => {
        const usersPlantList = response.data;
        console.log(usersPlantList)
        setPlantList(usersPlantList)
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  const addPlantToAPI = (plantObj) => {
    axios.post(`${url}/users/${localStorage.get('id')}/plants`, plantObj)
    .then((response) => {
      const userData = response.data;
      
      setErrorMessage(`${plantObj.name} add to your garden`)
      console.log(response)
      console.log(userData)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      setErrorMessage("Error, plant could not be added.  Make sure to use a different name from any plant that already exists in your garden.")
      console.log(error.response);
    });
  }


  const dbPlants = plantList.map((plant) => {
    return (
      <div className="card" key={plant.id}>
        <PlantDB scrollToTopCallback={scrollToTopCallback} plantObj={plant} addPlantCallback={addPlantToAPI} />
      </div>
    )
  })

  return (
    <div>
      <h1>Plants from the Database:</h1>
      <div className="text-danger" >{ errorMessage }</div>
      { dbPlants }
    </div>
  )

}

export default AddFromDatabase