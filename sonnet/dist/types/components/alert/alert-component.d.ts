export declare class AlertsBanner {
    el: HTMLElement;
    dismissible: boolean;
    animatable: boolean;
    type: string;
    explorerOnly: string;
    dismissed: (hostEl: HTMLElement) => void;
    show: boolean;
    fade: boolean;
    dismiss(): Promise<void>;
    componentWillLoad(): void;
    render(): any;
    private setShowFadeState;
    private getDismissButton;
    private setCookies;
    private checkCookies;
    private checkIE11;
}
