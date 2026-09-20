export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonOptions {
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    disabled?: boolean;
}

export function createButton({
    label,
    type = "button",
    variant = "primary",
    disabled = false
}: ButtonOptions): HTMLButtonElement {
    const button = document.createElement("button");

    button.type = type;
    button.className = `button button--${variant}`;
    button.textContent = label;
    button.disabled = disabled;

    return button;
}