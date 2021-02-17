import React from 'react';

const PlantIcon = ({id, name, imageUrl,  selectedPlantId, selectAPlant, unselectAPlant }) => {
  // const [isSelected, setIsSelected] = useState(false)

  // const selectCard = () => {
  //   setIsSelected(!isSelected)
  // }

  // useEffect(() => {
  //   if (isSelected) {
  //     addPlantToSelected(plantObj)
  //   } else {
  //     // delete from selected list callback
  //     unselectFromList(plantObj.id)
  //   }
  // }, [isSelected]);

  const showSelected = () => {
    if (id === selectedPlantId) {
      unselectAPlant(id)
    } else {
      selectAPlant(id)
    }
  }

  return (
    <div className={ id === selectedPlantId ? "d-block card plant-icon-card m-1 selected-plant shadow" : "d-block card plant-icon-card m-1 shadow" } onClick={showSelected}>
      {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
      <img src={imageUrl} alt={name} className="card-img-top"/>

      <div className="card-body">
      
          <h6 className="plant-icon-title">{name}</h6>

      </div>
    </div>
  )

}

export default PlantIcon