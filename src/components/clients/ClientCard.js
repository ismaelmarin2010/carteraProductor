export function createClientCard(client) {
    const card = document.createElement("article");
    card.className = "client-card";
    const name = document.createElement("h3");
    name.className = "client-card__name";
    name.textContent = `${client.firstName} ${client.lastName}`;
    const identification = document.createElement("p");
    identification.className = "client-card__identification";
    identification.textContent =
        `${client.identificationType.toUpperCase()}: ${client.identificationNumber}`;
    card.append(name, identification);
    if (client.email) {
        const email = document.createElement("p");
        email.className = "client-card__email";
        email.textContent = client.email;
        card.appendChild(email);
    }
    return card;
}
