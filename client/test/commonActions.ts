export function getElement(selector: string) {
    browser.waitForExist(selector);
    return browser.element(selector);
} 