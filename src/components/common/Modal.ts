export interface ModalOptions {
    title: string;
    content: HTMLElement;
    onClose?: () => void;
}

export function createModal({
    title,
    content,
    onClose
}: ModalOptions): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const header = document.createElement("div");
    header.className = "modal__header";

    const titleElement = document.createElement("h2");
    titleElement.className = "modal__title";
    titleElement.textContent = title;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "modal__close";
    closeButton.setAttribute("aria-label", "Cerrar");
    closeButton.textContent = "×";

    const body = document.createElement("div");
    body.className = "modal__body";
    body.appendChild(content);

    closeButton.addEventListener("click", () => {
        overlay.remove();
        onClose?.();
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.remove();
            onClose?.();
        }
    });

    header.append(titleElement, closeButton);
    modal.append(header, body);
    overlay.appendChild(modal);

    return overlay;
}