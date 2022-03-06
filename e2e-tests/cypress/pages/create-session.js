const {
    clickOn,
    validateAlertMessage,
    validateButtonEnabled,
    validateText,
    waitFor
} = require('./common');

const visitPage = () => {
    cy.visit('/');
};

const validateTextOnHomePage = () => {
    validateText({selector: 'display-header', text: 'Time Tracking Application'});
    validateText({selector: 'new-session-text', text: 'New Session'});
};

const startButton = () => cy.getBySelector("start-button");

const stopButton = () => cy.getBySelector("stop-button");

const resetButton = () => cy.getBySelector("reset-button");

const saveButton = () => cy.getBySelector("save-button");

const viewSavedSessionsButton = () => cy.getBySelector("create-or-view-session");

const enterSessionName = name => {
    cy.getBySelector("session-name-text-box").clear().type(name);
}

const create = name => {
    enterSessionName(name);
    clickOn(startButton());
    waitFor(1000);
    clickOn(stopButton());
    validateButtonEnabled(saveButton());
    clickOn(saveButton());
    validateAlertMessage('Your session has been saved!');
};

module.exports = {
    create,
    enterSessionName,
    resetButton,
    saveButton,
    startButton,
    stopButton,
    validateTextOnHomePage,
    viewSavedSessionsButton,
    visitPage
}
