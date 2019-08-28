const pauseExecution = (milliSeconds)=> {
    browser.pause(milliSeconds);
}

const setTextField = (selector,value)=> {
    browser.setValue(selector,value);
}

const getBrowserTitle = () => {
    return browser.getTitle();
}

const getCurrentUrl = ()=> {
    return browser.getUrl();
}

const browserMaximize = ()=> {
    browser.maximizeWindow();
}


const getWindowSize = (x,y) =>{
    browser.getWindowSize(x,y);
}

const setWindowSize= (x,y)=> {
    browser.setWindowSize(x,y);
}

const setWindowPosition = (x,y)=> {
    browser.setWindowPosition(x,y);
}

const navigateToURL = (url)=>{
    browser.navigateTo(url);
}

const navigateBack = ()=> {
    browser.back();
}

const navigateForward = ()=> {
    browser.forward();
}

const refreshBrowser = ()=> {
    browser.refresh();
}

const switchWindow = (windowName)=> {
    browser.getWindowHandles();
    browser.switchToWindow(windowName);
}

const switchToTab = () => {

}

const verifyIsFocused = (selector) => {
    return browser.isFocused();
}

const verifyElementExisting = (selector) => {
   return browser.isExisting(selector); 
}

const verifyAlertOpen = () => {
    return browser.isAlertOpen();
}

const verifyEnabled = (selector)=> {
   return browser.isElementEnabled(selector)
}

const verifyElementEnabled = (selector) => {
    return browser.isEnabled(selector);
}

const verifyCheckboxSelected = (selector)=> {
    return browser.isSelected(selector);
}

const verifybrowserLoading = ()=> {
    return browser.isLoading();
}

const verifyElementDisplayed = (selector)=> {
    return browser.isDisplayed(selector);
}

const verifyElementDisplayedViewport = (selector) => {
    return browser.isDisplayedInViewport(selector);
}


const verifyElementVisible = (selector) => {
    return browser.isVisible(selector);
    
}

const waitUntilElement = () => {
    browser.waitUntil
}

const waitForElement = () => {
   
}

const getbrowserViewportSizeWidth = ()=> {
    width = browser.getViewportSize("width");
    return width;
}

const getbrowserViewportSizeHeight = ()=> {
    height = browser.getViewportSize("height");
    return height;
}

const setbrowserViewport = (width,height) {
    browser.setViewportSize({
        width,
        height
    });
}

const getElementText = (selector)=> {
    return browser.getText(selector);
}