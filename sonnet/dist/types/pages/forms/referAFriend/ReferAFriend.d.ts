export declare class ReferAFriend {
    private formComponent?;
    private formModal?;
    private successModal?;
    private errorModal?;
    private static FORM_TAG;
    private static MODAL_TAG;
    private static FORM_IDENTIFIER;
    private static SUCCESS_MODAL_SUFFIX;
    private static ERROR_MODAL_SUFFIX;
    private static instance;
    private constructor();
    static getInstance(): ReferAFriend;
    listen(): void;
    errorModalGoBackAction(): void;
    successModalGoBackAction(): void;
    showErrorModal(reason: any): Promise<void>;
    showSuccessModal(): Promise<void>;
}
