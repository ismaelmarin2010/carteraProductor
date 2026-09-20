import { ROUTES } from "../../constants/ui";
import { createButton } from "../../components/common/Button";
import { createInput } from "../../components/common/Input";
import { isRequired, isValidEmail } from "../../utils/validation";
export function createClientFormPage({ onSubmit }) {
    const page = document.createElement("section");
    page.className = "client-form-page";
    const title = document.createElement("h1");
    title.textContent = "Nuevo cliente";
    const form = document.createElement("form");
    form.className = "client-form";
    const firstNameField = createInput({
        id: "firstName",
        label: "Nombre",
        name: "firstName",
        placeholder: "Nombre",
        required: true
    });
    const lastNameField = createInput({
        id: "lastName",
        label: "Apellido",
        name: "lastName",
        placeholder: "Apellido",
        required: true
    });
    const identificationTypeContainer = document.createElement("div");
    identificationTypeContainer.className = "form-field";
    const identificationTypeLabel = document.createElement("label");
    identificationTypeLabel.htmlFor = "identificationType";
    identificationTypeLabel.textContent =
        "Tipo de identificación";
    const identificationTypeSelect = document.createElement("select");
    identificationTypeSelect.id = "identificationType";
    identificationTypeSelect.name = "identificationType";
    identificationTypeSelect.required = true;
    const identificationOptions = [
        { value: "dni", label: "DNI" },
        { value: "cuit", label: "CUIT" },
        { value: "passport", label: "Pasaporte" },
        { value: "other", label: "Otro" }
    ];
    for (const option of identificationOptions) {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        identificationTypeSelect.appendChild(optionElement);
    }
    identificationTypeContainer.append(identificationTypeLabel, identificationTypeSelect);
    const identificationNumberField = createInput({
        id: "identificationNumber",
        label: "Número de identificación",
        name: "identificationNumber",
        placeholder: "Número",
        required: true
    });
    const emailField = createInput({
        id: "email",
        label: "Correo electrónico",
        type: "email",
        name: "email",
        placeholder: "correo@ejemplo.com"
    });
    const phoneField = createInput({
        id: "phone",
        label: "Teléfono",
        type: "tel",
        name: "phone",
        placeholder: "Teléfono"
    });
    const errorMessage = document.createElement("p");
    errorMessage.className = "form-error";
    errorMessage.setAttribute("role", "alert");
    errorMessage.hidden = true;
    const actions = document.createElement("div");
    actions.className = "form-actions";
    const cancelButton = createButton({
        label: "Cancelar",
        variant: "secondary"
    });
    cancelButton.addEventListener("click", () => {
        window.history.pushState({}, "", ROUTES.clients);
        window.dispatchEvent(new PopStateEvent("popstate"));
    });
    const submitButton = createButton({
        label: "Guardar cliente",
        type: "submit",
        variant: "primary"
    });
    actions.append(cancelButton, submitButton);
    form.append(firstNameField, lastNameField, identificationTypeContainer, identificationNumberField, emailField, phoneField, errorMessage, actions);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        errorMessage.hidden = true;
        errorMessage.textContent = "";
        const firstNameInput = firstNameField.querySelector("input");
        const lastNameInput = lastNameField.querySelector("input");
        const identificationNumberInput = identificationNumberField.querySelector("input");
        const emailInput = emailField.querySelector("input");
        const phoneInput = phoneField.querySelector("input");
        if (!firstNameInput ||
            !lastNameInput ||
            !identificationNumberInput ||
            !emailInput ||
            !phoneInput) {
            errorMessage.textContent =
                "No se pudo cargar correctamente el formulario.";
            errorMessage.hidden = false;
            return;
        }
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const identificationNumber = identificationNumberInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        if (!isRequired(firstName)) {
            errorMessage.textContent =
                "Ingresa el nombre del cliente.";
            errorMessage.hidden = false;
            return;
        }
        if (!isRequired(lastName)) {
            errorMessage.textContent =
                "Ingresa el apellido del cliente.";
            errorMessage.hidden = false;
            return;
        }
        if (!isRequired(identificationNumber)) {
            errorMessage.textContent =
                "Ingresa el número de identificación.";
            errorMessage.hidden = false;
            return;
        }
        if (email && !isValidEmail(email)) {
            errorMessage.textContent =
                "Ingresa un correo electrónico válido.";
            errorMessage.hidden = false;
            return;
        }
        const input = {
            firstName,
            lastName,
            identificationType: identificationTypeSelect.value,
            identificationNumber,
            ...(email ? { email } : {}),
            ...(phone ? { phone } : {})
        };
        submitButton.disabled = true;
        try {
            onSubmit(input);
        }
        catch {
            errorMessage.textContent =
                "No fue posible guardar el cliente. Inténtalo nuevamente.";
            errorMessage.hidden = false;
        }
        finally {
            submitButton.disabled = false;
        }
    });
    page.append(title, form);
    return page;
}
