export function getAppElement() {
    const app = document.querySelector("#app");
    if (!app) {
        throw new Error("Application root element was not found.");
    }
    return app;
}
