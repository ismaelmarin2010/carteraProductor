export function isRequired(value) {
    return value.trim().length > 0;
}
export function isValidEmail(value) {
    const email = value.trim();
    if (!email) {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
