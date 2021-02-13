import React, { useState} from 'react';
import PropTypes from 'prop-types';
import PlantIcon from './PlantIcon'
import PlantDetails from './PlantDetails'
import localStorage from 'local-storage';

const Plants = ({plants, selectAPlant, unselectAPlant, selectedPlantId}) => {
  

  const plantIconComponents = plants.map((plant) => {
    return (
      <div className="col-xs-3">
        <PlantIcon
          key={plant.id} 
          id={plant.id}
          name={plant.name}
          imageUrl={plant.imageUrl}

          selectedPlantId={selectedPlantId}
          selectAPlant={selectAPlant}
          unselectAPlant={unselectAPlant}
        />
      </div>
    )
  })

  const iconCarouselBuilder = () => {
    let carouselMap = []
    let i = 0
    while (i < plants.length) {
      if (i + 3 < plants.length) {
        carouselMap.push(plantIconComponents.slice(i, i + 4))
      } else { 
        carouselMap.push(plantIconComponents.slice(i, plants.length))
      }
      
      i += 4
    }
    return carouselMap
  }

  const carouselGroups = iconCarouselBuilder()

  const plantInnerCarousel = carouselGroups.map(function(group, index) {
    return (
      <div className={index === 0 ? "carousel-item active": "carousel-item"}>
        <div className="row justify-content-center">
          {group}
        </div>

      </div>

    )
  })


  return (
    <div>
      <p>You have {plants.length} plants in your list.</p>
      <p>Select a plant from the carousel to view it's details and see more options:</p>
      <div className="col-xs-12">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {plantInnerCarousel}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

Plants.propTypes = {

};

export default Plants;