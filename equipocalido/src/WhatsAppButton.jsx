import logoWhatsApp from './assets/imgs/ab2.webp';
import './assets/style.css';

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5401160330763&text=Hola%20Equipo%20Cálido,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
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