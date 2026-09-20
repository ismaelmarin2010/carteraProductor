import { APP_NAME } from "../../constants/ui";

export interface HeaderOptions {
    userName: string;
}

export function createHeader({
    userName
}: HeaderOptions): HTMLElement {
    const header = document.createElement("header");
    header.className = "app-header";

    const container = document.createElement("div");
    container.className = "app-header__container";

    const brand = document.createElement("div");
    brand.className = "app-header__brand";

    const title = document.createElement("span");
    title.className = "app-header__title";
    title.textContent = APP_NAME;

    const user = document.createElement("div");
    user.className = "app-header__user";

    const userNameElement = document.createElement("span");
    userNameElement.textContent = userName;

    user.appendChild(userNameElement);
    brand.appendChild(title);
    container.append(brand, user);
    header.appendChild(container);

    return header;
}