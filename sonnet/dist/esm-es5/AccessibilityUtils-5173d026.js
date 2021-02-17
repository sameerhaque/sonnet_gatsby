import { L as LanguageUtils } from './LanguageUtils-994fe2d5.js';
var AccessibilityUtils = /** @class */ (function () {
    function AccessibilityUtils() {
    }
    AccessibilityUtils.isAccessibilityLinkRequired = function (element, href, target) {
        var hasChildNodes = (element.querySelectorAll("*").length > 0);
        var isBlank = target == "_blank";
        var isHrefExternal = (href && !(href.lastIndexOf('#') >= 0 || href.indexOf('javascript') >= 0 || href.indexOf('mailto') >= 0));
        return !hasChildNodes && isBlank && isHrefExternal;
    };
    AccessibilityUtils.generateNewWindow = function () {
        //let title = this.getNewWindowTitle();
        return "aa";
    };
    AccessibilityUtils.getNewWindowTitle = function () {
        return (LanguageUtils.current() == LanguageUtils.LANGUAGE_CODES.en) ? AccessibilityUtils.NEW_WINDOW_TITLE_EN : AccessibilityUtils.NEW_WINDOW_TITLE_FR;
    };
    AccessibilityUtils.getNewWindowText = function () {
        return (LanguageUtils.current() == LanguageUtils.LANGUAGE_CODES.en) ? AccessibilityUtils.NEW_WINDOW_TEXT_EN : AccessibilityUtils.NEW_WINDOW_TEXT_FR;
    };
    return AccessibilityUtils;
}());
AccessibilityUtils.NEW_WINDOW_TITLE_EN = "This is an external link.";
AccessibilityUtils.NEW_WINDOW_TITLE_FR = "Il s’agit d’un lien externe.";
AccessibilityUtils.NEW_WINDOW_TEXT_EN = "Open in a new window";
AccessibilityUtils.NEW_WINDOW_TEXT_FR = "Affiche une nouvelle fenêtre";
export { AccessibilityUtils as A };
