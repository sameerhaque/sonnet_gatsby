export declare class ViewportClasses {
    private readonly includes;
    private readonly excludes;
    constructor(includes: Set<string>, excludes: Set<string>);
    hasClasses(): boolean;
    getClasses(): Set<string>;
    getExcludedClasses(): Set<string>;
}
