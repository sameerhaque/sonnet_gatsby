export class Treeitem {
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
