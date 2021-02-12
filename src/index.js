import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Slider from './Slider'
import Display from './Display'
import Academic from './Academic'
import Personal from './Personal';
import Skills from './Skills'
import Response from './Responsibility';
import Last from './Last';

ReactDOM.render(
  <>
    <Navbar />
    <Slider/>
    <Display/>
    <Skills/>
    <Response/>
    <Academic/>
    <Personal/>
    <Last/>
  </>,
  document.getElementById('root')
);

