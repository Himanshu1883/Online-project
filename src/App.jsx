import React from 'react'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Route, Routes } from 'react-router-dom'
import List from './components/List'
import Add from './components/Add'
import Update from './components/Update'
import Delete from './components/Delete'
import About from './components/About'
import Login from './components/Login'
import Registration from './components/Registration'
import Nav from './components/Nav'
function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/crud'>
          <Route path='add' element={<Add />} />
          <Route path='update' element={<Update />} />
          <Route path='delete' element={<Delete />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </>
  )
}

export default App