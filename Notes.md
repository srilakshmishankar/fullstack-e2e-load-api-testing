# Notes

## Test strategy for time tracking app

Based on test pyramid, we need to consider below tests for app and api
- Unit tests need to have high coverage (this is a simple app and can be 100%)
- Integration tests for api (full functionality)
- Contract testing (here can be between FE and BE, generally considered for complex microservices)
- FE functional and ui component tests can be tested in separation with api
- E2E functionality tests (main important flows so e2e tests do not have to be time consuming and covers regressions)

Other than the above we need to ensure non functional tests, cross browser testing (both functional and UI)

**Non-functional tests**
- Api response time
- Stress and load testing for api
- FE app response/ user experience (does the create and list session work fast and accurately)
- Accessibility testing
- Visual regression testing

**Cross-browser testing**

We consider cross-browser testing based on market standards such as highly used browsers and as well client based data from analytics. OS and browser combination is very important.

Here I have tried to automate below tests for a few cases:
- Api integration tests (using jest and super-test) -> /api-tests 
Covers GET and POST for negative and positive tests
- Api load tests (using k6) --> /load-tests
Ramping number of users on the api and checking the performance
- e2e tests (using cypress) --> /cypress
e2e critical or important user scenarios covering api and FE, generally preconditions set using api to save time
Also added data-cy locators to app for fast and reliable UI element locating


## Bugs found during test cycle:
**FE Issues**

1. Create session flow
Steps: start and stop the timer and enter session name and click save, click on ok on pop up, app crashes --> Critical (Cypress test automated)
However session is saved, so this is a FE error handling issue
Logs for reference

<img width="1785" alt="Screenshot 2022-03-08 at 02 34 17" src="https://user-images.githubusercontent.com/46483554/157180598-a7940da2-fec7-41f7-a24f-9532de0b9d52.png">
- Reset timer button click enables save
Steps: Start timer, click on reset. The save button is enabled and we can save the session. Save button should not be enabled and on clicking reset and we should not abe able to save session because session is in progress but is allowed--> Major (Cypress test automated)

2. Can save session without name with just spaces. Validation would be good here. Even a validation for max character limit is good to have. --> Minor (depending on criteria)
Steps: Start and stop a session.In session name field enter space characters. Also next trying to save a very long name --> No validations here

3. In case during session we visit view saved session, the session so far tracked is lost --> Major
Steps: Start a session and click on view saved session and the session inprogress is lost. Here an alert message or tracking in background would be better.

**API Issues**

4. No input validations (falls under one category of bugs)
    - We can create session without any req body
    - We can send a string time which results in NaN in the client
    - We can create a session with our own request parameters like name, age etc

5. Performance issue:
Through load testing I added a lot of sessions --> Api response is fast enough but UI response to display them is bad --> Takes more than 30 seconds to display a huge list

**Other observations** 

On safari browser, when session is created it gets saved in a different format.
Chrome, firefox: Tue Mar 08 2022 00:59:45 GMT+0100 (Central European Standard Time)
Safari: Tue Mar 08 2022 01:45:17 GMT+0100 (CET)
This can be confusing (May be its how browsers do it but we can make this uniform on the BE and display it on FE)

Edge cases: 
If timezone changes between session tracking
Acceptance criteria regrading browser close is not clear --> should the session be running?
During session save, if network is down or server is down --> we can implement cache mechanism and sync when server or network is up so session is not lost

## Acceptance criteria for Edit, Delete and Search flow
#### We want to allow users to edit and delete existing sessions. Regarding the editing functionality they should be able to change an existing session name and duration.

- As a user I should be able to edit an existing session from the list of sessions.

  - PUT endpoint implementation
  - User should be able to edit the name of the session and save 
  - Edit the session name should not allow to save empty or space characters
  - User should be able to edit the duration of the session as per below
    - User should be able to start the session and the time should resume from the previously recorded time
    - User should be able to reset the session and start a new session
  - User should be able to cancel editing from the edit screen
  - User should be able to see the edited details on the sessions list
  - User should see validations on crossing character limit for the session name
  - After editing and click browser back should not remove edited data or should not go back to previous state
  - Edit button should be accessible

