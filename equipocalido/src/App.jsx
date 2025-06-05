import Inicio from './Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import './assets/style.css';
import ServicesView from './ServicesView';

function App() {

  return (
    <>
      <NavbarComponent />
      <Inicio />
      <div className="containerServicesTitle">
        <h2 className='h2containerServices'>Academia Creativa</h2>
        <p>Cursos Online de Costura Creativa.</p>
      </div>

      <div className='containerServices'>
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

      </div>

    </>
  )
}

export default App
