export declare class ViewportAttributes {
    private includes;
    private excludes;
    constructor(includes: Map<string, string>, excludes: Set<string>);
    hasAttributes(): boolean;
    getAttributes(): Map<string, string>;
    getExcludedAttributes(): Set<string>;
}
