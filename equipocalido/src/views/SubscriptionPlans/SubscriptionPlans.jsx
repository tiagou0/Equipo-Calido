import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useSubscription } from '../../context/SubscriptionContext';
import { SUBSCRIPTION_PLANS } from '../../utils/subscriptionPlans';
import { loadMercadoPago, MERCADOPAGO_CONFIG } from '../../utils/mercadopago';
import PlanCard from '../../Components/PlanCard';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { subscription, loading } = useSubscription();
  const [processingPlan, setProcessingPlan] = useState(null);

  const handleSelectPlan = async (selectedPlan) => {
    if (!user) {
      navigate('/login');
      return;
    }

    setProcessingPlan(selectedPlan.id);

    try {
      // Cargar el SDK de MercadoPago
      await loadMercadoPago();
      
      console.log('Procesando pago para plan:', selectedPlan.name);
      
      // Crear la preferencia de pago
      const preference = {
        items: [
          {
            title: `Suscripción ${selectedPlan.name} - Academia Creativa`,
            description: `Plan mensual ${selectedPlan.name}`,
            quantity: 1,
            currency_id: selectedPlan.currency,
            unit_price: selectedPlan.price
          }
        ],
        payer: {
          email: user.email,
          name: user.displayName || user.email.split('@')[0]
        },
        back_urls: {
          success: `${window.location.origin}/payment-success?plan=${selectedPlan.id}`,
          failure: `${window.location.origin}/payment-failure`,
          pending: `${window.location.origin}/payment-pending`
        },
        auto_return: 'approved',
        external_reference: `${user.uid}_${selectedPlan.id}_${Date.now()}`,
        notification_url: `${MERCADOPAGO_CONFIG.backendUrl}/webhook/mercadopago`
      };

      // En un entorno real, harías una llamada a tu backend para crear la preferencia
      // const response = await fetch(`${MERCADOPAGO_CONFIG.backendUrl}/create-preference`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(preference)
      // });
      // const { id } = await response.json();
      
      // Por ahora, simularemos la creación de la preferencia
      const MOCK_PREFERENCE_ID = `${selectedPlan.id}_${Date.now()}`;
      
      // Redirigir a MercadoPago Checkout
      // mp.checkout({
      //   preference: {
      //     id: MOCK_PREFERENCE_ID
      //   }
      // });
      
      // Por ahora, mostraremos información de lo que pasaría
      alert(`
        🎉 ¡Redirigiendo a MercadoPago!
        
        Plan: ${selectedPlan.name}
        Precio: $${selectedPlan.price} ${selectedPlan.currency}
        
        Datos del pago:
        - Email: ${user.email}
        - Referencia: ${preference.external_reference}
        
        Nota: Para activar los pagos reales, configura tu Access Token de MercadoPago
      `);
      
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Error al procesar el pago. Por favor, intenta nuevamente.');
    } finally {
      setProcessingPlan(null);
    }
  };

  if (loading) {
    return (
      <div className="subscription-loading">
        <div className="loading-spinner">Cargando planes...</div>
      </div>
    );
  }

  const currentPlanId = subscription?.planId;

  return (
    <div className="subscription-plans-container">
      <div className="subscription-header">
        <h1>Elige tu Plan de Suscripción</h1>
        <p>Desbloquea todo el contenido de nuestra Academia Creativa</p>
        <p className="payment-info">💳 Pagos seguros con MercadoPago - Acepta todas las tarjetas</p>
        
        {subscription?.active && (
          <div className="current-subscription-info">
            <span className="current-plan-badge">
              Plan Actual: {SUBSCRIPTION_PLANS[currentPlanId?.toUpperCase()]?.name || 'Desconocido'}
            </span>
          </div>
        )}
      </div>

      <div className="plans-grid">
        {Object.values(SUBSCRIPTION_PLANS).map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelectPlan}
            isCurrentPlan={currentPlanId === plan.id}
            isProcessing={processingPlan === plan.id}
          />
        ))}
      </div>

      <div className="subscription-footer">
        <div className="payment-methods">
          <h3>Métodos de Pago Disponibles</h3>
          <div className="payment-icons">
            <span className="payment-method">💳 Tarjetas de Crédito y Débito</span>
            <span className="payment-method">🏦 Transferencia Bancaria</span>
            <span className="payment-method">💰 Efectivo (Rapipago, Pago Fácil)</span>
            <span className="payment-method">📱 Billeteras Digitales</span>
          </div>
        </div>

        <div className="subscription-benefits">
          <h3>¿Por qué suscribirse?</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <span className="benefit-icon">🎯</span>
              <h4>Contenido Exclusivo</h4>
              <p>Acceso a cursos y materiales premium que no encontrarás en ningún otro lugar</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">👥</span>
              <h4>Comunidad Activa</h4>
              <p>Conecta con otros estudiantes y comparte tus creaciones</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">📚</span>
              <h4>Actualizaciones Constantes</h4>
              <p>Nuevo contenido añadido regularmente para mantener tu aprendizaje fresco</p>
            </div>
          </div>
        </div>

        <div className="subscription-guarantee">
          <p>💰 <strong>Garantía de 30 días</strong> - Si no estás satisfecho, te devolvemos tu dinero</p>
          <p>🔒 <strong>Pago seguro</strong> - Procesado a través de MercadoPago con máxima seguridad</p>
          <p>❌ <strong>Cancela cuando quieras</strong> - Sin compromisos a largo plazo</p>
          <p>🇦🇷 <strong>100% Argentina</strong> - Precios en pesos argentinos</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
