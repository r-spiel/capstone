import React, { useState} from 'react';
import PropTypes from 'prop-types';
import PlantIcon from './PlantIcon'
import PlantDetails from './PlantDetails'
import localStorage from 'local-storage';

const Plants = ({plants, deletePlant, url, refreshPage, editPlantCallback, newEventCallback }) => {
  const [selectedPlants, setSelectedPlants] = useState([])
  const [selectionsCleared, setSelectionsCleared] = useState(false)
  // pass in the list of plants to plant to check for edit??? That the edited name is not the same as any currently there already?  

  const addPlantToSelected = (plantObj) => {
    const updatedSelectedPLantsList = [...selectedPlants, plantObj]
    setSelectedPlants(updatedSelectedPLantsList)
    console.log(selectedPlants)
  }

  const clearSelectedPlantList = () => {
    setSelectedPlants([])
    setSelectionsCleared(true)
  }

  const resetSelectionsCleared = () => {
    setSelectionsCleared(false)
  }
  
  const deleteFromSelectedList = (plantId) => {
    let updatedSelectedPLantsList = [...selectedPlants]

    for (let i = 0; i < updatedSelectedPLantsList.length; i++) {
      if (updatedSelectedPLantsList[i].id === plantId) {
        updatedSelectedPLantsList.splice(i, 1)
      }

    }
    setSelectedPlants(updatedSelectedPLantsList)
  }

  const plantIconComponents = plants.map((plant) => {
    return (
      <PlantIcon
        key={plant.id} 
        plantObj={plant} 

        resetSelectionsCleared={resetSelectionsCleared}
        areSelectionsCleared={selectionsCleared} //will be true or false
        addPlantToSelected={addPlantToSelected}
        unselectFromList={deleteFromSelectedList}
      />
    )
  })

  const plantDetailsComponents = selectedPlants.map((plant) => {
      return (
        <PlantDetails 
          plantObj={plant} 
          key={plant.id + 1} 

          newEventCallback={newEventCallback}
          editPlantCallback={editPlantCallback}
          refreshPage={refreshPage}
          deletePlant={deletePlant}
          plantList={plants}
          url={url}
        />
      )
  })

  console.log(selectedPlants)

  return (
    <div>
      <button onClick={clearSelectedPlantList} >Clear Selected Plants</button>
      <p>Select a plant to view it's details and see more options:</p>
      <span className="row m-5">
        {plantIconComponents}
      </span>
      { selectedPlants.length > 0 ? plantDetailsComponents : null }
    </div>
  )
}

Plants.propTypes = {

};

export default Plants;