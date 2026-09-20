const developmentProducerId = "development-producer";
let developmentClients = [];
export function getClients() {
    return [...developmentClients];
}
export function createClient(input) {
    const now = new Date().toISOString();
    const client = {
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
