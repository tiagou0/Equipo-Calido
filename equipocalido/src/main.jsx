import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css' // Importar los estilos de AOS

// Inicializar AOS
AOS.init({
  duration: 1000, // valores en ms
  once: false,     // si la animación debe ocurrir solo una vez
  offset: 200, // pixels desde el borde inferior antes de activar
  delay: 100,  // retraso antes de la animación
  easing: 'ease-in-out'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
