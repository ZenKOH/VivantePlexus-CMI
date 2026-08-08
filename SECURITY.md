# Security policy

## Prototype scope

This repository contains a research/product-development prototype. It is not approved for clinical deployment and should not be used to store identifiable patient information.

## Data handling

- Do not commit personal health information, credentials, access tokens, private keys or production configuration.
- Use only synthetic or appropriately de-identified data in examples and tests.
- The current browser prototype stores session events in memory only.

## Production requirements

Before clinical or enterprise deployment, implement and independently review at minimum tenant isolation, role-based access control, MFA/OIDC authentication, encryption in transit and at rest, auditable access/export logs, backup/restore testing, secrets management, dependency/SBOM monitoring, security incident handling, and jurisdiction-specific privacy/retention controls.

A production verification plan should use a recognised application security standard such as OWASP ASVS.

## Reporting vulnerabilities

Report security issues privately to the repository owner rather than opening a public issue with exploitable details.
