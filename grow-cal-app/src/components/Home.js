import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MyCalendar from './MyCalendar';
import Plants from "./Plants";

const Home = (props) => {

  return (
    <div>
      <p>Homepage for logged in users</p>
      <MyCalendar />

      <Plants />
    </div>
  )
}

Home.propTypes = {

};

export default Home