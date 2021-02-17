import { EventEmitter } from "../../stencil-public-runtime";
export declare class FormComponent {
    text: string;
    submitCallBackhandler: any;
    formSubmit: EventEmitter;
    private formEl;
    /**
     * Methods
     */
    openErrorModal(actionData: JSON, modalId: string): Promise<void>;
    openSuccessModal(actionData: JSON, modalId: string): Promise<void>;
    reset(): Promise<void>;
    componentDidLoad(): void;
    getData(): Promise<{
        method: string;
        action: string;
        content: {};
    }>;
    onChangeInputBlankHandler(event: Event): void;
    onChangeValueFormElementHandler(event: Event): void;
    onBlurFormElementHandler(event: any): void;
    onInvalidateFormElementHandler(event: any): void;
    getPayload(): {};
    submitForm(e: Event): void;
    getFormElements(): NodeListOf<Element>;
    getPayloadNameForElement(element: any): any;
    render(): any;
}
