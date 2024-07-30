import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WomanProvider } from './context/WomanContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <WomanProvider>
      <App />
    </WomanProvider>

  </React.StrictMode>
)
