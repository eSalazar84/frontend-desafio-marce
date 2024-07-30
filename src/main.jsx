import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WomanContextProvider } from '../context/womanContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WomanContextProvider>
    <App />
  </WomanContextProvider>

)
