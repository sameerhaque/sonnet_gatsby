import { L as LanguageUtils } from './LanguageUtils-994fe2d5.js';

class AccessibilityUtils {
    static isAccessibilityLinkRequired(element, href, target) {
        let hasChildNodes = (element.querySelectorAll("*").length > 0);
        let isBlank = target == "_blank";
        let isHrefExternal = (href && !(href.lastIndexOf('#') >= 0 || href.indexOf('javascript') >= 0 || href.indexOf('mailto') >= 0));
        return !hasChildNodes && isBlank && isHrefExternal;
    }
    static generateNewWindow() {
        //let title = this.getNewWindowTitle();
        return `aa`;
    }
    static getNewWindowTitle() {
        return (LanguageUtils.current() == LanguageUtils.LANGUAGE_CODES.en) ? AccessibilityUtils.NEW_WINDOW_TITLE_EN : AccessibilityUtils.NEW_WINDOW_TITLE_FR;
    }
    static getNewWindowText() {
        return (LanguageUtils.current() == LanguageUtils.LANGUAGE_CODES.en) ? AccessibilityUtils.NEW_WINDOW_TEXT_EN : AccessibilityUtils.NEW_WINDOW_TEXT_FR;
    }
}
AccessibilityUtils.NEW_WINDOW_TITLE_EN = "This is an external link.";
AccessibilityUtils.NEW_WINDOW_TITLE_FR = "Il s’agit d’un lien externe.";
AccessibilityUtils.NEW_WINDOW_TEXT_EN = "Open in a new window";
AccessibilityUtils.NEW_WINDOW_TEXT_FR = "Affiche une nouvelle fenêtre";

export { AccessibilityUtils as A };
