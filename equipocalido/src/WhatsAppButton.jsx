import logoWhatsApp from './assets/imgs/ab2.webp';
import './assets/style.css';

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5491155555555&text=Hola%20Equipo%20Cálido,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
            target="_blank"
            className="whatsapp-button"
        >
            <img
                src={logoWhatsApp}
                alt="WhatsApp Icon"
                className="whatsapp-icon"
            />
            <span>Contáctanos!</span>
        </a>
    );
}