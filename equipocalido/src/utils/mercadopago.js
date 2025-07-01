// Configuración de MercadoPago
export const MERCADOPAGO_CONFIG = {
  // Clave pública de MercadoPago (reemplaza con tu clave real)
  publicKey: 'TEST-your-public-key-here', // Para sandbox/testing
  // publicKey: 'APP-your-public-key-here', // Para producción
  
  // URL base de tu backend (donde procesarás los pagos)
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001',
  
  // Configuración para Argentina
  currency: 'ARS',
  country: 'AR'
};

// Función para cargar el SDK de MercadoPago
export const loadMercadoPago = () => {
  return new Promise((resolve, reject) => {
    if (window.MercadoPago) {
      resolve(window.MercadoPago);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.onload = () => {
      if (window.MercadoPago) {
        window.MercadoPago.setPublishableKey(MERCADOPAGO_CONFIG.publicKey);
        resolve(window.MercadoPago);
      } else {
        reject(new Error('MercadoPago SDK no se cargó correctamente'));
      }
    };
    script.onerror = () => {
      reject(new Error('Error al cargar MercadoPago SDK'));
    };
    
    document.head.appendChild(script);
  });
};

export default MERCADOPAGO_CONFIG;
