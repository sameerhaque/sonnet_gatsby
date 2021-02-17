import "reflect-metadata";
import "core-js/es/symbol";
import { ViewportParameter } from "./domain/ViewportParameter";
export declare const VIEWPORT_PARAMETERS_META_KEY: unique symbol;
export declare function ViewportParameters(viewports: ViewportParameter[]): (target: object, propertyKey: string) => void;
