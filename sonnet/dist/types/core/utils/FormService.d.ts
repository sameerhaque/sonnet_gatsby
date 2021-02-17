export declare class FormService {
    static process(event: any): boolean;
    static getValue(element: any): any;
    static processDataAttribute(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any, dataPattern: any, isDataPatternMatch: any): boolean;
    static processEmailConfirmation(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any): boolean;
    static processDatePastAttribute(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any): boolean;
    static processDateExceedAttribute(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any, form: any): boolean;
    static processDateExceedOneYearTodayAttribute(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any): boolean;
    static processDatePreceedAttribute(attributeName: any, context: any, value: any, dataError: any, dataErrorParent: any, form: any): boolean;
    static setErrorMessage(dataErrorElement: any, context: any, dataErrorParent: any): void;
    static getErrorMessageNode(dataErrorParent: any): any;
}
