/* eslint-disable cypress/no-unnecessary-waiting */

const clickOn = element => {
    element.click();
};

const validateText = ({selector, text}) => {
    cy.getBySelector(selector)
        .should('be.visible')
        .should('have.text',text);
};

const validateAlertMessage = text => {
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains(text);
    })
};

const validateButtonEnabled = button => {
    button
        .should('be.enabled');
}

const validateButtonDisabled = button => {
    button
        .should('not.be.enabled');
}

const waitFor = timeInMillis => {
    cy.wait(timeInMillis);
};

module.exports = {
    clickOn,
    validateAlertMessage,
    validateButtonDisabled,
    validateButtonEnabled,
    validateText,
    waitFor
};
