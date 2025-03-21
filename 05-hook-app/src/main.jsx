import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import HooksApp from './HooksApp'
import { MainApp } from './09-useContext/MainApp'


import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    {/* <StrictMode> */}
      <MainApp />
    {/* </StrictMode> */}
  </BrowserRouter>
)
