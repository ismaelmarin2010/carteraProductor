\# Pending Project Decisions



This document records project decisions that have not yet been finalized.



AI agents and developers must not silently convert these items into permanent architectural decisions.



When a pending decision is resolved, update this document and the relevant technical documentation.



\---



\## 1. Backend Hosting Provider



Current direction:



```text

Node.js + TypeScript + REST API

```



The final hosting provider has not yet been selected.



Fly.io has been considered, but it is not a final decision.



\---



\## 2. PostgreSQL Hosting Provider



PostgreSQL is the selected database technology direction.



The final hosting provider has not yet been selected.



The provider must be evaluated based on:



\* Cost

\* Reliability

\* Backup options

\* Security

\* Portability

\* Ease of migration

\* Operational complexity



\---



\## 3. Object Storage Provider



Photographs and documents will be stored separately from the database.



The final object-storage provider has not yet been selected.



Prefer an S3-compatible solution where practical to reduce vendor lock-in.



\---



\## 4. Authentication Provider



The application requires:



\* Login

\* Password authentication

\* Secure session/token handling

\* Producer-level authorization



The final authentication provider has not yet been selected.



\---



\## 5. Domain



The production domain has not yet been selected.



\---



\## 6. Database Schema



The conceptual model has been established, but the detailed schema remains pending.



Before implementation, define:



\* Producers

\* Clients

\* Policies

\* Insurance companies

\* Products

\* Risks

\* Coverages

\* Payments

\* Documents

\* Photographs

\* Relationships

\* Required fields

\* Constraints

\* Deletion behavior

\* Audit requirements



\---



\## 7. Client Duplicate Rule



Current conceptual rule:



```text

Producer

\+

Identification Type

\+

Identification Number

```



The exact business rule still needs confirmation.



Considerations include:



\* Which identification types are supported?

\* Can identification numbers be absent?

\* Can a producer have clients without an identification number?

\* How should duplicate warnings work?

\* Which fields should participate in secondary duplicate detection?



\---



\## 8. ID Strategy



The final database identifier strategy has not been selected.



Potential approaches may include:



\* UUID

\* Identity/integer IDs

\* Another PostgreSQL-compatible strategy



The selected solution must consider:



\* Security

\* Performance

\* Portability

\* API usage

\* Scalability



\---



\## 9. Image Processing Rules



Initial reference:



```text

Maximum dimension: approximately 1600 x 1600 pixels

```



Still pending:



\* Exact maximum file size

\* Exact maximum dimensions

\* Supported formats

\* Compression quality

\* Thumbnail strategy

\* Whether processing occurs entirely client-side or partially server-side



Identity documents must remain legible.



\---



\## 10. File Retention and Deletion



Still pending:



\* File retention rules

\* Deletion behavior

\* Soft delete vs hard delete

\* Recovery period

\* Storage lifecycle rules



\---



\## 11. Backup Strategy



Still pending:



\* Database backup frequency

\* File backup strategy

\* Retention

\* Recovery procedure

\* Disaster recovery requirements

\* Restoration testing



\---



\## 12. Audit Requirements



Still pending:



\* Which operations require auditing

\* Whether client changes must be recorded

\* Whether policy changes must be recorded

\* How long audit records should be retained



\---



\## 13. Application Internationalization



The initial application language is Spanish only.



The following is already established:



```text

User Interface → Spanish

User-facing errors → Spanish



Source code → English

Technical identifiers → English

Database identifiers → English

API identifiers → English

Technical documentation → English

AI agent instructions → English

```



A full multi-language/internationalization architecture is not currently required.



If additional languages become a future requirement, the architecture can be revisited at that time.



\---



\## 14. Frontend Framework



Current direction:



```text

HTML + CSS + TypeScript + Vite

```



React is not currently required.



The decision may be revisited if application complexity increases significantly.



\---



\## 15. Storage Architecture



Current conceptual architecture:



```text

PostgreSQL

&#x20;   └── Metadata and references



Object Storage

&#x20;   └── Photographs and documents

```



The exact implementation remains pending.



\---



\## 16. Deployment Architecture



Current conceptual architecture:



```text

Browser

&#x20;  │ HTTPS

&#x20;  ▼

Frontend

&#x20;  │ HTTPS / REST API

&#x20;  ▼

Backend

&#x20;  │

&#x20;  ├───────────────┐

&#x20;  ▼               ▼

PostgreSQL     Object Storage

```



The final deployment providers and configuration remain pending.



\---



\## 17. Migration Procedure



The project must eventually document how to migrate:



\* Source code

\* Database schema

\* Database data

\* Photographs

\* Documents

\* Configuration



The detailed migration procedure remains pending.



\---



\## 18. Cost Strategy



The project should minimize recurring costs during the initial stage while avoiding architecture that creates unnecessary vendor lock-in.



The final provider selection should consider:



\* Free tiers where appropriate

\* Initial monthly cost

\* Growth cost

\* Storage cost

\* Database cost

\* Bandwidth cost

\* Backup cost

\* Migration difficulty



\---



\## 19. Decisions That Must Not Be Assumed



Until explicitly resolved, agents must not assume:



\* A specific backend provider

\* A specific PostgreSQL provider

\* A specific object-storage provider

\* A specific authentication provider

\* A final database schema

\* A final image-processing policy

\* A final backup policy

\* A final audit policy

\* A final domain

\* A final ID strategy



Temporary development choices must be clearly identified as temporary.



\---



\## 20. Decision Process



When a pending decision becomes necessary for implementation:



1\. Identify the decision.

2\. Explain the relevant technical implications.

3\. Present viable options when appropriate.

4\. Make the decision explicit.

5\. Update this document.

6\. Update the affected technical documentation.

7\. Update implementation instructions if necessary.



Do not silently resolve pending architectural decisions.



