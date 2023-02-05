import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

const rootElem: HTMLElement = document.querySelector('#root') as HTMLElement

ReactDOM.createRoot(rootElem).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
