# Originality Charter

Persian RTL UI is intentionally designed from user and developer problems found in Persian products.

We do not copy component catalogs, visual systems, naming schemes, or documentation structures from other UI libraries.

The differentiating layer is the domain model:

- Persian and Arabic digit normalization
- Iranian currency semantics
- Iranian mobile number handling
- Iranian national ID validation
- Jalali calendar behavior
- RTL/LTR direction without forcing the application into a single language

When an established low-level dependency is used, it is consumed as infrastructure. Its API and implementation are not reproduced inside this repository.

New components should answer a concrete Persian web problem before they are accepted into the library.