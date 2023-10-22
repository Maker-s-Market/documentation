---
sidebar_position: 3
---

# Definitions

## Definition of Ready

The Definition of Ready (DoR) consists of defining whenever a task is ready to be executed by the development team. 

Without criteria set by the DoR, the team should not start a task in the backlog.

### Small

The defined user stories should be as small as possible and be individual from each other.

### Independent

The defined user stories should be independent from each other, as in, a change in one user story should not affect the development or readiness of another.

### Testable

All user stories should be testable, as in there is an effective way to determine if the functionality works as expected. The acceptance criteria should assure that each user story is testable.

### Estimated Cost

All user stories should have an estimated cost, as in, the cost of implementation of each story. Our costs are based in the following fibonacci scale.

| Story Points | Effort Required | Time Required | 
| :--: | :-------------: | :-----------: | 
| 1 | Mininum effort | A few minutes | 
| 2 | Mininum effort | A few hours | 
| 3 | Mild effort | A day | 
| 5 | Moderate effort | A few days | 
| 8 | Severe effort | A week | 
| 13 | Maximun effort | A month | 

Our backlog is also sorted in order of importance, as in, the first elements in the backlog are our priority and consist of the most value to the user. Therefore, our sprints encompass the first elements available in the backlog.

## Definition of Done

The definition of done (DoD) is when all conditions or acceptance criteria that a software product must satisfy are met and ready to be accepted by the user or software customer. 

It is necessary to ensure software quality, since user stories which don't met these criteria are not promoted to the final increment.

### Pass tests

All implemented working software must pass implemented tests in order to be released. 

If any of the implemented tests fail, then the integration is prevented and its release is postponed until the necessary criteria are met. 

### Sonalcloud's Quality Gates

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
