import { APP_NAME } from "../../constants/ui";
import { createButton } from "../../components/common/Button";
import { createInput } from "../../components/common/Input";
import { isRequired, isValidEmail } from "../../utils/validation";
export function createLoginPage({ onLoginSuccess }) {
    const page = document.createElement("main");
    page.className = "login-page";
    const container = document.createElement("div");
    container.className = "login-page__container";
    const title = document.createElement("h1");
    title.className = "login-page__title";
    title.textContent = APP_NAME;
    const subtitle = document.createElement("p");
    subtitle.className = "login-page__subtitle";
    subtitle.textContent = "Accede a tu cartera de seguros";
    const form = document.createElement("form");
    form.className = "login-form";
    const emailField = createInput({
        id: "email",
        label: "Correo electrónico",
        type: "email",
        name: "email",
        placeholder: "correo@ejemplo.com",
        required: true
    });
    const passwordField = createInput({
        id: "password",
        label: "Contraseña",
        type: "password",
        name: "password",
        required: true
    });
    const errorMessage = document.createElement("p");
    errorMessage.className = "form-error";
    errorMessage.setAttribute("role", "alert");
    errorMessage.hidden = true;
    const submitButton = createButton({
        label: "Iniciar sesión",
        type: "submit",
        variant: "primary"
    });
    form.append(emailField, passwordField, errorMessage, submitButton);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        errorMessage.hidden = true;
        errorMessage.textContent = "";
        const emailInput = emailField.querySelector("input");
        const passwordInput = passwordField.querySelector("input");
        if (!emailInput || !passwordInput) {
            errorMessage.textContent =
                "No se pudo cargar correctamente el formulario.";
            errorMessage.hidden = false;
            return;
        }
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        if (!isRequired(email)) {
            errorMessage.textContent =
                "Ingresa tu correo electrónico.";
            errorMessage.hidden = false;
            return;
        }
        if (!isValidEmail(email)) {
            errorMessage.textContent =
                "Ingresa un correo electrónico válido.";
            errorMessage.hidden = false;
            return;
        }
        if (!isRequired(password)) {
            errorMessage.textContent =
                "Ingresa tu contraseña.";
            errorMessage.hidden = false;
            return;
        }
        submitButton.disabled = true;
        try {
            onLoginSuccess({
                email,
                password
            });
        }
        catch {
            errorMessage.textContent =
                "No fue posible iniciar sesión. Inténtalo nuevamente.";
            errorMessage.hidden = false;
        }
        finally {
            submitButton.disabled = false;
        }
    });
    container.append(title, subtitle, form);
    page.appendChild(container);
    return page;
}
