import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import {Provider} from 'react-redux';

import { NotesApp } from './NotesApp'
import './styles.css'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NotesApp />
      </Router>
    </Provider>
  </React.StrictMode>
)