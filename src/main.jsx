// Handle GitHub Pages redirect
const path = new URLSearchParams(window.location.search).get('path');
if (path) {
  window.history.replaceState(null, '', path);
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
