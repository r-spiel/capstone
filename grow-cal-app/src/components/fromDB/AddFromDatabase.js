import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import PlantDB from './PlantDB';

const AddFromDatabase = ({url, scrollToTopCallback}) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [plantList, setPlantList] = useState([])
  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    searchSpace(e)
  }

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearchText(keyword)
  }

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

  const searchResults = plantList.filter(plant => {
    if (searchText === null || searchText ==="") {
      return (
        plant
      )
    } else if (plant.name.toLowerCase().includes(searchText.toLowerCase())) {
      return (
        plant
      )
    } else {
      return false
    }
  })

  const dbPlantComponents = searchResults.map(plant => {
    return (
      <div className="card" key={plant.id}>
        <PlantDB scrollToTopCallback={scrollToTopCallback} plantObj={plant} addPlantCallback={addPlantToAPI} />
      </div>
    )
  })

  return (
    <div>
      <span >
        <h1 className="title-inline">Plants from the Database:</h1>
        <span className="input-group">
          <span className="form-outline">
            <label className="form-label title-inline">Search</label>
            <input type="search" id="form1" className="form-control title-inline" onChange={handleChange} />
          </span>
        </span>
      </span>


      <div className="text-danger" >{ errorMessage }</div>
      {/* { dbPlants } */}
      <div className="mt-3">
        {dbPlantComponents}
      </div>

    </div>
  )

}

export default AddFromDatabase