import React from 'react'
import ReactDOM from 'react-dom'
import NavbarAD from './component/Navigation'
import Head from './component/Head'
import Footer from './component/Footer'
import MapContainer from './component/MapContainer'
import Stream from './pages/StreamPage'
import HomePage from './pages/HomePage'

import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Head} />
    <Route path='/home' component={NavbarAD} />
    <Route path='/home' exact component={HomePage} />
    <Route path='/home/culto-online' component={Stream} />
    <Route path='/home' component={MapContainer} />
    <Route path='/home' component={Footer} />

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
