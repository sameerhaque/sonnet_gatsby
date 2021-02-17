import { AxiosResponse } from "axios";
export declare class ContactUs {
    private static instance;
    private static readonly EN_URL;
    private static readonly FR_URL;
    private constructor();
    static getInstance(): ContactUs;
    listen(): Promise<void>;
    onSuccess(response: AxiosResponse<any>): void;
    onFailure(error: Error): void;
    showErrorModal(reason: any): Promise<void>;
}
