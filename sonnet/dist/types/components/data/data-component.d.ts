export declare class DataComponent {
    static readonly TAG_NAME = "snt-data";
    element: HTMLElement;
    type: string;
    lazyLoad: boolean;
    src?: string;
    data?: string;
    private builder;
    getData(): Promise<Object>;
    componentWillLoad(): void;
    render(): any;
}
