\# Database Development Instructions



\## 1. Purpose



PostgreSQL is the current database direction for the insurance producers application.



The database must preserve data integrity, producer isolation, maintainability, portability, and future scalability.



\---



\## 2. Language



Database technical identifiers must be in English.



Examples:



```text

producers

clients

policies

insurance\\\_companies

identification\\\_number

created\\\_at

updated\\\_at

```



Do not use Spanish table or column names.



Documentation describing the database should also use English technical terminology.



User-facing labels and messages remain in Spanish.



\---



\## 3. Fundamental Data Model



The conceptual model is:



```text

Producer

\&#x20;  │

\&#x20;  └── Client

\&#x20;         │

\&#x20;         └── Policy

\&#x20;                ├── Insurance Company

\&#x20;                ├── Product

\&#x20;                ├── Risk

\&#x20;                ├── Coverage

\&#x20;                ├── Payment

\&#x20;                └── Document

```



The exact schema is not yet finalized.



Do not create permanent tables or relationships based on assumptions that have not been approved.



\---



\## 4. Producer Isolation



Every client must belong to exactly one producer portfolio.



Producer ownership must be represented explicitly in the database.



The database design must prevent accidental cross-producer access at the application level and support appropriate constraints.



\---



\## 5. Client Uniqueness



A person may exist in multiple producer portfolios.



Example:



```text

Producer A → Client X

Producer B → Client X

```



These are independent records.



Duplicate prevention is therefore scoped to a producer.



The current conceptual uniqueness rule is:



```text

producer\\\_id

\\+

identification\\\_type

\\+

identification\\\_number

```



The exact implementation remains pending.



\---



\## 6. Client and Policy Separation



Do not merge clients and policies.



A client may have multiple policies.



Policy information must be stored at the policy level.



Examples of policy-level information may include:



\* Insurance company

\* Product

\* Policy number

\* Risk

\* Coverage

\* Premium

\* Payment information

\* Policy dates



Exact fields remain pending.



\---



\## 7. Insurance Companies



A producer can work with multiple insurance companies.



A client can have policies from multiple insurance companies.



Therefore:



```text

Client

\&#x20;  ├── Policy → Insurance Company A

\&#x20;  ├── Policy → Insurance Company B

\&#x20;  └── Policy → Insurance Company C

```



Do not store a single insurance company as a permanent client attribute.



\---



\## 8. Referential Integrity



Use appropriate:



\* Primary keys

\* Foreign keys

\* Unique constraints

\* Not-null constraints

\* Check constraints where appropriate

\* Indexes



Relationships must be explicit.



Avoid relying solely on application code for fundamental data integrity.



\---



\## 9. IDs



The final ID strategy remains pending.



The selected strategy must support:



\* Uniqueness

\* Safe API usage

\* Appropriate indexing

\* Portability

\* Scalability



Do not introduce a provider-specific ID system without explicit approval.



\---



\## 10. Timestamps



Where appropriate, entities should include timestamps such as:



```text

created\\\_at

updated\\\_at

```



The exact timestamp strategy remains subject to final schema design.



\---



\## 11. Migrations



All schema changes must be version controlled.



Never make undocumented production schema changes manually.



Migration files should clearly represent:



\* Creation

\* Modification

\* Removal

\* Constraints

\* Indexes



The project must maintain a reproducible database schema.



\---



\## 12. Sensitive Data



Do not store unnecessary sensitive information.



Do not store:



\* Plaintext passwords

\* Authentication secrets

\* API keys

\* Private storage credentials



Client information must be handled according to the project's security requirements.



\---



\## 13. Photographs and Documents



Do not use PostgreSQL as the primary binary file store unless a specific requirement justifies it.



Preferred model:



```text

PostgreSQL

\&#x20;   │

\&#x20;   └── File metadata/reference



Object Storage

\&#x20;   │

\&#x20;   └── Actual file

```



The final storage provider remains pending.



\---



\## 14. Development Data



Use synthetic development data only.



Never commit real:



\* Client names

\* Identification numbers

\* Addresses

\* Policy information

\* Photographs

\* Documents



\---



\## 15. Portability



Prefer PostgreSQL features that do not unnecessarily prevent future migration.



Use standard SQL concepts where practical.



Avoid designing the database around proprietary features of an infrastructure provider unless there is a clear and approved reason.



\---



\## 16. Indexing



Indexes should be created based on actual access patterns.



Potential future indexes may include:



\* Producer/client relationships

\* Client identification

\* Policy lookup

\* Policy number

\* Insurance company relationships



Do not add indexes blindly.



The final indexing strategy should follow the finalized schema and application workflows.



\---



\## 17. Schema Status



The detailed database schema is intentionally pending.



Before finalizing it, the project should define:



\* Client fields

\* Policy fields

\* Insurance company fields

\* Product fields

\* Risk fields

\* Coverage fields

\* Payment fields

\* Document metadata

\* Photograph metadata

\* Relationships

\* Required fields

\* Uniqueness rules

\* Deletion rules

\* Audit requirements

