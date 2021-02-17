import { ModalOptions } from "./domain/ModalOptions";
export declare class ModalComponent {
    static readonly TAG_NAME = "snt-modal";
    static readonly DEFAULT_OPTIONS: ModalOptions;
    static readonly EVENT_MODAL_SHOWN = "modal-shown";
    static readonly EVENT_MODAL_SHOW = "modal-show";
    static readonly EVENT_MODAL_HIDDEN = "modal-hidden";
    static readonly EVENT_MODAL_HIDE = "modal-hide";
    static readonly CLASS_SHOW = "show";
    static readonly CLASS_READY_TO_SHOW = "ready-to-show";
    static readonly CLASS_MODAL_OPEN = "modal-open";
    private element;
    shown: boolean;
    modalTitle: string;
    options: ModalOptions;
    styleClasses: string;
    languageString: string;
    private modalEvent;
    private lastActiveElement;
    private backdropElement;
    private modalDialogElement;
    private modalContentElement;
    private dialogTitle;
    private dialogDescription;
    private focusTrap;
    private languageVariables;
    toggleModal(shown: any): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    toggle(): Promise<void>;
    isShown(): Promise<boolean>;
    modalEventHandler(modalEvent: any): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private toggleFocusTrap;
    render(): any;
}
