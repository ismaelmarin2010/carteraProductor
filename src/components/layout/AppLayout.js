import { createHeader } from "./Header";
import { createSidebar } from "./Sidebar";
export function createAppLayout({ userName, content }) {
    const layout = document.createElement("div");
    layout.className = "app-layout";
    const header = createHeader({
        userName
    });
    const body = document.createElement("div");
    body.className = "app-layout__body";
    const sidebar = createSidebar();
    const main = document.createElement("main");
    main.className = "app-layout__main";
    main.appendChild(content);
    body.append(sidebar, main);
    layout.append(header, body);
    return layout;
}
