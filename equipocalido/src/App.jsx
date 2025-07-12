import Inicio from './Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import './assets/style.css';
import ServicesView from './ServicesView';
import FooterImg from './FooterImg';
import LinkView from './LinkView';
import AboutView from './AboutView';
import FormView from './FormView';
import ico1 from './assets/imgs/ico1.png';
import ico2 from './assets/imgs/ico2.png';
import ico3 from './assets/imgs/ico3.png';
import ico4 from './assets/imgs/ico4.png';
import WhatsAppButton from './WhatsAppButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterView from './views/Register/RegisterView';
import LoginView from './views/Login/LoginView';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import SubscriptionPlans from './views/SubscriptionPlans/SubscriptionPlans';
import { AuthProvider } from './context/AuthContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import AuthUser from './views/AuthUser/AuthUser';


function App() {

  return (
    <AuthProvider>
      <SubscriptionProvider>
        <Router>
          <>
            <NavbarComponent />
            <Routes>
          <Route path="/" element={
            <>
              <Inicio /> {/* modulo del primer segmento */}
              <div className="containerServicesTitle">
                <h2 className='h2containerServices'>Academia Creativa</h2>
                <p>Cursos Online de Costura Creativa.</p>
              </div>

              <div className='containerServices' >
                <ServicesView
                  namePlan={"Plan Básico"}
                  price={"10 USD/MES"}
                  text={"Este es el primer plan, con el mismo podrás..."}
                />
                <ServicesView
                  namePlan={"Plan Medio"}
                  price={"20 USD/MES"}
                  text={"Este es el segundo plan, con el mismo podrás..."}
                />
                <ServicesView
                  namePlan={"Plan Hard"}
                  price={"30 USD/MES"}
                  text={"Este es el tercer plan, con el mismo podrás..."}
                />
                <FooterImg />
              </div>
              <div className="containerLinksTitle">
                <h2 className='h2containerServices'>NUESTROS LINKS</h2>
              </div>
              <div className="linkViewContainer" >
                <LinkView
                  background={{
                    background: 'linear-gradient(0deg, rgba(255, 222, 91, 1) 26%, rgba(255, 255, 255, 1) 84%)',
                    backgroundBlendMode: 'normal'
                  }}
                  link={"https://www.instagram.com/equipocalido/"}
                  imgSrc={ico1}
                />
                <LinkView
                  background={{
                    background: 'linear-gradient(180deg, rgba(255, 222, 91, 1) 26%, rgba(255, 255, 255, 1) 84%)',
                    backgroundBlendMode: 'normal'
                  }}
                  link={"https://www.facebook.com/calidobycintiag?locale=es_LA"}
                  imgSrc={ico2}
                />
                <LinkView
                  background={{
                    background: 'linear-gradient(0deg, rgba(255, 222, 91, 1) 26%, rgba(255, 255, 255, 1) 84%)',
                    backgroundBlendMode: 'normal'
                  }}
                  link={"https://equipocalido.tiendup.com/"}
                  imgSrc={ico3}
                />
                <LinkView
                  background={{
                    background: 'linear-gradient(180deg, rgba(255, 222, 91, 1) 26%, rgba(255, 255, 255, 1) 84%)',
                    backgroundBlendMode: 'normal'
                  }}
                  link={"https://www.youtube.com/@equipocalidoo"}
                  imgSrc={ico4}
                />
              </div>
              <AboutView />
              <FormView />
              <WhatsAppButton />
            </>
          } />
          
          <Route path="/authuser" element={<AuthUser/>} />
          <Route path="/account" element={<Dashboard/>} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </>
    </Router>
  </SubscriptionProvider>
</AuthProvider>
  )
}

export default App
