import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { K as KeyboardEventProcessorBuilder, a as Keyboard, N as NavigationDirectionEnum } from './NavigationDirectionEnum-aa4e2185.js';

class Treeitem {
    constructor(obj) {
        this.label = obj.label;
        this.key = obj.key,
            this.url = obj.url,
            this.id = obj.id;
        this.languageId = obj.languageId;
        this.parentId = obj.parentId;
        this.expandable = obj.expandable || false;
        this.visible = obj.visible || false;
        this.focused = obj.focused || false;
        this.selected = obj.selected || false;
        this.expanded = obj.expanded || false;
        this.domElement = obj.domElement || null;
    }
}

const treeviewComponentCss = "snt-treeview{display:block}snt-treeview .category-label{display:block}snt-treeview .category-label .iconCaret{padding-left:3px;font-size:10px}snt-treeview .category-label .iconCaret.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);padding-right:3px;padding-left:0px}snt-treeview .category-label-row{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}snt-treeview .category-text{display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column}snt-treeview .category-text:after{content:attr(data-text);height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:normal;font-family:\"Averta-Regular\"}@media speech{snt-treeview .category-text:after{display:none}}snt-treeview ul{list-style:none;padding:0}snt-treeview li,snt-treeview a{color:#323232;font-size:1rem;line-height:1.3125rem;text-decoration:none}snt-treeview li:focus,snt-treeview a:focus{outline:none}snt-treeview li:hover{cursor:pointer}snt-treeview li:hover>.category-label{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582}snt-treeview li:hover .iconCaret{font-weight:700}snt-treeview li{margin-bottom:1.25rem}snt-treeview li:last-child{margin-bottom:0}snt-treeview li.active>span{border-bottom:3px solid #147582;color:#147582}snt-treeview li>ul{padding:1rem 0 0.625rem 1.875rem}snt-treeview li>ul li{margin-bottom:1rem}snt-treeview li>ul li:last-child{margin-bottom:0}snt-treeview li>a:hover{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;text-decoration:none}snt-treeview li:focus.focused .category-label>span{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;outline:1px solid #147582;outline-offset:3px}snt-treeview li.selected .category-label>span{border-bottom:2px solid #147582;padding-bottom:2px;margin-bottom:-4px}snt-treeview li>span{pointer-events:none}snt-treeview li a:focus.focused>span{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;outline:1px solid #147582;outline-offset:3px}snt-treeview a{display:block}snt-treeview a.selected>span{border-bottom:2px solid #147582;padding-bottom:2px;margin-bottom:-4px}snt-treeview a.active{border-bottom:2px solid #147582;color:#147582}snt-treeview [role=treeitem][aria-expanded=false]>ul{display:none}@media (min-width: 1024px){snt-treeview .category-label .iconCaret{font-size:12px}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const TreeviewComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sntChange = createEvent(this, "sntChange", 7);
    }
    /**
     * Component Lifecycle Events
     */
    componentWillLoad() {
        const tree = WebUtils.getObjectFromString(this.structure);
        this.treeitems = this.getItemsFromTree(tree, this.treeitems = []);
        this.keyboardEventProcessor = this.initKeyboardEventProcessor();
    }
    componentDidLoad() { }
    componentWillUpdate() { }
    componentDidUpdate() {
        const focusedTreeitem = this.treeitems.find(node => node.focused);
        if (focusedTreeitem) {
            focusedTreeitem.domElement.focus();
        }
    }
    /**
     * Public Methods API
     */
    getTreeitems() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.treeitems);
        });
    }
    updateExpandedTreeitems(treeitems, targetNodes, expanded) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(treeitems.map((node) => targetNodes.indexOf(node) != -1
                ? new Treeitem(Object.assign(Object.assign({}, node), { expanded: typeof (expanded) == "boolean" ? expanded : !node.expanded }))
                : node));
        });
    }
    updateVisibleTreeitems(treeitems, targetNodes, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(treeitems.map((node) => targetNodes.indexOf(node) != -1
                ? new Treeitem(Object.assign(Object.assign({}, node), { visible: typeof (visible) == "boolean" ? visible : !node.visible }))
                : node));
        });
    }
    updateFocusedTreeitems(treeitems, targetNodes, focused) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(treeitems.map((node) => {
                const idEquals = (targetNode) => { return targetNode.id === node.id; };
                return targetNodes.some(idEquals)
                    ? new Treeitem(Object.assign(Object.assign({}, node), { focused: typeof (focused) == "boolean" ? focused : !node.focused }))
                    : (node.focused)
                        ? new Treeitem(Object.assign(Object.assign({}, node), { focused: false }))
                        : node;
            }));
        });
    }
    updateSelectedTreeitems(treeitems, targetNodes, selected) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(treeitems.map((node) => {
                const idEquals = (targetNode) => { return targetNode.id === node.id; };
                return targetNodes.some(idEquals) ? new Treeitem(Object.assign(Object.assign({}, node), { selected: typeof (selected) == "boolean" ? selected : !node.selected }))
                    : (node.selected)
                        ? new Treeitem(Object.assign(Object.assign({}, node), { selected: false }))
                        : node;
            }));
        });
    }
    findNodeByProperty(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.treeitems.find(node => (node[key] == value));
        });
    }
    findNodeByUrlOrKey(value) {
        return this.treeitems.find(node => (node['key'] === value || node['url'] === value));
    }
    selectNodeByUrlOrKey(url, childKey, emitEvent = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let targetNode = yield this.findNodeByUrlOrKey(url);
            let childNode;
            if (childKey) {
                childNode = this.treeitems.find(node => node.parentId == targetNode.id && node.key === childKey);
            }
            childNode = childNode || this.treeitems.find(node => node.parentId == targetNode.id);
            if (childNode) {
                yield this.toggleTreeitem(targetNode, true);
            }
            this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [childNode ? childNode : targetNode], true);
            const nodesToUpdate = childNode ? [targetNode, childNode] : [targetNode];
            this.treeitems = yield this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true);
            if (emitEvent) {
                this.sntChange.emit({ node: childNode ? childNode : targetNode, parentNode: childNode ? targetNode :  null, originalEvent: null });
            }
        });
    }
    updateTreeView(structure) {
        return __awaiter(this, void 0, void 0, function* () {
            this.structure = structure;
            const tree = WebUtils.getObjectFromString(this.structure);
            this.treeitems = this.getItemsFromTree(tree, this.treeitems = []);
        });
    }
    /**
     * Local Methods
     */
    initKeyboardEventProcessor() {
        return KeyboardEventProcessorBuilder.newInstance()
            /**
             * -> Moves focus to the previous node that is focusable without opening or closing a node.
             * -> If focus is on the last node, does nothing.
             */
            .withKey(Keyboard.ARROW_UP, (evt) => {
            this.moveSelection(evt, NavigationDirectionEnum.BACKWARDS);
        })
            /**
             * -> Moves focus to the next node that is focusable without opening or closing a node.
             * -> If focus is on the last node, does nothing.
             */
            .withKey(Keyboard.ARROW_DOWN, (evt) => {
            this.moveSelection(evt, NavigationDirectionEnum.FORWARDS);
        })
            /**
             * -> When focus is on a closed node, opens the node; focus does not move.
             * -> When focus is on a open node, moves focus to the first child node.
             * -> When focus is on an end node, does nothing
             */
            .withKey(Keyboard.ARROW_RIGHT, (evt) => {
            const node = this.treeitems.find((node) => node.domElement == evt.target);
            if (node && node.expandable) {
                if (node.expanded) {
                    this.moveSelection(evt, NavigationDirectionEnum.FORWARDS);
                    return;
                }
                this.toggleTreeitem(node);
            }
        })
            /**
             * -> When focus is on an open node, closes the node.
             * -> When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
             * -> When focus is on a root node that is also either an end node or a closed node, does nothing.
             */
            .withKey(Keyboard.ARROW_LEFT, (evt) => __awaiter(this, void 0, void 0, function* () {
            const targetNode = this.treeitems.find((node) => node.domElement == evt.target);
            if (targetNode && targetNode.expandable && targetNode.expanded) {
                this.toggleTreeitem(targetNode);
                return;
            }
            if (targetNode.parentId) {
                const parentNode = this.treeitems.find(node => node.id == targetNode.parentId);
                this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [parentNode]);
            }
        }))
            /**
             * -> Moves focus to first node without opening or closing a node.
             */
            .withKey(Keyboard.HOME, (evt) => {
            this.moveSelection(evt, NavigationDirectionEnum.FIRST);
        })
            /**
             * -> Moves focus to the last node that can be focused without expanding any nodes that are closed.
             */
            .withKey(Keyboard.END, (evt) => {
            this.moveSelection(evt, NavigationDirectionEnum.LAST);
        })
            /**
             * -> Expands all closed sibling nodes that are at the same level as the focused node.
             * -> Focus does not move.
             */
            .withKey(Keyboard.ASTERISK, (evt) => {
            const targetNode = this.treeitems.find((node) => node.domElement == evt.target);
            const expandableSiblingNodes = this.treeitems.filter((node) => node.expandable && node.parentId == targetNode.parentId);
            expandableSiblingNodes.forEach((node) => {
                this.toggleTreeitem(node, true);
            });
        })
            /**
             * -> Expands focused node if it is expandable
             */
            .withKeys([Keyboard.ENTER, Keyboard.SPACE], (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            const targetNode = this.treeitems.find((node) => node.domElement == evt.target);
            if (!targetNode)
                return;
            if (targetNode.expandable) {
                evt.preventDefault();
                this.toggleTreeitem(targetNode);
            }
            else {
                const parentNode = this.treeitems.find((node) => node.id == targetNode.parentId);
                const nodesToUpdate = parentNode ? [parentNode, targetNode] : [targetNode];
                this.treeitems = yield this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true);
                this.sntChange.emit({ node: targetNode, parentNode: parentNode || null, originalEvent: evt });
            }
        }))
            /**
             * -> Focus moves to the next node with a name that starts with the typed character.
             * -> Search wraps to first node if a matching name is not found among the nodes that follow the focused node.
             * -> Search ignores nodes that are descendants of closed nodes.
             */
            .withDefaultHandler((evt) => __awaiter(this, void 0, void 0, function* () {
            const nextSelectableNode = this.getNextSelectableNodeByFirstCharacter(this.treeitems, evt.key);
            if (nextSelectableNode) {
                this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [nextSelectableNode]);
            }
        }))
            .build();
    }
    moveSelection(evt, direction) {
        return __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            const nextSelectableNode = this.getNextSelectableNode(this.treeitems, direction);
            if (nextSelectableNode) {
                this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [nextSelectableNode]);
            }
        });
    }
    getNextSelectableNodeByFirstCharacter(treeitems, firstCharacter, direction = NavigationDirectionEnum.FORWARDS) {
        const selectableTreeitems = treeitems.filter(node => node.visible && node.label[0].toLowerCase() == firstCharacter.toLowerCase());
        const selectedItem = selectableTreeitems.find(node => node.focused);
        const selectedItemIndex = selectableTreeitems.indexOf(selectedItem);
        const nextSelectedItemIndex = (selectedItemIndex + (direction == NavigationDirectionEnum.FORWARDS ? 1 : -1) + selectableTreeitems.length) % selectableTreeitems.length;
        return selectableTreeitems[nextSelectedItemIndex];
    }
    getNextSelectableNode(treeitems, direction) {
        const selectableTreeitems = treeitems.filter(node => node.visible);
        const selectedItem = selectableTreeitems.find(node => node.focused);
        const selectedItemIndex = selectableTreeitems.indexOf(selectedItem);
        if ((direction == NavigationDirectionEnum.BACKWARDS || direction == NavigationDirectionEnum.FIRST) && selectedItemIndex == 0) {
            return false;
        }
        if ((direction == NavigationDirectionEnum.FORWARDS || direction == NavigationDirectionEnum.LAST) && selectedItemIndex == selectableTreeitems.length - 1) {
            return false;
        }
        const nextSelectedItemIndex = (direction == NavigationDirectionEnum.FORWARDS)
            ? selectedItemIndex + 1
            : (direction == NavigationDirectionEnum.BACKWARDS)
                ? selectedItemIndex - 1
                : (direction == NavigationDirectionEnum.LAST)
                    ? selectableTreeitems.length - 1 : 0;
        return selectableTreeitems[nextSelectedItemIndex];
    }
    onClickCategory(evt) {
        return __awaiter(this, void 0, void 0, function* () {
            const targetNode = this.treeitems.find((node) => node.domElement == evt.target);
            if (!targetNode)
                return;
            evt.preventDefault();
            if (targetNode.expandable) {
                yield this.toggleTreeitem(targetNode);
                this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [targetNode], true);
            }
        });
    }
    onClickLink(treeitem, evt) {
        return __awaiter(this, void 0, void 0, function* () {
            const parentNode = this.treeitems.find((node) => node.id == treeitem.parentId);
            this.sntChange.emit({ node: treeitem, parentNode: parentNode || null, originalEvent: evt });
            this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [treeitem], true);
            const nodesToUpdate = parentNode ? [parentNode, treeitem] : [treeitem];
            this.treeitems = yield this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true);
        });
    }
    toggleTreeitem(targetNode, expanded) {
        return __awaiter(this, void 0, void 0, function* () {
            const treeitems = yield this.updateExpandedTreeitems(this.treeitems, [targetNode], expanded);
            targetNode = treeitems.find((node) => node.domElement == targetNode.domElement);
            const childNodes = treeitems.filter((node) => node.parentId == targetNode.id);
            this.treeitems = yield this.updateVisibleTreeitems(treeitems, childNodes);
        });
    }
    onKeydown(evt) {
        if (this.keyboardEventProcessor.hasDelegatedHandler(evt)
            || this.keyboardEventProcessor.hasDefaultHandler()) {
            this.keyboardEventProcessor.process(evt);
        }
    }
    onFocusin(_evt) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedTreeitem = this.treeitems.find(node => node.focused || node.selected);
            if (!selectedTreeitem) {
                this.treeitems = yield this.updateFocusedTreeitems(this.treeitems, [this.treeitems[0]]);
            }
        });
    }
    getItemsFromTree(node, tree, parentNode) {
        let treeitem = parentNode;
        if (node.title) {
            treeitem = new Treeitem({
                label: node.title,
                key: node.key,
                url: node.url,
                id: tree.length + 1,
                languageId: node.languageId,
                parentId: parentNode ? parentNode.id : null,
                expandable: node.items && node.items.length > 0,
                expanded: !!node.expanded,
                visible: !parentNode || parentNode.expanded
            });
            tree.push(treeitem);
        }
        if (node.items) {
            node.items.forEach((subNode) => {
                this.getItemsFromTree(subNode, tree, treeitem);
            });
        }
        return tree;
    }
    buildTreeview(treeitems, idPrefix, parentId = null) {
        const toplevelItems = treeitems.filter((treeitem) => treeitem.parentId == parentId);
        const isAnyNodeSelectedOrFocused = this.treeitems.find(node => node.selected || node.focused);
        const tree = toplevelItems.reduce((tree, treeitem) => {
            const nodeId = idPrefix ? (idPrefix + '-' + treeitem.key) : null;
            const isFirstNode = treeitems.indexOf(treeitem) == 0;
            return [...tree, (h("li", { role: treeitem.expandable ? 'treeitem' : 'none', id: nodeId, "aria-expanded": treeitem.expanded ? "true" : "false", "data-index": treeitem.expandable ? treeitems.indexOf(treeitem) : null, tabindex: treeitem.expandable && (treeitem.focused || isFirstNode && !isAnyNodeSelectedOrFocused) ? "0" : "-1", ref: (el) => { treeitem.domElement = el; }, class: {
                        'focused': treeitem.focused,
                        'selected': treeitem.selected
                    }, onClick: this.onClickCategory.bind(this) }, (treeitem.expandable) ? [
                    h("span", { class: "category-label" }, h("span", { class: "category-label-row" }, h("span", { class: "category-text", "data-text": treeitem.label }, treeitem.label), " ", h("span", { class: `icon-font iconCaret ${treeitem.expanded ? 'expanded' : ''}` }))),
                    this.buildTreeview(treeitems, nodeId, treeitem.id)
                ] : [
                    h("a", { role: "treeitem", id: nodeId + '-link', href: "javascript:void(0)", class: {
                            'focused': treeitem.focused,
                            'selected': treeitem.selected
                        }, "data-index": treeitems.indexOf(treeitem), ref: (el) => { treeitem.domElement = el; }, tabindex: treeitem.focused || isFirstNode && !isAnyNodeSelectedOrFocused ? "0" : "-1", onClick: (evt) => { this.onClickLink(treeitem, evt); } }, h("span", { class: "category-text", "data-text": treeitem.label }, treeitem.label))
                ]))];
        }, []);
        return h("ul", { role: parentId == null ? 'tree' : 'group' }, tree);
    }
    render() {
        return h(Host, { onKeydown: this.onKeydown.bind(this), onFocusin: this.onFocusin.bind(this) }, this.buildTreeview(this.treeitems, this.hostElement.id));
    }
    get hostElement() { return getElement(this); }
};
TreeviewComponent.TAG_NAME = "snt-treeview";
TreeviewComponent.style = treeviewComponentCss;

export { TreeviewComponent as snt_treeview };
