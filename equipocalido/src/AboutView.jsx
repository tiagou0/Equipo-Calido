import './assets/style.css'
import FooterImg from './FooterImg'
import logo from './assets/imgs/PictureProfile.png'
import ScrollReveal from './TextAnimations/ScrollReveal/ScrollReveal'
import ScrollVelocity from './TextAnimations/ScrollVelocity/ScrollVelocity'
import AOS from 'aos';
import { useEffect } from 'react'


export default function AboutView() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="about-yellow-banner">
                <div style={{ width: '100%', height: '120px', overflow: 'hidden' }}>
                    <ScrollVelocity
                        texts={['Equipo Calido']}
                        velocity={20}
                        className="custom-scroll-text"
                    />
                </div>
            </div>
            <div className="containerAbout">
                <img data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false" src={logo} />
                <div className="sentenceContainer">
                    <div className="containerLinksTitle">
                        <h2 className='h2containerServices'>¿A QUÉ NOS <br /> DEDICAMOS? </h2>
                    </div>
                    <ScrollReveal baseOpacity={10}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                    >
                        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                        No! When he ate a soup made out of a poisonous mushroom?
                        No! A man dies when he is forgotten!

                    </ScrollReveal>
                </div>

            </div>

            <FooterImg />

        </>
    )
}