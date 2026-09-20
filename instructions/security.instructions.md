\# Security Instructions



\## 1. Purpose



Security is a fundamental requirement of the insurance producers application because the system will contain client information, policy information, photographs, and documents.



Security must be considered at the architecture, backend, database, frontend, infrastructure, and operational levels.



\---



\## 2. Core Security Principles



Apply:



\* Least privilege

\* Defense in depth

\* Secure defaults

\* Server-side validation

\* Explicit authorization

\* Secure secret management

\* Producer-level isolation

\* Protected file access

\* Minimal sensitive logging



\---



\## 3. Authentication



Users must authenticate before accessing protected application functionality.



The final authentication provider remains pending.



Passwords must never be stored in plaintext.



Do not implement custom authentication unnecessarily when a secure established solution is available.



\---



\## 4. Authorization



Authentication does not provide authorization by itself.



The backend must verify that the authenticated user is authorized to access every protected resource.



Authorization must be checked for:



\* Clients

\* Policies

\* Documents

\* Photographs

\* Insurance information

\* Other producer-owned resources



\---



\## 5. Producer Isolation



A producer must never access another producer's portfolio.



Example:



```text

Producer A

&#x20;   └── Client A



Producer B

&#x20;   └── Client B

```



Producer A must not be able to retrieve Client B by manipulating:



\* URL parameters

\* IDs

\* API requests

\* Form data

\* Browser requests



The backend must enforce this isolation.



\---



\## 6. Frontend Is Not a Security Boundary



Do not rely on:



\* Hidden buttons

\* Disabled controls

\* Frontend filtering

\* JavaScript checks

\* UI restrictions



for security.



Any user can manipulate browser requests.



Security rules must be enforced server-side.



\---



\## 7. Secrets



Never commit secrets to GitHub.



This includes:



\* Passwords

\* API keys

\* Authentication secrets

\* Database credentials

\* Storage credentials

\* Private keys

\* Tokens



Use secure environment configuration.



Provide example configuration files containing placeholders only.



\---



\## 8. HTTPS



All production communication must use HTTPS.



This applies to:



```text

Browser

&#x20;  ↓ HTTPS

Frontend



Frontend

&#x20;  ↓ HTTPS

Backend



Backend

&#x20;  ↓ Secure connection

Database / Object Storage

```



\---



\## 9. Database Security



The database must not be directly accessible from the public browser.



The backend is the database access layer.



Use:



\* Parameterized queries

\* Appropriate permissions

\* Secure credentials

\* Connection encryption where supported

\* Principle of least privilege



\---



\## 10. File Security



Photographs and documents may contain sensitive information.



They must not automatically become public.



The application should use controlled access through the backend or an appropriately secured signed-access mechanism.



The final storage architecture remains pending.



\---



\## 11. File Validation



Uploaded files should be validated for:



\* File type

\* File size

\* Extension

\* Content where appropriate



Do not trust the filename or browser-provided MIME type alone.



\---



\## 12. Image Processing



Images may be resized or compressed before storage.



Initial reference:



```text

Maximum dimension: approximately 1600 x 1600 pixels

```



Identity documents must remain readable.



Exact processing limits remain pending.



\---



\## 13. Logging



Logs must not unnecessarily contain:



\* Identification numbers

\* Passwords

\* Authentication tokens

\* Private document URLs

\* Sensitive client information

\* Storage credentials



Use technical identifiers and contextual information where possible.



\---



\## 14. Error Messages



User-facing errors must be written in Spanish.



They should provide useful information without exposing internal technical details.



For example:



```text

Good:

"No fue posible guardar el cliente. Intente nuevamente."



Avoid exposing:

"PostgreSQL error: relation clients violates..."

```



Detailed technical information may be available in protected internal logs where appropriate.



\---



\## 15. Repository Security



The GitHub repository must not contain:



\* Real client data

\* Real photographs

\* Real documents

\* Production credentials

\* API keys

\* Database passwords

\* Private certificates

\* Sensitive configuration



Git history must also be treated as sensitive because deleted secrets may remain accessible in previous commits.



\---



\## 16. Dependency Security



Avoid unnecessary dependencies.



Dependencies should be:



\* Justified

\* Maintained

\* Appropriate for the application

\* Reviewed for security concerns



Do not add a library solely to perform functionality that can be safely implemented with existing platform capabilities when the additional dependency provides no meaningful benefit.



\---



\## 17. Backups and Recovery



The production database and stored files must eventually have an appropriate backup strategy.



The final backup provider and retention policy remain pending.



A backup is only useful if the restoration process is understood and tested.



\---



\## 18. Security by Layer



Security should exist across:



```text

Browser

&#x20;  │

&#x20;  ▼

Frontend

&#x20;  │

&#x20;  ▼

Backend

&#x20;  │

&#x20;  ├── Authentication

&#x20;  ├── Authorization

&#x20;  ├── Validation

&#x20;  │

&#x20;  ▼

PostgreSQL



Backend

&#x20;  │

&#x20;  ▼

Object Storage

```



No individual layer should be treated as the only security control.



