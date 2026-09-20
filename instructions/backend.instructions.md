\# Backend Development Instructions



\## 1. Purpose



The backend provides the API and server-side business logic for the insurance producers application.



It is responsible for authentication, authorization, validation, data access, business rules, and protected file operations.



\---



\## 2. Technology



Current backend direction:



\* Node.js

\* TypeScript

\* REST API

\* PostgreSQL



The final hosting provider remains pending.



\---



\## 3. Language



Technical backend code must use English identifiers.



Examples:



```text

createClient()

getPolicy()

insuranceCompanyId

identificationNumber

validateProducerAccess()

```



Technical documentation and comments should also be in English.



User-facing API messages must be in Spanish.



Examples:



```text

"Cliente creado correctamente"

"No tiene permisos para acceder a este cliente"

"El número de identificación ya existe"

```



\---



\## 4. API Principles



The API should:



\* Use HTTPS.

\* Use clear REST conventions.

\* Validate all input.

\* Return appropriate HTTP status codes.

\* Avoid exposing unnecessary internal information.

\* Enforce authorization server-side.

\* Maintain producer-level data isolation.



The API must never trust client-side validation.



\---



\## 5. Authentication



The backend must authenticate users before allowing access to protected resources.



The final authentication provider remains pending.



Passwords must never be stored in plaintext.



Authentication implementation must follow established security practices.



\---



\## 6. Authorization



Authentication answers:



```text

Who is the user?

```



Authorization answers:



```text

What is the user allowed to access?

```



Authorization must be enforced by the backend.



Every protected resource must be checked against the authenticated producer's ownership and permissions.



\---



\## 7. Producer Isolation



Every client belongs to one producer portfolio.



A producer must only be able to access:



\* Their own clients

\* Their clients' policies

\* Their clients' documents

\* Their clients' photographs

\* Other resources explicitly authorized for that producer



Never rely on a client-provided producer ID without verifying it against the authenticated user.



\---



\## 8. Client Model



Clients must be associated with a producer.



The backend must not assume global uniqueness of a person across all producers.



Example:



```text

Producer A

&#x20;   └── Client X



Producer B

&#x20;   └── Client X

```



These must remain independent records.



\---



\## 9. Duplicate Prevention



Duplicate prevention should be implemented at multiple layers.



\### Frontend



Provide user-friendly warnings.



\### Backend



Check for potential duplicates before creating the client.



\### Database



Enforce the final integrity constraint.



The conceptual uniqueness rule is currently:



```text

Producer + Identification Type + Identification Number

```



The final rule remains pending.



\---



\## 10. Client and Policy Separation



Clients and policies must remain separate resources.



A client may have multiple policies.



A policy may reference:



\* Client

\* Insurance Company

\* Product

\* Risk

\* Coverages

\* Payments

\* Documents



Do not place policy-specific data directly into the client entity unless the field is genuinely a client-level attribute.



\---



\## 11. Insurance Companies



A producer may work with multiple insurance companies.



A client may have policies from multiple insurance companies.



Therefore, insurance company information must be associated with policies/products rather than hardcoded as a client attribute.



\---



\## 12. File Handling



Actual photographs and documents must be stored in object storage.



The backend should control access.



The database should store metadata and references as appropriate.



Private documents must not be exposed through unrestricted public URLs.



The final object-storage provider remains pending.



\---



\## 13. Image Processing



The system may optimize photographs before storage.



Initial reference:



```text

Maximum dimension: approximately 1600 x 1600 pixels

```



This is not a final immutable requirement.



Do not degrade identity documents to the point that their information becomes unreadable.



\---



\## 14. Validation



Validate:



\* Required fields

\* Data types

\* Lengths

\* Formats

\* Relationships

\* Authorization

\* Business rules

\* File types

\* File sizes

\* Ownership



Never assume that data sent by the browser is valid.



\---



\## 15. Error Handling



Errors should be:



\* Predictable

\* Safe

\* Useful to the frontend

\* Free of sensitive internal information



Do not expose:



\* Stack traces

\* Database credentials

\* Internal connection strings

\* Secrets

\* Private infrastructure details



User-facing error messages must be in Spanish.



Internal technical logs should remain technical and should not contain sensitive client information unnecessarily.



\---



\## 16. Database Access



Database access must occur through the backend.



The browser must never connect directly to PostgreSQL.



Use parameterized queries or an appropriate database abstraction that prevents SQL injection.



Database migrations must be version controlled.



\---



\## 17. Configuration and Secrets



Secrets must not be committed to Git.



Use environment variables or the appropriate secure configuration mechanism.



Examples of secrets include:



\* Database passwords

\* API keys

\* Authentication secrets

\* Storage credentials

\* Private keys



Provide safe development configuration examples without real credentials.



\---



\## 18. Portability



Avoid unnecessary dependence on proprietary backend features.



Prefer:



\* PostgreSQL

\* Standard SQL where practical

\* REST

\* Standard HTTP semantics

\* Portable storage approaches



The backend should be replaceable without requiring a complete rewrite of the application.



\---



\## 19. Testing



Where practical, test:



\* Authentication

\* Authorization

\* Producer isolation

\* Duplicate prevention

\* Client creation

\* Policy creation

\* Validation

\* File authorization

\* Error handling



Security-related behavior should receive particular attention.



\---



\## 20. Definition of Done



Backend work is complete when:



\* The endpoint works correctly.

\* Input is validated.

\* Authorization is enforced.

\* Producer isolation is preserved.

\* Database changes are migrated.

\* Errors are handled safely.

\* Secrets are protected.

\* User-facing messages are in Spanish.

\* Technical identifiers remain in English.

\* No unnecessary vendor-specific dependency is introduced.



