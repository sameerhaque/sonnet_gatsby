import { EventEmitter } from '../../stencil-public-runtime';
import { Treeitem } from "../../core/components/treeview/Treeitem";
/**
 * TODO: Rename component to snt-navigation-treeview
 */
export declare class TreeviewComponent {
    static readonly TAG_NAME = "snt-treeview";
    /**
     * Local Properties
     */
    private keyboardEventProcessor;
    /**
     * Reference To Host Element
     */
    hostElement: HTMLElement;
    /**
     * State Variables
     */
    treeitems: Array<Treeitem>;
    /**
     * Public Properties API
     */
    structure: string;
    /**
     * Events and Event Emitters
     */
    sntChange: EventEmitter;
    /**
     * Component Lifecycle Events
     */
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    /**
     * Public Methods API
     */
    getTreeitems(): Promise<Array<Treeitem>>;
    updateExpandedTreeitems(treeitems: Array<Treeitem>, targetNodes: Array<Treeitem>, expanded?: boolean | undefined): Promise<Array<Treeitem>>;
    updateVisibleTreeitems(treeitems: Array<Treeitem>, targetNodes: Array<Treeitem>, visible?: boolean | undefined): Promise<Array<Treeitem>>;
    updateFocusedTreeitems(treeitems: Array<Treeitem>, targetNodes: Array<Treeitem>, focused?: boolean | undefined): Promise<Array<Treeitem>>;
    updateSelectedTreeitems(treeitems: Array<Treeitem>, targetNodes: Array<Treeitem>, selected?: boolean | undefined): Promise<Array<Treeitem>>;
    findNodeByProperty(key: string, value: string): Promise<Treeitem>;
    private findNodeByUrlOrKey;
    selectNodeByUrlOrKey(url: string, childKey?: string, emitEvent?: boolean): Promise<void>;
    updateTreeView(structure: string): Promise<void>;
    /**
     * Local Methods
     */
    private initKeyboardEventProcessor;
    private moveSelection;
    private getNextSelectableNodeByFirstCharacter;
    private getNextSelectableNode;
    private onClickCategory;
    private onClickLink;
    private toggleTreeitem;
    private onKeydown;
    private onFocusin;
    private getItemsFromTree;
    private buildTreeview;
    render(): any;
}
