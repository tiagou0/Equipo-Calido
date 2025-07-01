import React from 'react';
import { useSubscription } from '../context/SubscriptionContext';
import { formatPrice } from '../utils/subscriptionPlans';
import './PlanCard.css';

const PlanCard = ({ plan, onSelectPlan, isCurrentPlan, isProcessing }) => {
  const { hasActiveSubscription } = useSubscription();

  const handleSelectPlan = () => {
    if (!isCurrentPlan && !isProcessing) {
      onSelectPlan(plan);
    }
  };

  return (
    <div className={`plan-card ${plan.popular ? 'popular' : ''} ${isCurrentPlan ? 'current' : ''}`}>
      {plan.popular && <div className="popular-badge">Más Popular</div>}
      
      <div className="plan-header" style={{ borderTopColor: plan.color }}>
        <h3 className="plan-name">{plan.name}</h3>
        <div className="plan-price">
          <span className="amount">{formatPrice(plan.price)}</span>
          <span className="interval">/{plan.interval}</span>
        </div>
        {plan.originalPrice && (
          <div className="original-price">
            Equivalente a ${plan.originalPrice} USD
          </div>
        )}
      </div>

      <div className="plan-features">
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index}>
              <span className="checkmark">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="plan-action">
        {isCurrentPlan ? (
          <button className="btn-current" disabled>
            Plan Actual
          </button>
        ) : (
          <button 
            className="btn-select" 
            style={{ backgroundColor: plan.color }}
            onClick={handleSelectPlan}
            disabled={isProcessing}
          >
            {isProcessing ? 'Procesando...' : 
             hasActiveSubscription ? 'Cambiar Plan' : 'Seleccionar Plan'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
