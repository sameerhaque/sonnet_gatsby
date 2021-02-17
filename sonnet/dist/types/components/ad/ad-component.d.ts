export declare class AdComponent {
    element: HTMLElement;
    titleString?: string;
    styleClasses: string;
    iconSources?: string;
    logoSources?: string;
    href?: string;
    target?: string;
    buttonLabel?: string;
    linkLabel?: string;
    ariaLabel?: string;
    actionReference?: string;
    actionData?: string;
    private iconSourceJson;
    private logoSourceJson;
    private logoIsSet;
    private iconIsSet;
    static readonly TAG_NAME: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
    buildButtonContent(): any;
}
