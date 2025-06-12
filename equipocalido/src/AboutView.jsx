import './assets/style.css'
import FooterImg from './FooterImg'
import logo from './assets/imgs/PictureProfile.png'
import ScrollReveal from './TextAnimations/ScrollReveal/ScrollReveal'
import ScrollVelocity from './TextAnimations/ScrollVelocity/ScrollVelocity'


export default function AboutView() {


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
                <img src={logo} />
                <div className="sentenceContainer">
                    <div className="containerLinksTitle">
                        <h2 className='h2containerServices'>¿A QUÉ NOS <br /> DEDICAMOS? </h2>
                    </div>
                    <ScrollReveal baseOpacity={10}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                    >
                        Nos especializamos en la venta de insumos de costura y en la enseñanza de técnicas textiles para todos los niveles.
                        Ofrecemos materiales de calidad seleccionados con criterio y experiencia, y dictamos clases prácticas donde compartimos conocimientos, creatividad y pasión por el oficio.
                        Creemos en el valor de lo hecho a mano y en el aprendizaje como camino para crecer y crear con libertad.

                    </ScrollReveal>
                </div>

            </div>

            <FooterImg />

        </>
    )
}