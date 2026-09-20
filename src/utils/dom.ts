export function getAppElement(): HTMLDivElement {
    const app = document.querySelector<HTMLDivElement>("#app");

    if (!app) {
        throw new Error("Application root element was not found.");
    }

    return app;
}