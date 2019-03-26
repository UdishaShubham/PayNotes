import { Then } from 'cucumber';
import LoginPage from '../pages/login';

Then(
    /^I expect the title to be "([^"]*)?"$/,
    LoginPage.checkTitle
);

Then(
    /^I expect to (login|logout) and the url to be "([^"]*)?"$/,
    LoginPage.afterLogin
);