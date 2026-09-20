import { ROUTES } from "../../constants/ui";
import { createButton } from "../../components/common/Button";
import { createClientCard } from "../../components/clients/ClientCard";
import type { Client } from "../../types/client";

export interface ClientsPageOptions {
    clients: Client[];
    onCreateClient: () => void;
}

export function createClientsPage({
    clients,
    onCreateClient
}: ClientsPageOptions): HTMLElement {
    const page = document.createElement("section");
    page.className = "clients-page";

    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Clientes";

    const description = document.createElement("p");
    description.textContent = "Gestiona los clientes de tu cartera.";

    const newClientButton = createButton({
        label: "Nuevo cliente",
        variant: "primary"
    });

    newClientButton.addEventListener("click", () => {
        window.history.pushState({}, "", ROUTES.newClient);
        window.dispatchEvent(new PopStateEvent("popstate"));
        onCreateClient();
    });

    header.append(title, description, newClientButton);

    const content = document.createElement("div");
    content.className = "clients-page__content";

    if (clients.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";

        const emptyTitle = document.createElement("h2");
        emptyTitle.textContent = "No hay clientes registrados";

        const emptyDescription = document.createElement("p");
        emptyDescription.textContent =
            "Agrega tu primer cliente para comenzar a gestionar tu cartera.";

        const emptyButton = createButton({
            label: "Agregar cliente",
            variant: "primary"
        });

        emptyButton.addEventListener("click", () => {
            window.history.pushState({}, "", ROUTES.newClient);
            window.dispatchEvent(new PopStateEvent("popstate"));
            onCreateClient();
        });

        emptyState.append(
            emptyTitle,
            emptyDescription,
            emptyButton
        );

        content.appendChild(emptyState);
    } else {
        const clientList = document.createElement("div");
        clientList.className = "client-list";

        for (const client of clients) {
            clientList.appendChild(createClientCard(client));
        }

        content.appendChild(clientList);
    }

    page.append(header, content);

    return page;
}