var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, e as createEvent, h, H as Host, g as getElement } from './index-79f6678c.js';
import './ComponentConstants-d606bde3.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { K as KeyboardEventProcessorBuilder, a as Keyboard, N as NavigationDirectionEnum } from './NavigationDirectionEnum-aa4e2185.js';
var Treeitem = /** @class */ (function () {
    function Treeitem(obj) {
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
    return Treeitem;
}());
var treeviewComponentCss = "snt-treeview{display:block}snt-treeview .category-label{display:block}snt-treeview .category-label .iconCaret{padding-left:3px;font-size:10px}snt-treeview .category-label .iconCaret.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);padding-right:3px;padding-left:0px}snt-treeview .category-label-row{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}snt-treeview .category-text{display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column}snt-treeview .category-text:after{content:attr(data-text);height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:normal;font-family:\"Averta-Regular\"}@media speech{snt-treeview .category-text:after{display:none}}snt-treeview ul{list-style:none;padding:0}snt-treeview li,snt-treeview a{color:#323232;font-size:1rem;line-height:1.3125rem;text-decoration:none}snt-treeview li:focus,snt-treeview a:focus{outline:none}snt-treeview li:hover{cursor:pointer}snt-treeview li:hover>.category-label{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582}snt-treeview li:hover .iconCaret{font-weight:700}snt-treeview li{margin-bottom:1.25rem}snt-treeview li:last-child{margin-bottom:0}snt-treeview li.active>span{border-bottom:3px solid #147582;color:#147582}snt-treeview li>ul{padding:1rem 0 0.625rem 1.875rem}snt-treeview li>ul li{margin-bottom:1rem}snt-treeview li>ul li:last-child{margin-bottom:0}snt-treeview li>a:hover{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;text-decoration:none}snt-treeview li:focus.focused .category-label>span{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;outline:1px solid #147582;outline-offset:3px}snt-treeview li.selected .category-label>span{border-bottom:2px solid #147582;padding-bottom:2px;margin-bottom:-4px}snt-treeview li>span{pointer-events:none}snt-treeview li a:focus.focused>span{font-weight:500;font-family:\"Averta-ExtraBold\", sans-serif;color:#147582;outline:1px solid #147582;outline-offset:3px}snt-treeview a{display:block}snt-treeview a.selected>span{border-bottom:2px solid #147582;padding-bottom:2px;margin-bottom:-4px}snt-treeview a.active{border-bottom:2px solid #147582;color:#147582}snt-treeview [role=treeitem][aria-expanded=false]>ul{display:none}@media (min-width: 1024px){snt-treeview .category-label .iconCaret{font-size:12px}}";
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TreeviewComponent = /** @class */ (function () {
    function TreeviewComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sntChange = createEvent(this, "sntChange", 7);
    }
    /**
     * Component Lifecycle Events
     */
    TreeviewComponent.prototype.componentWillLoad = function () {
        var tree = WebUtils.getObjectFromString(this.structure);
        this.treeitems = this.getItemsFromTree(tree, this.treeitems = []);
        this.keyboardEventProcessor = this.initKeyboardEventProcessor();
    };
    TreeviewComponent.prototype.componentDidLoad = function () { };
    TreeviewComponent.prototype.componentWillUpdate = function () { };
    TreeviewComponent.prototype.componentDidUpdate = function () {
        var focusedTreeitem = this.treeitems.find(function (node) { return node.focused; });
        if (focusedTreeitem) {
            focusedTreeitem.domElement.focus();
        }
    };
    /**
     * Public Methods API
     */
    TreeviewComponent.prototype.getTreeitems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(this.treeitems)];
            });
        });
    };
    TreeviewComponent.prototype.updateExpandedTreeitems = function (treeitems, targetNodes, expanded) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(treeitems.map(function (node) { return targetNodes.indexOf(node) != -1
                        ? new Treeitem(Object.assign(Object.assign({}, node), { expanded: typeof (expanded) == "boolean" ? expanded : !node.expanded }))
                        : node; }))];
            });
        });
    };
    TreeviewComponent.prototype.updateVisibleTreeitems = function (treeitems, targetNodes, visible) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(treeitems.map(function (node) { return targetNodes.indexOf(node) != -1
                        ? new Treeitem(Object.assign(Object.assign({}, node), { visible: typeof (visible) == "boolean" ? visible : !node.visible }))
                        : node; }))];
            });
        });
    };
    TreeviewComponent.prototype.updateFocusedTreeitems = function (treeitems, targetNodes, focused) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(treeitems.map(function (node) {
                        var idEquals = function (targetNode) { return targetNode.id === node.id; };
                        return targetNodes.some(idEquals)
                            ? new Treeitem(Object.assign(Object.assign({}, node), { focused: typeof (focused) == "boolean" ? focused : !node.focused }))
                            : (node.focused)
                                ? new Treeitem(Object.assign(Object.assign({}, node), { focused: false }))
                                : node;
                    }))];
            });
        });
    };
    TreeviewComponent.prototype.updateSelectedTreeitems = function (treeitems, targetNodes, selected) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(treeitems.map(function (node) {
                        var idEquals = function (targetNode) { return targetNode.id === node.id; };
                        return targetNodes.some(idEquals) ? new Treeitem(Object.assign(Object.assign({}, node), { selected: typeof (selected) == "boolean" ? selected : !node.selected }))
                            : (node.selected)
                                ? new Treeitem(Object.assign(Object.assign({}, node), { selected: false }))
                                : node;
                    }))];
            });
        });
    };
    TreeviewComponent.prototype.findNodeByProperty = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.treeitems.find(function (node) { return (node[key] == value); })];
            });
        });
    };
    TreeviewComponent.prototype.findNodeByUrlOrKey = function (value) {
        return this.treeitems.find(function (node) { return (node['key'] === value || node['url'] === value); });
    };
    TreeviewComponent.prototype.selectNodeByUrlOrKey = function (url, childKey, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        return __awaiter(this, void 0, void 0, function () {
            var targetNode, childNode, _a, nodesToUpdate, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.findNodeByUrlOrKey(url)];
                    case 1:
                        targetNode = _c.sent();
                        if (childKey) {
                            childNode = this.treeitems.find(function (node) { return node.parentId == targetNode.id && node.key === childKey; });
                        }
                        childNode = childNode || this.treeitems.find(function (node) { return node.parentId == targetNode.id; });
                        if (!childNode) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toggleTreeitem(targetNode, true)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [childNode ? childNode : targetNode], true)];
                    case 4:
                        _a.treeitems = _c.sent();
                        nodesToUpdate = childNode ? [targetNode, childNode] : [targetNode];
                        _b = this;
                        return [4 /*yield*/, this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true)];
                    case 5:
                        _b.treeitems = _c.sent();
                        if (emitEvent) {
                            this.sntChange.emit({ node: childNode ? childNode : targetNode, parentNode: childNode ? targetNode : null, originalEvent: null });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.updateTreeView = function (structure) {
        return __awaiter(this, void 0, void 0, function () {
            var tree;
            return __generator(this, function (_a) {
                this.structure = structure;
                tree = WebUtils.getObjectFromString(this.structure);
                this.treeitems = this.getItemsFromTree(tree, this.treeitems = []);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Local Methods
     */
    TreeviewComponent.prototype.initKeyboardEventProcessor = function () {
        var _this = this;
        return KeyboardEventProcessorBuilder.newInstance()
            /**
             * -> Moves focus to the previous node that is focusable without opening or closing a node.
             * -> If focus is on the last node, does nothing.
             */
            .withKey(Keyboard.ARROW_UP, function (evt) {
            _this.moveSelection(evt, NavigationDirectionEnum.BACKWARDS);
        })
            /**
             * -> Moves focus to the next node that is focusable without opening or closing a node.
             * -> If focus is on the last node, does nothing.
             */
            .withKey(Keyboard.ARROW_DOWN, function (evt) {
            _this.moveSelection(evt, NavigationDirectionEnum.FORWARDS);
        })
            /**
             * -> When focus is on a closed node, opens the node; focus does not move.
             * -> When focus is on a open node, moves focus to the first child node.
             * -> When focus is on an end node, does nothing
             */
            .withKey(Keyboard.ARROW_RIGHT, function (evt) {
            var node = _this.treeitems.find(function (node) { return node.domElement == evt.target; });
            if (node && node.expandable) {
                if (node.expanded) {
                    _this.moveSelection(evt, NavigationDirectionEnum.FORWARDS);
                    return;
                }
                _this.toggleTreeitem(node);
            }
        })
            /**
             * -> When focus is on an open node, closes the node.
             * -> When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
             * -> When focus is on a root node that is also either an end node or a closed node, does nothing.
             */
            .withKey(Keyboard.ARROW_LEFT, function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var targetNode, parentNode, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        targetNode = this.treeitems.find(function (node) { return node.domElement == evt.target; });
                        if (targetNode && targetNode.expandable && targetNode.expanded) {
                            this.toggleTreeitem(targetNode);
                            return [2 /*return*/];
                        }
                        if (!targetNode.parentId) return [3 /*break*/, 2];
                        parentNode = this.treeitems.find(function (node) { return node.id == targetNode.parentId; });
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [parentNode])];
                    case 1:
                        _a.treeitems = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); })
            /**
             * -> Moves focus to first node without opening or closing a node.
             */
            .withKey(Keyboard.HOME, function (evt) {
            _this.moveSelection(evt, NavigationDirectionEnum.FIRST);
        })
            /**
             * -> Moves focus to the last node that can be focused without expanding any nodes that are closed.
             */
            .withKey(Keyboard.END, function (evt) {
            _this.moveSelection(evt, NavigationDirectionEnum.LAST);
        })
            /**
             * -> Expands all closed sibling nodes that are at the same level as the focused node.
             * -> Focus does not move.
             */
            .withKey(Keyboard.ASTERISK, function (evt) {
            var targetNode = _this.treeitems.find(function (node) { return node.domElement == evt.target; });
            var expandableSiblingNodes = _this.treeitems.filter(function (node) { return node.expandable && node.parentId == targetNode.parentId; });
            expandableSiblingNodes.forEach(function (node) {
                _this.toggleTreeitem(node, true);
            });
        })
            /**
             * -> Expands focused node if it is expandable
             */
            .withKeys([Keyboard.ENTER, Keyboard.SPACE], function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var targetNode, parentNode, nodesToUpdate, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        targetNode = this.treeitems.find(function (node) { return node.domElement == evt.target; });
                        if (!targetNode)
                            return [2 /*return*/];
                        if (!targetNode.expandable) return [3 /*break*/, 1];
                        evt.preventDefault();
                        this.toggleTreeitem(targetNode);
                        return [3 /*break*/, 3];
                    case 1:
                        parentNode = this.treeitems.find(function (node) { return node.id == targetNode.parentId; });
                        nodesToUpdate = parentNode ? [parentNode, targetNode] : [targetNode];
                        _a = this;
                        return [4 /*yield*/, this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true)];
                    case 2:
                        _a.treeitems = _b.sent();
                        this.sntChange.emit({ node: targetNode, parentNode: parentNode || null, originalEvent: evt });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })
            /**
             * -> Focus moves to the next node with a name that starts with the typed character.
             * -> Search wraps to first node if a matching name is not found among the nodes that follow the focused node.
             * -> Search ignores nodes that are descendants of closed nodes.
             */
            .withDefaultHandler(function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var nextSelectableNode, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nextSelectableNode = this.getNextSelectableNodeByFirstCharacter(this.treeitems, evt.key);
                        if (!nextSelectableNode) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [nextSelectableNode])];
                    case 1:
                        _a.treeitems = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); })
            .build();
    };
    TreeviewComponent.prototype.moveSelection = function (evt, direction) {
        return __awaiter(this, void 0, void 0, function () {
            var nextSelectableNode, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        nextSelectableNode = this.getNextSelectableNode(this.treeitems, direction);
                        if (!nextSelectableNode) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [nextSelectableNode])];
                    case 1:
                        _a.treeitems = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.getNextSelectableNodeByFirstCharacter = function (treeitems, firstCharacter, direction) {
        if (direction === void 0) { direction = NavigationDirectionEnum.FORWARDS; }
        var selectableTreeitems = treeitems.filter(function (node) { return node.visible && node.label[0].toLowerCase() == firstCharacter.toLowerCase(); });
        var selectedItem = selectableTreeitems.find(function (node) { return node.focused; });
        var selectedItemIndex = selectableTreeitems.indexOf(selectedItem);
        var nextSelectedItemIndex = (selectedItemIndex + (direction == NavigationDirectionEnum.FORWARDS ? 1 : -1) + selectableTreeitems.length) % selectableTreeitems.length;
        return selectableTreeitems[nextSelectedItemIndex];
    };
    TreeviewComponent.prototype.getNextSelectableNode = function (treeitems, direction) {
        var selectableTreeitems = treeitems.filter(function (node) { return node.visible; });
        var selectedItem = selectableTreeitems.find(function (node) { return node.focused; });
        var selectedItemIndex = selectableTreeitems.indexOf(selectedItem);
        if ((direction == NavigationDirectionEnum.BACKWARDS || direction == NavigationDirectionEnum.FIRST) && selectedItemIndex == 0) {
            return false;
        }
        if ((direction == NavigationDirectionEnum.FORWARDS || direction == NavigationDirectionEnum.LAST) && selectedItemIndex == selectableTreeitems.length - 1) {
            return false;
        }
        var nextSelectedItemIndex = (direction == NavigationDirectionEnum.FORWARDS)
            ? selectedItemIndex + 1
            : (direction == NavigationDirectionEnum.BACKWARDS)
                ? selectedItemIndex - 1
                : (direction == NavigationDirectionEnum.LAST)
                    ? selectableTreeitems.length - 1 : 0;
        return selectableTreeitems[nextSelectedItemIndex];
    };
    TreeviewComponent.prototype.onClickCategory = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var targetNode, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        targetNode = this.treeitems.find(function (node) { return node.domElement == evt.target; });
                        if (!targetNode)
                            return [2 /*return*/];
                        evt.preventDefault();
                        if (!targetNode.expandable) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toggleTreeitem(targetNode)];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [targetNode], true)];
                    case 2:
                        _a.treeitems = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.onClickLink = function (treeitem, evt) {
        return __awaiter(this, void 0, void 0, function () {
            var parentNode, _a, nodesToUpdate, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        parentNode = this.treeitems.find(function (node) { return node.id == treeitem.parentId; });
                        this.sntChange.emit({ node: treeitem, parentNode: parentNode || null, originalEvent: evt });
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [treeitem], true)];
                    case 1:
                        _a.treeitems = _c.sent();
                        nodesToUpdate = parentNode ? [parentNode, treeitem] : [treeitem];
                        _b = this;
                        return [4 /*yield*/, this.updateSelectedTreeitems(this.treeitems, nodesToUpdate, true)];
                    case 2:
                        _b.treeitems = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.toggleTreeitem = function (targetNode, expanded) {
        return __awaiter(this, void 0, void 0, function () {
            var treeitems, childNodes, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.updateExpandedTreeitems(this.treeitems, [targetNode], expanded)];
                    case 1:
                        treeitems = _b.sent();
                        targetNode = treeitems.find(function (node) { return node.domElement == targetNode.domElement; });
                        childNodes = treeitems.filter(function (node) { return node.parentId == targetNode.id; });
                        _a = this;
                        return [4 /*yield*/, this.updateVisibleTreeitems(treeitems, childNodes)];
                    case 2:
                        _a.treeitems = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.onKeydown = function (evt) {
        if (this.keyboardEventProcessor.hasDelegatedHandler(evt)
            || this.keyboardEventProcessor.hasDefaultHandler()) {
            this.keyboardEventProcessor.process(evt);
        }
    };
    TreeviewComponent.prototype.onFocusin = function (_evt) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedTreeitem, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selectedTreeitem = this.treeitems.find(function (node) { return node.focused || node.selected; });
                        if (!!selectedTreeitem) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.updateFocusedTreeitems(this.treeitems, [this.treeitems[0]])];
                    case 1:
                        _a.treeitems = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TreeviewComponent.prototype.getItemsFromTree = function (node, tree, parentNode) {
        var _this = this;
        var treeitem = parentNode;
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
            node.items.forEach(function (subNode) {
                _this.getItemsFromTree(subNode, tree, treeitem);
            });
        }
        return tree;
    };
    TreeviewComponent.prototype.buildTreeview = function (treeitems, idPrefix, parentId) {
        var _this = this;
        if (parentId === void 0) { parentId = null; }
        var toplevelItems = treeitems.filter(function (treeitem) { return treeitem.parentId == parentId; });
        var isAnyNodeSelectedOrFocused = this.treeitems.find(function (node) { return node.selected || node.focused; });
        var tree = toplevelItems.reduce(function (tree, treeitem) {
            var nodeId = idPrefix ? (idPrefix + '-' + treeitem.key) : null;
            var isFirstNode = treeitems.indexOf(treeitem) == 0;
            return __spreadArrays(tree, [(h("li", { role: treeitem.expandable ? 'treeitem' : 'none', id: nodeId, "aria-expanded": treeitem.expanded ? "true" : "false", "data-index": treeitem.expandable ? treeitems.indexOf(treeitem) : null, tabindex: treeitem.expandable && (treeitem.focused || isFirstNode && !isAnyNodeSelectedOrFocused) ? "0" : "-1", ref: function (el) { treeitem.domElement = el; }, class: {
                        'focused': treeitem.focused,
                        'selected': treeitem.selected
                    }, onClick: _this.onClickCategory.bind(_this) }, (treeitem.expandable) ? [
                    h("span", { class: "category-label" }, h("span", { class: "category-label-row" }, h("span", { class: "category-text", "data-text": treeitem.label }, treeitem.label), " ", h("span", { class: "icon-font iconCaret " + (treeitem.expanded ? 'expanded' : '') }))),
                    _this.buildTreeview(treeitems, nodeId, treeitem.id)
                ] : [
                    h("a", { role: "treeitem", id: nodeId + '-link', href: "javascript:void(0)", class: {
                            'focused': treeitem.focused,
                            'selected': treeitem.selected
                        }, "data-index": treeitems.indexOf(treeitem), ref: function (el) { treeitem.domElement = el; }, tabindex: treeitem.focused || isFirstNode && !isAnyNodeSelectedOrFocused ? "0" : "-1", onClick: function (evt) { _this.onClickLink(treeitem, evt); } }, h("span", { class: "category-text", "data-text": treeitem.label }, treeitem.label))
                ]))]);
        }, []);
        return h("ul", { role: parentId == null ? 'tree' : 'group' }, tree);
    };
    TreeviewComponent.prototype.render = function () {
        return h(Host, { onKeydown: this.onKeydown.bind(this), onFocusin: this.onFocusin.bind(this) }, this.buildTreeview(this.treeitems, this.hostElement.id));
    };
    Object.defineProperty(TreeviewComponent.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TreeviewComponent;
}());
TreeviewComponent.TAG_NAME = "snt-treeview";
TreeviewComponent.style = treeviewComponentCss;
export { TreeviewComponent as snt_treeview };
