export function createInput({ id, label, type = "text", name, placeholder = "", required = false, value = "" }) {
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
