import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { translateFirebaseError } from "../../utils/translations/errorMessages";
import { Link, useNavigate } from "react-router-dom";
import './LoginView.css';
import logo from '../../assets/imgs/PictureProfile.png';
import '../../assets/style.css';

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Validaciones básicas
        if (!email || !password) {
            setError("Por favor complete todos los campos");
            setLoading(false);
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario logueado:", userCredential.user);

            // Redirigir al dashboard o página principal
            navigate("/dashboard");
        } catch (error) {
            console.error("Error de login:", error.code);
            setError(translateFirebaseError(error.code));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-view">
            <div className="login-container">
                <h2 className="login-title">Iniciar Sesión</h2>
                <div className="imgContainer">
                    <img src={logo} alt="Logo" style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '150px' }} />
                    <h2 style={{ marginRight: '150px' }}>¡Registrate para acceder a <br /> todos nuestros beneficios!</h2>
                </div>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            placeholder="ingresa tu email"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            placeholder="ingresa tu contraseña"
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={loading}
                    >
                        {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </button>
                </form>

                <div className="auth-links">
                    <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
                    <p><Link to="/forgot-password">¿Olvidaste tu contraseña?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
