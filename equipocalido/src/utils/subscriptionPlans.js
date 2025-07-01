export const SUBSCRIPTION_PLANS = {
  BASIC: {
    id: 'basic',
    name: 'Plan Básico',
    price: 3000, // Precio en pesos argentinos
    originalPrice: 10, // Precio en USD para referencia
    currency: 'ARS',
    interval: 'mes',
    features: [
      'Acceso a cursos básicos de costura',
      'Videos tutoriales fundamentales',
      'Patrones básicos descargables',
      'Soporte por email',
      'Comunidad online'
    ],
    mercadoPagoPreferenceId: 'basic_monthly_plan', // ID de preferencia en MercadoPago
    level: 1,
    color: '#28a745'
  },
  MEDIUM: {
    id: 'medium',
    name: 'Plan Medio',
    price: 6000, // Precio en pesos argentinos
    originalPrice: 20, // Precio en USD para referencia
    currency: 'ARS',
    interval: 'mes',
    features: [
      'Todo lo del Plan Básico',
      'Cursos intermedios y avanzados',
      'Masterclasses en vivo',
      'Patrones premium exclusivos',
      'Feedback personalizado',
      'Acceso prioritario a nuevos contenidos'
    ],
    mercadoPagoPreferenceId: 'medium_monthly_plan',
    level: 2,
    color: '#fd7e14',
    popular: true
  },
  PREMIUM: {
    id: 'premium',
    name: 'Plan Premium',
    price: 9000, // Precio en pesos argentinos
    originalPrice: 30, // Precio en USD para referencia
    currency: 'ARS',
    interval: 'mes',
    features: [
      'Todo lo de planes anteriores',
      'Sesiones 1-on-1 con instructores',
      'Acceso a materiales premium',
      'Certificaciones oficiales',
      'Descuentos en tienda física',
      'Acceso anticipado a nuevos cursos',
      'Kit de herramientas incluido'
    ],
    mercadoPagoPreferenceId: 'premium_monthly_plan',
    level: 3,
    color: '#6f42c1'
  }
};

export const getUserPlanLevel = (userSubscription) => {
  if (!userSubscription || !userSubscription.active) return 0;
  
  const plan = Object.values(SUBSCRIPTION_PLANS).find(
    plan => plan.id === userSubscription.planId
  );
  
  return plan ? plan.level : 0;
};

export const canAccessContent = (userLevel, requiredLevel) => {
  return userLevel >= requiredLevel;
};

// Función para formatear precios en pesos argentinos
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
