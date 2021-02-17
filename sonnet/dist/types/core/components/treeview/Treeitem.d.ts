export interface ITreeStructure {
    title: string;
    key: string;
    url: string;
    languageId: number;
    expanded: boolean;
    items: Array<ITreeStructure>;
}
export interface ITreeitem {
    label: string;
    key: string;
    url: string;
    id: number;
    languageId: number;
    parentId: number;
    expandable: boolean;
    visible?: boolean;
    focused?: boolean;
    selected?: boolean;
    expanded?: boolean;
    domElement?: HTMLElement;
}
export declare class Treeitem implements ITreeitem {
    label: string;
    key: string;
    url: string;
    id: number;
    languageId: number;
    parentId: number;
    expandable: boolean;
    visible?: boolean;
    focused?: boolean;
    selected?: boolean;
    expanded?: boolean;
    domElement?: HTMLElement;
    constructor(obj: ITreeitem);
}
