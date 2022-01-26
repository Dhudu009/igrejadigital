import React from 'react'
import ReactDOM from 'react-dom'
import NavbarAD from './component/Navigation'
import Scrollbar from './component/Scrollbar'
import Head from './component/Head'
import Footer from './component/Footer'
import Live from './pages/Live'
import HomePage from './pages/HomePage'
import Igreja from './pages/Igreja'
import Oracao from './component/Oracao'

import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Head} />
    <Route path='/home' component={NavbarAD} />
    <Route path='/home' component={Scrollbar} />
    <Route path='/home' exact component={HomePage} />
    <Route path='/home/live' component={Live} />
    <Route path='/home/igreja' component={Igreja} />
    <Route path='/home/oracao' component={Oracao} />
    <Route path='/home' component={Footer} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
