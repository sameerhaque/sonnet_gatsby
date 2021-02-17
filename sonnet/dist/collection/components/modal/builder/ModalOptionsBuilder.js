import { ModalOptions } from "../domain/ModalOptions";
export class ModalOptionsBuilder {
    constructor() {
        this.modalOptions = new ModalOptions();
    }
    static newInstance() {
        return new ModalOptionsBuilder();
    }
    withKeyboardClose(value) {
        this.modalOptions.keyboardClose = value;
        return this;
    }
    withBackdropDismiss(value) {
        this.modalOptions.backdropDismiss = value;
        return this;
    }
    build() {
        return this.modalOptions;
    }
}
