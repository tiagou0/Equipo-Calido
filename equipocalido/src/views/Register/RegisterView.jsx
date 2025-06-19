import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { translateFirebaseError } from "../../utils/translations/errorMessages";
import './RegisterView.css';

const RegisterView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado:", userCredential.user);
            setSuccess("¡Registro exitoso! Bienvenido/a.");
            // Limpiar el formulario
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error original:", error.code);
            setError(translateFirebaseError(error.code));
        }
    };

    return (
        <div className="register-view">
            <div className="register-container">
                <h2 className="register-title">Registro de Usuario</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="submit-button">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterView;