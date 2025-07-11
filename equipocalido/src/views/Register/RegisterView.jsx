import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { translateFirebaseError } from "../../utils/translations/errorMessages";
import { Link, useNavigate } from "react-router-dom";
import './RegisterView.css';
import logo from '../../assets/imgs/PictureProfile.png';
import '../../assets/style.css';

const RegisterView = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("El nombre es requerido");
            return false;
        }
        if (!formData.email.trim()) {
            setError("El email es requerido");
            return false;
        }
        if (!formData.password) {
            setError("La contraseña es requerida");
            return false;
        }
        if (formData.password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Actualizar el perfil del usuario con el nombre
            await updateProfile(userCredential.user, {
                displayName: formData.name
            });

            console.log("Usuario registrado:", userCredential.user);
            setSuccess("¡Registro exitoso! Redirigiendo...");

            // Redirigir al dashboard después de 2 segundos
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);

        } catch (error) {
            console.error("Error original:", error.code);
            setError(translateFirebaseError(error.code));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-view">
            <div className="imgContainer">
                <img src={logo} alt="Logo" style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '150px' }} />
                <h2 style={{ marginRight: '150px' }}>¡Registrate para acceder a <br /> todos nuestros beneficios!</h2>
            </div>
            <div className="register-container">
                <h2 className="register-title">Registrate!</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre completo:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Ingresa tu nombre completo"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Ingresa tu email"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Mínimo 6 caracteres"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Repite tu contraseña"
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={loading}
                    >
                        {loading ? "Registrando..." : "Registrarse"}
                    </button>
                </form>

                <div className="auth-links">
                    <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterView;