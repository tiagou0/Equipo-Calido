export default function FormView() {
    return (
        <div className="formContainer">
            <form
                className="form"
                action="https://formspree.io/f/xpwrjzpe" // ID de Equipo Calido en Formspree
                target="_blank"
                method="POST"
            >
                <h2 className="formTitle">Déjanos tu Consulta</h2>
                <input type="text" name="nombre" placeholder="Tu Nombre" className="formInput" required />
                <input type="email" name="email" placeholder="Tu Mail" className="formInput" required />
                <textarea name="mensaje" placeholder="Escribe tu mensaje" className="formTextarea" required></textarea>
                <button type="submit" className="formButton">Enviar Consulta</button>
            </form>
        </div>
    );
}