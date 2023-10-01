import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ReactRouter} from "react-router-dom"
import { Provider } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactRouter>
      <Provider>
        <App />
      </Provider>
    </ReactRouter>
  </React.StrictMode>,
)
