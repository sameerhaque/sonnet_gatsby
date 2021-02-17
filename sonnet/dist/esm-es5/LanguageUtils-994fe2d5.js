var LanguageUtils = /** @class */ (function () {
    function LanguageUtils() {
    }
    LanguageUtils.isEnglish = function () {
        return document.documentElement.lang == this.LANGUAGE_CODES.en;
    };
    LanguageUtils.isFrench = function () {
        return document.documentElement.lang == this.LANGUAGE_CODES.fr;
    };
    LanguageUtils.current = function () {
        return this.isFrench() ? this.LANGUAGE_CODES.fr : this.LANGUAGE_CODES.en;
    };
    LanguageUtils.getVariablesFromString = function (languageString, requiredLanguageVariables) {
        try {
            var parsedJson_1 = JSON.parse(languageString);
            var languageVariables_1 = new Map();
            requiredLanguageVariables.forEach(function (key) {
                if (parsedJson_1.hasOwnProperty(key)) {
                    languageVariables_1.set(key, parsedJson_1[key]);
                }
                else {
                    console.error("Required language variable '" + key + "' not passed through 'language-string' property.");
                }
            });
            return languageVariables_1;
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    };
    return LanguageUtils;
}());
LanguageUtils.LANGUAGE_CODES = {
    "en": "en-us",
    "fr": "fr-ca"
};
LanguageUtils.LANGUAGE_ID = {
    "en": "1",
    "fr": "1584454943708" //DotCMS language id for French
};
export { LanguageUtils as L };
