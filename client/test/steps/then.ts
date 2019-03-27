import { Then } from 'cucumber';
import LoginPage from '../pages/login';
import NotesPage from '../pages/notes';

Then(
    /^I expect the title to be "([^"]*)?"$/,
    LoginPage.checkTitle
);

Then(
    /^I expect to (login|logout) and the url to be "([^"]*)?"$/,
    LoginPage.afterLogin
);

Then(
    /^I expect the note to be created with header as "([^"]*)?"$/,
    NotesPage.verifyNote
);

Then(
    /^I expect the create note modal to close$/,
    NotesPage.verifyModalClosed
);

Then(
    /^I expect (create|edit) note modal to open$/,
    NotesPage.verifyModalOpened
);

Then(
    /^I expect the note to be deleted$/,
    NotesPage.verifyDeleteNote
);

Then(
    /^I expect the edit button to appear$/,
    NotesPage.verifyEditButton
);