# Insurance Producers Application - AI Agent Instructions

## 1. Project Purpose

This repository contains a web application for insurance producers.

The application is initially intended for a single insurance producer and a single client portfolio, but the architecture must support multiple producers and independent portfolios from the beginning.

The application will allow insurance producers to manage clients, insurance policies, insurance companies, risks, coverages, payments, photographs, and documents.

The application must be simple enough for non-technical insurance producers while maintaining strong data integrity, security, portability, and maintainability.

---

## 2. Fundamental Principles

The following principles apply to all development decisions:

1. Data integrity has priority over convenience.
2. Security and producer-level data isolation are mandatory.
3. The application must remain maintainable by the project owner.
4. Avoid unnecessary vendor lock-in.
5. Prefer open standards and portable technologies.
6. Do not introduce unnecessary complexity.
7. The architecture must support future growth.
8. Do not make pending decisions permanent without explicit approval.
9. Do not invent requirements that have not been defined.
10. Do not introduce real client data into the repository or development environment.

---

## 3. Language Policy

The application user interface must be entirely in Spanish.

This includes:

* Navigation
* Buttons
* Forms
* Labels
* User-facing validation messages
* Error messages
* Notifications
* Empty states
* Help text
* Confirmation messages
* User-facing status information

Technical elements must remain in English unless explicitly required otherwise.

This includes:

* Source code
* Variables
* Functions
* Classes
* Components
* Database tables
* Database columns
* API routes and identifiers
* Types and interfaces
* Technical documentation
* Code comments
* Configuration identifiers
* AI agent instructions

User-entered data may naturally be in Spanish or another language.

The application is initially Spanish-only. A full internationalization architecture should not be introduced unless explicitly required.

When practical, user-facing strings should be centralized instead of unnecessarily hardcoded throughout components.

---

## 4. Technology Direction

Current technical direction:

### Frontend

* HTML
* CSS
* TypeScript
* Vite

React should not be introduced unless application complexity clearly justifies it.

### Backend

* Node.js
* TypeScript
* REST API

### Database

* PostgreSQL

### Object Storage

A dedicated object-storage service will be used for photographs and documents.

The final provider is still pending.

### Source Control

* Git
* GitHub

### AI Coding Assistant

* GitHub Copilot

---

## 5. Ownership and Vendor Lock-in

The project owner must retain control over:

* Source code
* Database
* Database schema
* Client data
* Policy data
* Photographs
* Documents
* Configuration
* Infrastructure
* Backups
* Migration procedures

Do not introduce proprietary structures that make migration unnecessarily difficult.

Prefer:

* PostgreSQL
* REST
* HTTP/HTTPS
* Standard file formats
* S3-compatible object storage where practical
* Version-controlled database migrations

The application must be designed so that infrastructure providers can be replaced in the future.

---

## 6. Producer and Portfolio Isolation

A producer owns and manages an independent portfolio.

Clients must never be shared or mixed between producers.

If the same person is a client of two different producers, the system must maintain two independent client records:

* One record belonging to Producer A
* One record belonging to Producer B

The system must not assume that a person is globally unique across all producers.

Duplicate prevention applies within the producer's portfolio.

The application must enforce producer-level authorization on the backend.

Frontend filtering alone is never sufficient for data isolation.

---

## 7. Clients and Policies

Do not combine client and policy information into one entity.

Conceptual model:

```text
Producer
   │
   └── Clients
          │
          └── Policies
                 ├── Insurance Company
                 ├── Product
                 ├── Risk
                 ├── Coverages
                 ├── Payments
                 └── Documents
```

A client belongs to exactly one producer portfolio.

A producer may work with multiple insurance companies.

A client may have policies or products from multiple insurance companies.

The insurance company is associated with the policy/product level, not as a fixed attribute of the client.

The exact database schema remains pending until the application workflows and required data fields have been fully defined.

---

## 8. Duplicate Prevention

The application must prevent accidental duplicate clients within the same producer portfolio.

The conceptual uniqueness rule is expected to involve:

```text
Producer + Identification Type + Identification Number
```

The exact uniqueness rules must be confirmed before implementing the final database constraints.

The system should validate duplicates at multiple levels where appropriate:

* Frontend
* Backend
* Database

Database constraints must provide the final integrity guarantee.

---

## 9. Photographs and Documents

Photographs and documents must not be stored in:

* GitHub
* Source-code repositories
* Database binary fields unless explicitly justified

The preferred architecture is:

```text
PostgreSQL
    │
    └── Stores metadata and references

Object Storage
    │
    └── Stores actual files
```

