const {nanoid} = require('nanoid')
const session = require('../pages/create-session');
const listSessions = require('../pages/list-sessions');
const {clickOn} = require('../pages/common');

describe('list sessions', () => {
    let sessionName;
    beforeEach(()=>{
        sessionName = `Session-${nanoid()}`;
        cy.createSession(sessionName);
        session.visitPage();
        session.validateTextOnHomePage();
    });

    it('should list the session that was created', () => {
        clickOn(session.viewSavedSessionsButton());
        listSessions.validateSessionInfo(sessionName);
    });
})
