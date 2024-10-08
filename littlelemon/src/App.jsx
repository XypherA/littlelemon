import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/layout/Layout"
import './App.css'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/NotFound/NotFound'
import Reservations from './components/pages/Reservations/Reservations'
import ConfirmedReservation from './components/pages/Reservations/confirmedReservation'


function App() {

  return (
    <>
     <Layout>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/home' element = {<Home/>} />
          <Route path='/reservations' element = {<Reservations/>} />
          <Route path='/confirmedReservation' element ={<ConfirmedReservation/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
     </Layout>
    </>
  )
}

export default App
