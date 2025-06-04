import './assets/style.css';
import foto from './assets/imgs/bgInicio.jpg';
import RotatingText from './RotatingText';
import Figure from 'react-bootstrap/Figure';

function Inicio() {
  return (
    <>
      <div className="inicio-container">
        <Figure>
          <Figure.Image
            width='100%'
            height='100%'
            style={{ objectFit: 'contain' }}
            alt="171x180"
            src={foto}
          />
        </Figure>
      </div>
      <div className="inicio-texto">
        <h1>¡BIENVENIDO A EQUIPO CÁLIDO!</h1>
        <RotatingText
          texts={['TRANSFORMAMOS IDEAS', 'EN CREACIONES ÚNICAS']}
          mainClassName="rotating-container"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="rotating-split-level"
          elementLevelClassName="rotating-element"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2500} 
        />
      </div>
    </>

  );
}

export default Inicio;

// <RotatingText
//  texts={['React', 'Bits', 'Es', 'Genial!']}
//  mainClassName="rotating-container"
//  staggerFrom="last"
//  initial={{ y: "100%" }}
//  animate={{ y: 0 }}
//  exit={{ y: "-120%" }}
//  staggerDuration={0.025}
//  splitLevelClassName="rotating-split-level"
//  elementLevelClassName="rotating-element"
//  transition={{ type: "spring", damping: 30, stiffness: 400 }}
//  rotationInterval={2000}
///>