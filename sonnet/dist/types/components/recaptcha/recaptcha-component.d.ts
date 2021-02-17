import { EventEmitter } from "../../stencil-public-runtime";
export declare class RecaptchaComponent {
    static readonly TAG_NAME = "snt-recaptcha";
    sitekey: string;
    language: string;
    element: HTMLElement;
    grecaptchaLoaded: EventEmitter<object>;
    private checkbox;
    private grecaptchWidgetId;
    componentWillLoad(): void;
    componentDidLoad(): void;
    reset(): Promise<void>;
    handleGrecaptchaLoaded(): void;
    private loadRecaptchaScript;
    private grecaptchaCallback;
    private grecaptchaExpiredCallback;
    private grecaptchaErrorCallback;
    private toggleChecked;
    private renderRecaptcha;
    render(): any;
}
