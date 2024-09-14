import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { CounterProvider } from './context/CounterContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CounterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CounterProvider>

  // </StrictMode>,
)
