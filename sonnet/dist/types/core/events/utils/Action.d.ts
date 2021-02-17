export declare class Action {
    static dismiss(event: CustomEvent): void;
    static toggleSearch(event: CustomEvent): void;
    static logAction(event: any, data: any): void;
    static openGetQuoteModal(_event: CustomEvent, actionData: JSON): void;
    static openFormModal(event: CustomEvent, actionData: JSON): void;
    static openErrorModal(actionData: JSON, modalId: string): void;
    static openSuccessModal(actionData: JSON, modalId: string): void;
    static openConnectOfferModal(actionData: JSON, modalId: string): void;
    private static openModal;
    static close(event: CustomEvent): void;
}
