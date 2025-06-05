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
      <div className='containerServices'>
        <ServicesView namePlan={"Plan Básico"} />
        <ServicesView namePlan={"Plan Medio"} />
        <ServicesView namePlan={"Plan Hard"} />
      </div>

    </>
  )
}

export default App
