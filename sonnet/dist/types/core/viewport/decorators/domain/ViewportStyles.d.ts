export declare class ViewportStyles {
    private includes;
    private excludes;
    constructor(includes: Map<string, string>, excludes: Set<string>);
    hasStyles(): boolean;
    getStyles(): Map<string, string>;
    getExcludedStyles(): Set<string>;
}
