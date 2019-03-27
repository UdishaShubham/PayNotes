export function getElement(selector: string) {
    browser.waitForExist(selector);
    return browser.element(selector);
}

export function elementExists(selector: string) {
    return browser.element(selector).isExisting();
}