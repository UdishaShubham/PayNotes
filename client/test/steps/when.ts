import { When } from 'cucumber';
import LoginPage from '../pages/login';

When(
    /^I click on login button$/,
    LoginPage.login
)

When(
    /^I click on logout button$/,
    LoginPage.logout
)