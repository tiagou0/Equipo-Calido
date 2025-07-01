import { useAuth } from '../context/AuthContext';
import { useSubscription } from '../context/SubscriptionContext';
import { useNavigate, Link } from 'react-router-dom';
import { SUBSCRIPTION_PLANS, formatPrice } from '../utils/subscriptionPlans';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { subscription, userLevel, hasActiveSubscription } = useSubscription();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const getCurrentPlan = () => {
    if (!subscription?.planId) return null;
    return SUBSCRIPTION_PLANS[subscription.planId.toUpperCase()];
  };

  const currentPlan = getCurrentPlan();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Panel de Usuario</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>¡Bienvenido/a, {user?.displayName || user?.email?.split('@')[0]}!</h2>
          <p>Email: {user?.email}</p>
          <p>Usuario verificado: {user?.emailVerified ? 'Sí' : 'No'}</p>
        </div>

        {/* Sección de Suscripción */}
        <div className="subscription-section">
          <h3>Tu Suscripción</h3>
          {hasActiveSubscription && currentPlan ? (
            <div className="current-subscription">
              <div className="subscription-card" style={{ borderLeftColor: currentPlan.color }}>
                <div className="subscription-info">
                  <h4>{currentPlan.name}</h4>
                  <p className="subscription-price">{formatPrice(currentPlan.price)}/{currentPlan.interval}</p>
                  <p className="subscription-level">Nivel de acceso: {userLevel}</p>
                  <p className="subscription-status">
                    Estado: <span className="status-active">Activa</span>
                  </p>
                </div>
                <div className="subscription-actions">
                  <Link to="/subscription-plans" className="btn-manage">
                    Cambiar Plan
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-subscription">
              <p>No tienes una suscripción activa</p>
              <Link to="/subscription-plans" className="btn-subscribe">
                Ver Planes de Suscripción
              </Link>
            </div>
          )}
        </div>

        <div className="dashboard-sections">
          <div className="section-card">
            <h3>Mis Cursos</h3>
            <p>Aquí podrás ver tus cursos inscritos</p>
            {hasActiveSubscription ? (
              <span className="access-level">Acceso nivel {userLevel}</span>
            ) : (
              <span className="access-limited">Acceso limitado</span>
            )}
          </div>
          
          <div className="section-card">
            <h3>Mi Progreso</h3>
            <p>Revisa tu avance en los cursos</p>
            {hasActiveSubscription && (
              <div className="progress-info">
                <p>Plan: {currentPlan?.name}</p>
              </div>
            )}
          </div>
          
          <div className="section-card">
            <h3>Configuración</h3>
            <p>Actualiza tu perfil y preferencias</p>
            <Link to="/subscription-plans" className="link-plans">
              Gestionar Suscripción
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
