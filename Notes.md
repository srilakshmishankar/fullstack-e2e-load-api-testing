# Notes

#Test strategy for time tracking app

Based on test pyramid, we need to consider below tests for app and api
- Unit tests need to have high coverage (this is a simple app and can be 100%)
- Integration tests for api
- Contract testing (here can be between FE and BE, generally considered for complex microservices)
- FE functional tests can be tested in separation with api
- E2E functionality tests (main important flows so e2e tests do not have to be time consuming and covers regressions)

Other than the above we need to ensure non functional tests, cross browser testing (both functional and UI)

**Non-functional tests**
- Api response time
- Stress and load testing for api
- FE app response/ user experience
- Accessibility testing
- Visual regression testing

**Cross-browser testing**

We consider cross-browser testing based on market standards such as highly used browsers and as well client based data from analytics. OS and browser combination is very important.

Here I have tried to automate below tests for a few cases:
- Api integration tests (using jest and super-test)
- Api load tests (using k6)
- e2e tests (using cypress)

## Bugs found during test cycle:
**FE Issues**
- Add a session, view saved sessions, app crashes
- Start timer, instead of stopping click on reset. The save button is enabled and we can save the session.
- Can save session without name with just spaces
- In case during session we visit view saved session, the session is lost

**API Issues**
- No input validations
    - We can create session without any req body
    - We can send a string time which results in NaN
    - We can create a session with our own request parameters



## Test scenarios (written high level but with good coverage by trying to time box, can be best written on test management tool or excel)
Assumptions: acceptance criteria
1. 


## Acceptance criteria for Edit and Delete flow




PS:
While trying to timebox this task I tried to give a small gist of everything possible in terms of test strategy, process, tools and automation. Of course many things can be improved and based on priority, requirement, client info we can ensure overall high quality. If I had more time then I would try to automate everything here because it is possible and optimise test run times, parallel testing, optimise docker and CI/CD.
