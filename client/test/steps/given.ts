import { Given } from 'cucumber';
import LoginPage from '../pages/login';

Given(
    /^I open "([^"]*)?"$/,
    LoginPage.open
);

Given(
    /^I set username as "([^"]*)?" and password as "([^"]*)?"$/,
    LoginPage.setValues
);