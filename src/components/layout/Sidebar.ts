import { ROUTES } from "../../constants/ui";

interface NavigationItem {
    label: string;
    route: string;
}

const navigationItems: NavigationItem[] = [
    {
        label: "Inicio",
        route: ROUTES.dashboard
    },
    {
        label: "Clientes",
        route: ROUTES.clients
    },
    {
        label: "Pólizas",
        route: ROUTES.policies
    }
];

export function createSidebar(): HTMLElement {
    const sidebar = document.createElement("aside");
    sidebar.className = "app-sidebar";

    const navigation = document.createElement("nav");
    navigation.className = "app-sidebar__navigation";
    navigation.setAttribute("aria-label", "Navegación principal");

    for (const item of navigationItems) {
        const link = document.createElement("a");

        link.className = "app-sidebar__link";
        link.href = item.route;
        link.textContent = item.label;

        navigation.appendChild(link);
    }

    sidebar.appendChild(navigation);

    return sidebar;
}