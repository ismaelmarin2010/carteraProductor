let currentSession = null;
export function login(credentials) {
    if (credentials.email !== "demo@ejemplo.com" ||
        credentials.password !== "123456") {
        throw new Error("Correo electrónico o contraseña incorrectos.");
    }
    currentSession = {
        user: {
            id: "development-user",
            name: "Usuario de prueba",
            email: credentials.email,
            producerId: "development-producer"
        },
        accessToken: "development-token"
    };
    return currentSession;
}
export function getSession() {
    return currentSession;
}
export function logout() {
    currentSession = null;
}
