import SpotlightCard from './Components/SpotlightCard/SpotlightCard'


export default function ServicesView({ namePlan, price, text }) {


    return (
        <>
            
            <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(255, 166, 0, 0)"
            >
                <span className="TitleSpotlightCard">{namePlan}</span>
                <span className="PriceSpotlightCard">{price}</span>
                <span className="TextSpotlightCard">{text}</span>
                <button className="ButtonSpotlightCard">Consultar</button>
            </SpotlightCard>
        </>
    );
}