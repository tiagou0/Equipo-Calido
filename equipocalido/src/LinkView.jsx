import './assets/style.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function LinkView({ background, link, imgSrc }) {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="linkContainer" 
            style={background}
        >
            <a target='_blank' href={link}>
                <img src={imgSrc} alt="link icon" />
            </a>
        </div>
    );
}