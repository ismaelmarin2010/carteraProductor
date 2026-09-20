export type IdentificationType =
    | "dni"
    | "cuit"
    | "passport"
    | "other";

export interface Client {
    id: string;
    producerId: string;
    firstName: string;
    lastName: string;
    identificationType: IdentificationType;
    identificationNumber: string;
    email?: string;
    phone?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateClientInput {
    firstName: string;
    lastName: string;
    identificationType: IdentificationType;
    identificationNumber: string;
    email?: string;
    phone?: string;
}

export interface UpdateClientInput extends CreateClientInput { }