import SpotlightCard from './Components/SpotlightCard/SpotlightCard'

export default function ServicesView( {namePlan}) {
    return (
        <>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 208, 0, 0.4)">
                {namePlan}
            </SpotlightCard>
        </>
    );
}