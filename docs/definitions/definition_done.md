---
sidebar_position: 2
---

# Definition of Done

The definition of Done (DoD) is when all conditions or acceptance criteria that a software product must satisfy are met and ready to be accepted by the user or software customer. 

It is necessary to ensure software quality, since user stories which don't met these criteria are not promoted to the final increment.

### Pass tests

All implemented working software must pass implemented tests in order to be released. 

If any of the implemented tests fail, then the integration is prevented and its release is postponed until the necessary criteria are met. 

### Sonarcloud's Quality Gates

All developed code should pass the defined quality gates. The quality gate defines that:

- Coverage is less than 80.0%
- Duplicated Lines is greater than 3.0%
- Maintainability Rating is worse than A
- Reliability Rating is worse than A
- Security Hotspots Reviewed is less than 100%
- Security Rating is not worse than A

If one or more conditions are true, the the quality gate **fails**. Otherwise, it **passes**.

### Peer Review

All developed code should be reviewed by another team member, one that has not implemented the code to be reviewed.

### Comply with Acceptance Criteria

All developed code should be in accordance to the defined Acceptance Criteria, which is specified in each recorded user story (available in a user story's description).

### Documented

All changes and implementations, as well as the description of each sprint accomplishments should be documented in this website.