- As a user I should be able to delete an existing session from the list of sessions.
  
  - Delete endpoint implementation
  - Deleted session should not be listed on the sessions list.
  - Delete the session, press browser back button. Go back to sessions list, the deleted session should not show up 
  - Confirmation pop up should be displayed when delete button is clicked
  - After Delete user should land on session list screen
  - Delete button should be accessible
  - Error handling when server or network is down
  - If user deletes all sessions or had one session and deletes it then should land on empty list screen/ui

#### We want to allow users to search for sessions in the list. They should be able to search by name or duration.

- As a user I should be able to search the sessions from the sessions list

  - New GET endpoint with search text as parameter
  - There should be a search text box to type
  - User should be able to search sessions by session name
    - All the matching sessions containing the name should be filtered and listed
    - On deleting/adding letters, the matching sessions should be updated accordingly
    - The search results should have option to edit and delete the session
  - User should be able to search sessions by session duration
    - All the sessions matching session duration should be displayed
    - On deleting/adding letters, the matching sessions should be updated accordingly
    - The search results should have option to edit and delete the session
  - Search should not filter based on timestamp
  - Pagination if lot of search results are filtered (for example more than 20)
  - After edit/delete in filtered list, should be back to filtered search list
  - Search with cmd/ctrl+F should still work
  - Search bar should be accessible 
  - Empty search results UI should be displayed when no results for searched value

Test strategy for new features as per defined in the beginning to align with acceptance criteria

- Test according to pyramid for BE and FE
- There will be BE api endpoints which need functionality, performance and integration testing
- For new endpoints - 200, 500 and 404 and 201 if applicable (no 401 because no authentication here)
- FE testing for new UI components, UI display of the BE rendered data, user experience,
- E2E feature testing

## How to run the automated tests

### Pre-requisites

- Make sure that api and client servers are running. Use the following command to run them:
  `make build`

### Running the API tests

- To run the API tests locally, run the following command:
  `make api-tests-local`

- To run the API tests on docker, run the following command:
  `make api-tests-docker`

### Running the Cypress tests

- To run the Cypress tests locally, run the following command:
  `make e2e-tests-local`

- To run the Cypress tests on docker, run the following command:
  `make e2e-tests-docker`

### Running the Api load tests

- To run the load tests on docker, run the following command:
  `make load-tests-docker`

### CI/CD and reporting
- Github actions : https://github.com/srilakshmishankar/sri-tech-challenge-qa/actions/runs/1948715085

<img width="1787" alt="Screenshot 2022-03-08 at 02 41 37" src="https://user-images.githubusercontent.com/46483554/157178609-561f671a-ac43-4040-9ed7-a7409d38e7a6.png">

- Circleci: https://app.circleci.com/pipelines/github/srilakshmishankar/sri-tech-challenge-qa/7/workflows/b3cfb2d2-189e-403a-b421-95182de6a6cd

<img width="1508" alt="Screenshot 2022-03-08 at 02 40 32" src="https://user-images.githubusercontent.com/46483554/157178640-977be2b2-1a15-443c-aa55-ad422a64a114.png">

- Interactive Reports for api,e2e and load-tests
https://19-466257621-gh.circle-artifacts.com/0/cypress/reports/index.html

<img width="1781" alt="Screenshot 2022-03-08 at 02 20 05" src="https://user-images.githubusercontent.com/46483554/157178746-baa1f581-cf14-488d-91b3-9f766771e38c.png">

  https://21-466257621-gh.circle-artifacts.com/0/api-tests/reports/index.html

<img width="1780" alt="Screenshot 2022-03-08 at 02 18 04" src="https://user-images.githubusercontent.com/46483554/157178766-052876ff-3196-448b-beb7-b44f0e08a9a6.png">

All the test-reports are available locally in results folder as well

While trying to timebox this task I tried to give a small gist of everything possible in terms of test strategy, process, tools and automation. Of course many things can be improved and based on priority, requirement, client info we can ensure overall high quality. If I had more time then I would try to automate everything here because it is possible and optimise test run times, parallel testing, linting, optimise docker and CI/CD.

Tools and frameworks chosen based on experience and suitability for the task, Github actions used for the 1st time so can be much better.
