export interface AuthUser {
    id: string;
    name: string;
    email: string;
    producerId: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthSession {
    user: AuthUser;
    accessToken: string;
}