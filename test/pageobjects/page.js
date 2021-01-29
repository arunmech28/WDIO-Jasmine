
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     *
     *
     * @param {*} path
     * @return {*}
     * @memberof Page
     */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}
