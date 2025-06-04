import Inicio from './Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
import './assets/style.css';
import NavBarCool from './NavBarCool';

function App() {

  const items = [
    { label: "Inicio", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Acerca De", href: "#" },
  ];

  return (
    <>
      <NavbarComponent />
      <Inicio />
      <NavBarCool
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </>
  )
}

export default App
