import type {
    Client,
    CreateClientInput
} from "../../types/client";

const developmentProducerId = "development-producer";

let developmentClients: Client[] = [];

export function getClients(): Client[] {
    return [...developmentClients];
}

export function createClient(
    input: CreateClientInput
): Client {
    const now = new Date().toISOString();

    const client: Client = {
        id: crypto.randomUUID(),
        producerId: developmentProducerId,
        ...input,
        createdAt: now,
        updatedAt: now
    };

    developmentClients = [
        ...developmentClients,
        client
    ];

    return client;
}