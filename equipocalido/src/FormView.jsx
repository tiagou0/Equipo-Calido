


export default function FormView() {
    return (
        <div className="formContainer">
            <form className="form">
                <h2 className="formTitle">Déjanos tu Consulta</h2>
                <input type="text" placeholder="Tu Nombre" className="formInput" required />
                <input type="email" placeholder="Tu Mail" className="formInput" required />
                <textarea placeholder="Escribe tu mensaje" className="formTextarea" required></textarea>
                <button type="submit" className="formButton">Enviar Consulta</button>
            </form>
        </div>
    );
}