export const translateFirebaseError = (errorCode) => {
  const errorMessages = {
    'auth/email-already-in-use': 'Este correo electrónico ya está registrado',
    'auth/invalid-email': 'El correo electrónico no es válido',
    'auth/operation-not-allowed': 'Operación no permitida',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
    'auth/user-disabled': 'Esta cuenta ha sido deshabilitada',
    'auth/user-not-found': 'No existe una cuenta con este correo electrónico',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/too-many-requests': 'Demasiados intentos fallidos. Por favor, intente más tarde',
    'auth/network-request-failed': 'Error de conexión. Verifique su conexión a internet',
    'auth/invalid-credential': 'Credenciales inválidas',
    'auth/missing-password': 'Por favor ingrese una contraseña',
    'auth/invalid-login-credentials': 'Email o contraseña incorrectos',
    'auth/user-token-expired': 'Su sesión ha expirado. Por favor, inicie sesión nuevamente',
    'auth/requires-recent-login': 'Esta operación requiere una autenticación reciente',
    'auth/account-exists-with-different-credential': 'Ya existe una cuenta con este email usando un método diferente',
    'auth/credential-already-in-use': 'Esta credencial ya está asociada a otra cuenta'
  };

  return errorMessages[errorCode] || `Error: ${errorCode}`;
};