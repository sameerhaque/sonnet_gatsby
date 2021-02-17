import { NavItemTypeEnum } from "../domain/NavItemTypeEnum";
export declare class NavUtils {
    static isCurrentPage(navItem: HTMLSntNavItemElement): boolean;
    static identifyType(element: HTMLSntNavItemElement): NavItemTypeEnum;
}
