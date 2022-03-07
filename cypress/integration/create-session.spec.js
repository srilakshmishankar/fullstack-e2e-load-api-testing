const session = require('../pages/create-session');
const {clickOn, validateButtonDisabled, waitFor} = require('../pages/common');

describe('create a session', () => {
    beforeEach(()=>{
        session.visitPage();
        session.validateTextOnHomePage();
    });

    it('should be able to create a session successfully', () => {
        session.create('Session1');
    });

    it('save button should be disabled when the user tries to reset when the session is ongoing', () => {
        session.enterSessionName('Session2');
        clickOn(session.startButton());
        waitFor(2000);
        clickOn(session.resetButton());
        validateButtonDisabled(session.saveButton());
    });
})
