import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './styles/global'
import './index.css'
import { TaskContextProvider } from './contexts/task'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
