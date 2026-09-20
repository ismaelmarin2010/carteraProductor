import { ROUTES } from "../../constants/ui";
import { createButton } from "../../components/common/Button";
export function createDashboardPage({ userName }) {
    const page = document.createElement("section");
    page.className = "dashboard-page";
    const header = document.createElement("div");
    header.className = "page-header";
    const title = document.createElement("h1");
    title.textContent = "Inicio";
    const greeting = document.createElement("p");
    greeting.textContent = `Bienvenido, ${userName}.`;
    header.append(title, greeting);
    const actions = document.createElement("div");
    actions.className = "dashboard-actions";
    const clientsButton = createButton({
        label: "Clientes",
        variant: "primary"
    });
    const policiesButton = createButton({
        label: "Pólizas",
        variant: "secondary"
    });
    clientsButton.addEventListener("click", () => {
        window.history.pushState({}, "", ROUTES.clients);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });
    policiesButton.addEventListener("click", () => {
        window.history.pushState({}, "", ROUTES.policies);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });
    actions.append(clientsButton, policiesButton);
    page.append(header, actions);
    return page;
}
