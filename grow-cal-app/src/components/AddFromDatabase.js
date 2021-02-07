import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import PlantDB from './PlantDB';

const AddFromDatabase = ({url}) => {
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
      setErrorMessage("Plant could not be added, check logs")
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }


  const dbPlants = plantList.map((plant) => {
    return (
      <div className="card" key={plant.id}>
        <PlantDB plantObj={plant} addPlantCallback={addPlantToAPI} />
      </div>
    )
  })

  return (
    <div>
      <p>Plants from the Database:</p>
      <div className="text-danger" >{ errorMessage }</div>
      { dbPlants }
    </div>
  )

}

export default AddFromDatabase