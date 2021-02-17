import { Pair } from "../../objects/pair";
import { Context } from "../../context/Context";
export declare class ViewportConfigurationService {
    private static instance;
    private constructor();
    static getInstance(): ViewportConfigurationService;
    register(target: any, _nodes: Array<Pair<string, HTMLElement>>, callback: () => void): void;
    process(target: any, context: Context<any>, properties: Array<Pair<string, HTMLElement>>): void;
    private getConfiguration;
}
