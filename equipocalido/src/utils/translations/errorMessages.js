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
    'auth/missing-password': 'Por favor ingrese una contraseña'
  };

  return errorMessages[errorCode] || `Error: ${errorCode}`;
};