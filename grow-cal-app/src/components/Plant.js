import React, { useState } from 'react';
import localStorage from 'local-storage';
import axios from 'axios';
import UpdatePlantForm from './UpdatePlantForm'

const Plant = (props) => {
  const [showEditPlantForm, setShowEditPlantForm] = useState(false)

  const plantObj = props.plantObj

  const id = props.plantObj.id

  const deletePlantOnClick = () => {
    props.deletePlant(id)
  }

  const editPlantCallback = (editForm) => {
    axios.put(`${props.url}/userPlants/${id}`, editForm)
    .then((response) => {
      // const userData = response.data;
      
      // redirect to home
      props.refreshPage()
      console.log(response)
      console.log(response.data)

    })
    .catch((error) => {
      // seterrorMessage(error.response);
      console.log(error.response);
      // axios error.response, sep from error.message
    });
  }

  return (
    <div className="card">
      <span>
        {plantObj.name} ({plantObj.scientificName}) - {plantObj.notes}
        
        <button type="button" className="btn text-info" onClick={ () => setShowEditPlantForm(!showEditPlantForm) } >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </button>

        <button type="button" className="btn text-danger" onClick={ deletePlantOnClick } >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </span>
      <p>{plantObj.sunRequirement}, Lifespan: {plantObj.lifespan}, Weeks to harvest from planting: {plantObj.harvest}</p>
      { showEditPlantForm ? <UpdatePlantForm plantObj={plantObj} editRequestCallback={editPlantCallback} /> : null}
    </div>
  )

}

export default Plant