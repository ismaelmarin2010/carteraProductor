export interface InputOptions {
    id: string;
    label: string;
    type?: "text" | "email" | "password" | "tel";
    name: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
}

export function createInput({
    id,
    label,
    type = "text",
    name,
    placeholder = "",
    required = false,
    value = ""
}: InputOptions): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "form-field";

    const labelElement = document.createElement("label");
    labelElement.htmlFor = id;
    labelElement.textContent = label;

    const input = document.createElement("input");
    input.id = id;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.required = required;

    container.append(labelElement, input);

    return container;
}