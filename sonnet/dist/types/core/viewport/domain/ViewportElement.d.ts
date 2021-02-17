import { ViewportDeviceTypeEnum } from "./ViewportDeviceTypeEnum";
export declare class ViewportElement {
    readonly width: any;
    readonly height: any;
    readonly devices: Set<ViewportDeviceTypeEnum>;
    constructor(width: any, height: any, devices: Set<ViewportDeviceTypeEnum>);
}
