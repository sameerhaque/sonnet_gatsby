export class ModalOptions {
    constructor(keyboardClose = true, backdrop = true, backdropDismiss = true, 
    // TODO: Add support for the items below back into Modal Component
    keyboardDismiss = true, clickDismiss = true) {
        this.keyboardClose = keyboardClose;
        this.backdrop = backdrop;
        this.backdropDismiss = backdropDismiss;
        this.keyboardDismiss = keyboardDismiss;
        this.clickDismiss = clickDismiss;
    }
}
