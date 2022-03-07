const createNewSessionButton = () => cy.getBySelector('create-or-view-session');

const sessionList = () => cy.getBySelector('sessions-list');

const validateSessionInfo = name => {
    sessionList().contains(name);
}

module.exports = {
    createNewSessionButton,
    validateSessionInfo
}
