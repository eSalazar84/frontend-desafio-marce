import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WomenList from './pages/WomenList'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WomenList />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
