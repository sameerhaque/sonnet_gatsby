export declare class NewsLetterSignUpForm {
    private formComponent?;
    private formModal?;
    private errorModal?;
    private static FORM_TAG;
    private static MODAL_TAG;
    private static FORM_IDENTIFIER;
    private static SUCCESS_MODAL_SUFFIX;
    private static ERROR_MODAL_SUFFIX;
    private static instance;
    private constructor();
    static getInstance(): NewsLetterSignUpForm;
    listen(): void;
    errorModalGoBackAction(): void;
    showErrorModal(reason: any): Promise<void>;
    showSuccessModal(): Promise<void>;
}
