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
    /^I expect the note to be created$/,
    NotesPage.verifyNewNote
);

Then(
    /^I expect the create note modal to close$/,
    NotesPage.verifyModalClosed
);

Then(
    /^I expect create note modal to open$/,
    NotesPage.verifyModalOpened
);