import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/layout/Layout"
import './App.css'
import Home from './components/pages/Home/Home'


function App() {

  return (
    <>
     <Layout>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/home' element = {<Home/>} />
          <Route path='/' element />
          <Route path='/' element />
          <Route path='/' element />
        </Routes>
     </Layout>
    </>
  )
}

export default App
