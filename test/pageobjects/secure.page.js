import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     *
     *
     * @readonly
     * @memberof SecurePage
     */
    get flashAlert() {
        return $('#flash');
    }
}

export default new SecurePage();
