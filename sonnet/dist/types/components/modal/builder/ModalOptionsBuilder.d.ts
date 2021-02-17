import { ModalOptions } from "../domain/ModalOptions";
export declare class ModalOptionsBuilder {
    private readonly modalOptions;
    private constructor();
    static newInstance(): ModalOptionsBuilder;
    withKeyboardClose(value: boolean): ModalOptionsBuilder;
    withBackdropDismiss(value: boolean): ModalOptionsBuilder;
    build(): ModalOptions;
}
