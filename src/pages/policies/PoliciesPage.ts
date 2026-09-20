import { ROUTES } from "../../constants/ui";
import { createButton } from "../../components/common/Button";

export function createPoliciesPage(): HTMLElement {
    const page = document.createElement("section");
    page.className = "policies-page";

    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Pólizas";

    const description = document.createElement("p");
    description.textContent =
        "Consulta y gestiona las pólizas de tu cartera.";

    header.append(title, description);

    const content = document.createElement("div");
    content.className = "policies-page__content";

    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    const emptyTitle = document.createElement("h2");
    emptyTitle.textContent = "Módulo en preparación";

    const emptyDescription = document.createElement("p");
    emptyDescription.textContent =
        "La gestión de pólizas se incorporará en el siguiente desarrollo.";

    const backButton = createButton({
        label: "Volver al inicio",
        variant: "secondary"
    });

    backButton.addEventListener("click", () => {
        window.history.pushState({}, "", ROUTES.dashboard);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });

    emptyState.append(
        emptyTitle,
        emptyDescription,
        backButton
    );

    content.appendChild(emptyState);
    page.append(header, content);

    return page;
}