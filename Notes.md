# Notes

#Test strategy for time tracking app

Based on test pyramid, we need to consider below tests for app and api
- Unit tests need to have high coverage
- Integration tests for api
- FE functional tests can be tested in separation with api
- E2E functionality tests (main important flows so e2e tests do not have to be time consuming and covers regressions)

Other than the above we need to ensure non functional tests, cross browser testing (both functional and UI)

Non-functional tests
- Api response time
- Stress testing for api
- FE app response/ user experience

Cross-browser testing
We consider cross-browser testing based on market standards such as highly used browsers and as well client based data from analytics. OS and browser combination is very important.

Here I have tried to automate below tests for a few cases:
- Api integration tests (using jest and super-test)
- Api load tests (using k6)
- e2e tests (using cypress)

## Bugs found during test cycle:



## Test scenarios (written high level but with good coverage by trying to time box, can be best written on test management tool or excel)
Assumptions: acceptance criteria
1. 


## Acceptance criteria for Edit and Delete flow
