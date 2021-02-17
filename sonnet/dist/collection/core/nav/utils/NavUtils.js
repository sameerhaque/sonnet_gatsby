import { NavItemTypeEnum } from "../domain/NavItemTypeEnum";
import { NavItemComponent } from "../../../components/nav/nav-item/nav-item-component";
export class NavUtils {
    static isCurrentPage(navItem) {
        if (navItem["href"]) {
            return (navItem["href"] == window.location.search);
        }
        return false;
    }
    static identifyType(element) {
        if (element.querySelectorAll(NavItemComponent.TAG_NAME).length > 0) {
            return NavItemTypeEnum.SUBNAV;
        }
        else if (element.href) {
            if (element.href.includes("action:")) {
                return NavItemTypeEnum.ACTION_LINK;
            }
            else {
                return NavItemTypeEnum.LINK;
            }
        }
        else {
            return NavItemTypeEnum.CUSTOM;
        }
    }
}
