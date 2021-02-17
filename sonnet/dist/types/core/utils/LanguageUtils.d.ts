export declare class LanguageUtils {
    static LANGUAGE_CODES: {
        en: string;
        fr: string;
    };
    static LANGUAGE_ID: {
        en: string;
        fr: string;
    };
    static isEnglish(): boolean;
    static isFrench(): boolean;
    static current(): string;
    static getVariablesFromString(languageString: string, requiredLanguageVariables: string[]): Map<string, string>;
}
