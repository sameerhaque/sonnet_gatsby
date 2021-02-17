import { ViewportClasses } from "../decorators/domain/ViewportClasses";
export declare class ViewportClassesBuilder {
    private includes;
    private excludes;
    private constructor();
    static newInstance(): ViewportClassesBuilder;
    with(names: string[]): ViewportClassesBuilder;
    remove(names: string[]): ViewportClassesBuilder;
    build(): ViewportClasses;
}
