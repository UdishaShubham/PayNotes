import { When } from 'cucumber';
import LoginPage from '../pages/login';
import NotesPage from '../pages/notes';

When(
    /^I click on login button$/,
    LoginPage.login
)

When(
    /^I click on logout button$/,
    LoginPage.logout
)

When(
    /^I create note with header as "([^"]*)?" and text as "([^"]*)?"$/,
    NotesPage.createNote
)

When(
    /^I (cancel|close) the create note modal$/,
    NotesPage.closeModal
)

When(
    /^I delete the note$/,
    NotesPage.deleteNote
)