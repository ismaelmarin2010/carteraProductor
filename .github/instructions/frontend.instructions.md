# Frontend Development Instructions

## 1. Purpose

The frontend is the browser-based user interface for the insurance producers application.

It must provide a simple and clear experience for insurance producers while communicating with the backend through a REST API.

---

## 2. Technology

Current frontend direction:

* HTML
* CSS
* TypeScript
* Vite

React is not currently required.

Do not introduce React or another frontend framework unless application complexity clearly justifies it and the decision is explicitly approved.

---

## 3. Language

The complete user interface must be in Spanish.

This includes:

* Navigation
* Buttons
* Forms
* Labels
* Validation messages
* Error messages
* Notifications
* Confirmation dialogs
* Empty states
* Help text

Technical source code must remain in English.

Examples:

```text
Good:
createClient()
clientId
policyNumber
showValidationError()

User interface:
"Crear cliente"
"Número de documento"
"Guardar cambios"
"El número de documento ya existe"
```

Do not mix English technical terminology into the user interface unless it is a deliberate product requirement.

---

## 4. User Experience

The application is intended for insurance producers and should be usable without technical expertise.

Prioritize:

* Clear navigation
* Large clickable areas
* Simple forms
* Logical grouping
* Clear labels
* Immediate validation
* Useful error messages
* Consistent layouts
* Minimal unnecessary choices

Avoid:

* Dense interfaces
* Unnecessary animations
* Excessive menus
* Ambiguous icons
* Technical terminology in user-facing text

---

## 5. Validation

Frontend validation should improve user experience but must never be considered a security boundary.

Validation should include, where appropriate:

* Required fields
* Format validation
* Length validation
* Numeric validation
* Date validation
* Duplicate warnings
* File validation

The backend must independently validate all submitted data.

---

## 6. Client Management

The frontend should support workflows such as:

* Client list
* Client search
* Client creation
* Client editing
* Client details
* Client policies
* Client photographs
* Client documents

The exact fields and workflows remain subject to the project's pending requirements.

Do not invent permanent client fields without approval.

---

## 7. Policy Management

Policies must remain separate from client information.

A client may have multiple policies.

A policy may belong to a particular insurance company.

The UI should therefore make the relationship explicit:

```text
Client
  └── Policies
        ├── Insurance Company
        ├── Product
        ├── Risk
        ├── Coverages
        ├── Payments
        └── Documents
```

---

## 8. Duplicate Client Handling

When creating a client, the UI should help identify possible duplicates within the current producer's portfolio.

The frontend may display a warning when a potential duplicate is detected.

The final duplicate validation must be performed by the backend and enforced by the database.

---

## 9. Files and Images

The frontend may optimize images before uploading them.

Initial reference:

```text
Maximum image dimension: approximately 1600 x 1600 pixels
```

This is not yet a final requirement.

Identity documents must remain legible.

PDF documents must not be converted into image files merely for optimization.

The frontend must not expose private storage credentials.

---

## 10. API Communication

The frontend communicates with the backend through HTTPS.

Do not:

* Connect directly to PostgreSQL from the browser.
* Expose database credentials.
* Expose private storage credentials.
* Put server-side secrets in frontend code.

The frontend must use the backend API for protected operations.

---

## 11. Authentication

The frontend must provide a login experience.

Authentication implementation is still subject to the final authentication-provider decision.

The frontend must not implement its own insecure password storage.

Authentication state must be handled securely.

---

## 12. Producer Isolation

The frontend must never assume that a producer can access another producer's clients.

The backend remains responsible for enforcing authorization.

Frontend filtering is only a UX mechanism and is not a security mechanism.

---

## 13. User-Facing Strings

Where practical, user-facing strings should be centralized.

A future structure may be:

```text
src/
├── locales/
│   └── es/
│       ├── common.ts
│       ├── clients.ts
│       ├── policies.ts
│       └── errors.ts
```

Do not introduce a complete internationalization framework unless it becomes necessary.

The current application language is Spanish only.

---

## 14. Accessibility

Where practical, use:

* Semantic HTML
* Proper labels
* Keyboard-accessible controls
* Sufficient text clarity
* Meaningful error messages
* Accessible form structure

Avoid relying exclusively on color to communicate important information.

---

## 15. Maintainability

Keep components and modules focused.

Avoid unnecessary abstraction.

Technical identifiers should remain in English.

User-facing content should remain in Spanish.

Do not introduce dependencies without a clear reason.

---

## 16. Definition of Done

Frontend work is complete when:

* The intended workflow works.
* User-facing text is in Spanish.
* Technical identifiers are in English.
* Validation is implemented where appropriate.
* API errors are handled.
* Loading and empty states are handled where appropriate.
* Protected functionality requires authentication.
* No secrets are exposed.
* The implementation does not bypass backend authorization.
* The UI remains consistent with the project's simplicity principles.
