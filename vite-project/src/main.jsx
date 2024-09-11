import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserList from './task_2/UserList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserList />
  </StrictMode>,
)
