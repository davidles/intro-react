import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'

import App from './App.jsx';

/**
 * Componentes siempre tiene que estar en PascalCase
 */

const root =  ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
