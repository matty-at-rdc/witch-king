import React from "react"
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client"

import "./index.css"
import {getStore} from './store'

import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </React.StrictMode>
)
