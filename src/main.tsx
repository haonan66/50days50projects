import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 本地SVG图标
import "virtual:svg-icons-register"
import App from './App.tsx'
import 'reset-css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
