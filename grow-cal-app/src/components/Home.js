import React, { useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import MyCalendar from './MyCalendar';

const localizer = momentLocalizer(moment)

const Home = (props) => {

  return (
    <div>
      <p>Homepage for logged in users</p>
      <MyCalendar />
    </div>
  )
}

Home.propTypes = {

};

export default Home