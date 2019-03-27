import { Given } from 'cucumber';
import LoginPage from '../pages/login';
import NotesPage from '../pages/notes';

Given(
    /^I open "([^"]*)?"$/,
    LoginPage.open
);

Given(
    /^I set username as "([^"]*)?" and password as "([^"]*)?"$/,
    LoginPage.setValues
);

Given(
    /^I click on add new note$/,
    NotesPage.clickAdd
);