export function createButton({ label, type = "button", variant = "primary", disabled = false }) {
    const button = document.createElement("button");
    button.type = type;
    button.className = `button button--${variant}`;
    button.textContent = label;
    button.disabled = disabled;
    return button;
}
