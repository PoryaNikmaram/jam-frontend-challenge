import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// import { createDevTools } from '@redux-devtools/core'
// import { RtkQueryrMonitor } from '@redux-devtools/rtk-query-monitor'

// export default createDevTools(<RtkQueryrMonitor />)
