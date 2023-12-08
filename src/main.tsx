import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CustomThemeProvider } from './context/themeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
)
