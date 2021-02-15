import React from 'react';
import splashImage from '../grow-cal-splash.png'
import calendarIcon from '../iconfinder_calendar_285670.png'

const SplashPage = () => {

  return (
    <div className="mb-3">
      <div className="row justify-content-center">
        <img src={splashImage} alt="hand planting seedling, words say start planning your garden today with Grow-Cal App" />
      </div>
      
      <span>
          <h3 className="title-inline">+ plan your garden by adding events for your plants</h3>
          <img src={calendarIcon} alt="calendar icon" className="cal-icon" />
      </span>

      <div>
        <h3>+ add plants to your collection from our database</h3>
        <span className="row justify-content-center">
          <div className="d-block card plant-icon-card m-1 shadow">
            {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
            <img src="https://i.ibb.co/85GG3YN/greenonion.jpg" alt="Green Onion" className="card-img-top"/>

            <div className="card-body">
            
                <h6 className="plant-icon-title">Green Onion</h6>

            </div>
          </div>
          <div className="d-block card plant-icon-card m-1 shadow">
            {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
            <img src="https://i.ibb.co/sqn4Xqb/tomato.jpg" alt="Tomato" className="card-img-top"/>

            <div className="card-body">
            
                <h6 className="plant-icon-title">Tomato</h6>

            </div>
          </div>
          <div className="d-block card plant-icon-card m-1 shadow">
            {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
            <img src="https://i.ibb.co/1vHjSNS/garlic.jpg" alt="Garlic" className="card-img-top"/>

            <div className="card-body">
            
                <h6 className="plant-icon-title">Garlic</h6>

            </div>
          </div>
          <div className="d-block card plant-icon-card m-1 shadow">
            {/* // <div className="card plant-icon-card m-1 border border-danger" onClick={selectCard}> */}
            <img src="https://i.ibb.co/6D3phzG/eggplant.jpg" alt="Eggplant" className="card-img-top"/>

            <div className="card-body">
            
                <h6 className="plant-icon-title">Eggplant</h6>

            </div>
          </div>
        </span>
      </div>

      <h6 className="source-title">Sources:</h6>
      <p className="mt-3">Image source: Getty Images - 1137926593</p>
      <p>Plant Icon Images source: <a href="https://www.freepik.com/vectors/food">Food vector created by bakar015 - www.freepik.com</a> </p>
    </div>
  )
}



export default SplashPage