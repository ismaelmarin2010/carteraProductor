export function isRequired(value: string): boolean {
    return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
    const email = value.trim();

    if (!email) {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}