The database should store appropriate metadata and references to stored objects.

Documents may include:

* Identity documents
* Policy documents
* Insurance documentation
* Other client-related files

Access to files must be authorized through the backend.

Files must not become publicly accessible merely because their URLs are known.

---

## 10. Image Optimization

Images should be optimized before upload when possible.

The initial design may use approximately:

```text
Maximum dimension: 1600 x 1600 pixels
```

This is an initial reference, not a final immutable requirement.

Optimization may include:

* Resizing
* Compression
* Format conversion

Identity documents must remain sufficiently legible.

PDF files must remain PDFs unless an explicit requirement states otherwise.

Exact image-size, compression, and format rules remain pending.

---

## 11. Security

Security requirements include:

* HTTPS
* Secure authentication
* No plaintext passwords
* Backend authorization
* Producer-level data isolation
* Backend validation
* Protected file access
* Protected secrets
* No sensitive credentials in Git
* No sensitive client data in Git
* No sensitive client data in logs
* Secure error handling

Secrets must be supplied through appropriate environment/configuration mechanisms.

Never hardcode credentials, API keys, database passwords, tokens, or private keys.

---

## 12. Backend Rules

The backend is responsible for:

* Authentication
* Authorization
* Data validation
* Business rules
* Producer isolation
* Database access
* File access control
* API responses

Never trust the frontend to enforce security rules.

All sensitive operations must be validated server-side.

API responses must not expose unnecessary sensitive information.

---

## 13. Database Rules

PostgreSQL is the current database direction.

Database design must prioritize:

* Referential integrity
* Appropriate constraints
* Clear relationships
* Appropriate indexes
* Data normalization where appropriate
* Version-controlled migrations
* Portable SQL where practical

Do not create schema elements based on assumptions that have not been approved.

---

## 14. Development Data

Development and test environments must use synthetic data.

Never commit:

* Real client names
* Real identification numbers
* Real addresses
* Real policy information
* Real photographs
* Real documents
* Production credentials
* Production API keys

---

## 15. Frontend Principles

The application is designed for insurance producers who may not be technically experienced.

The UI should therefore favor:

* Simple navigation
* Large, clear buttons
* Clear labels
* Few simultaneous choices
* Straightforward forms
* Strong validation
* Clear error messages in Spanish
* Confirmation before destructive operations
* Consistent layouts

Avoid unnecessary visual complexity.

---

## 16. Scalability

The first implementation may serve one producer, but the architecture must not assume that only one producer will ever exist.

Do not create global client data structures that prevent producer isolation.

Do not hardcode a single producer into the application architecture.

The system should be capable of adding additional producers without redesigning the fundamental data model.

---

## 17. Portability and Migration

The project must maintain a practical migration path.

Future migration should allow the project owner to export:

* Database data
* Database schema
* Photographs
* Documents
* Configuration information
* Application source code

The application should not depend unnecessarily on proprietary data formats.

---

## 18. Pending Decisions

When a requirement is not yet defined, mark it as pending.

Do not silently select a provider, architecture, database structure, authentication mechanism, or business rule merely because it is convenient.

Pending decisions are documented in:

```text
.github/instructions/pending-decisions.md
```

---

## 19. Initial Repository Structure

```text
insurance-producers-app/
├── .github/
│   ├── copilot-instructions.md
│   └── instructions/
│       ├── frontend.instructions.md
│       ├── backend.instructions.md
│       ├── database.instructions.md
│       ├── security.instructions.md
│       └── pending-decisions.md
├── docs/
│   ├── architecture.md
│   ├── database.md
│   ├── security.md
│   ├── deployment.md
│   └── roadmap.md
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── clients/
│   │   └── policies/
│   ├── services/
│   ├── types/
│   ├── css/
│   └── main.ts
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 20. Agent Behavior

Before implementing a feature:

1. Identify the affected layer.
2. Check existing architecture and instructions.
3. Check pending decisions.
4. Avoid introducing unnecessary dependencies.
5. Preserve existing functionality.
6. Maintain security and data isolation.
7. Keep technical identifiers in English.
8. Keep all user-facing text in Spanish.
9. Document important architectural decisions.
10. Do not make pending decisions permanent without approval.

---

## 21. Definition of Done

A feature is not considered complete merely because it works visually.

Where applicable, completion includes:

* Frontend implementation
* Backend implementation
* Validation
* Authorization
* Database changes
* Database migration
* Error handling
* Security considerations
* Documentation
* Tests where appropriate
* Spanish user-facing text
* English technical identifiers
* No unnecessary vendor lock-in
* No unresolved security issues
