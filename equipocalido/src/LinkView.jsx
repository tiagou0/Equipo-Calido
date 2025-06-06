import './assets/style.css';



export default function LinkView({ background, link, imgSrc }) {
    return (
        <>

            <div className="linkContainer" style={background}>
                <a target='_blank' href={link}><img src={imgSrc} /></a>
            </div>
        </>
    );
}