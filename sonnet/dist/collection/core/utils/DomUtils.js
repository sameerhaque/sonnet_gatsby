import { StringUtils } from './StringUtils';
export var PaddingDirectionEnum;
(function (PaddingDirectionEnum) {
    PaddingDirectionEnum["PADDING_TOP"] = "padding-top";
    PaddingDirectionEnum["PADDING_BOTTOM"] = "padding-bottom";
    PaddingDirectionEnum["PADDING_RIGHT"] = "padding-right";
    PaddingDirectionEnum["PADDING_LEFT"] = "padding-left";
})(PaddingDirectionEnum || (PaddingDirectionEnum = {}));
export var ScrollDirectionEnum;
(function (ScrollDirectionEnum) {
    ScrollDirectionEnum["HORIZONTAL"] = "x";
    ScrollDirectionEnum["VERTICAL"] = "y";
})(ScrollDirectionEnum || (ScrollDirectionEnum = {}));
export class DomUtils {
    static getScrollbarSize(scrollDirection) {
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL) {
            return window.innerHeight - document.documentElement.clientHeight;
        }
        else if (scrollDirection == ScrollDirectionEnum.VERTICAL) {
            return window.innerWidth - document.documentElement.clientWidth;
        }
        else {
            throw new Error(`${scrollDirection} is not a valid scroll direction.`);
        }
    }
    static setScrollbarPaddingReplacement(scrollbarPaddingReplacement = true, scrollDirection) {
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL ||
            scrollDirection == ScrollDirectionEnum.VERTICAL) {
            const paddingMap = new Map([
                [ScrollDirectionEnum.VERTICAL, PaddingDirectionEnum.PADDING_RIGHT],
                [ScrollDirectionEnum.HORIZONTAL, PaddingDirectionEnum.PADDING_BOTTOM]
            ]), paddingDirection = paddingMap.get(scrollDirection);
            if (scrollbarPaddingReplacement) {
                document.body.style[paddingDirection] = DomUtils.getScrollbarSize(scrollDirection) + 'px';
            }
            else {
                document.body.style[paddingDirection] = '0px';
            }
        }
        else {
            throw new Error(`${scrollDirection} is not a valid scroll direction.`);
        }
    }
    static hasValidStringAttribute(element, attributeName) {
        return ((element.hasAttribute(attributeName) && (StringUtils.notEmpty(element.getAttribute(attributeName)))));
    }
    static attachHandler(element, eventName, fn) {
        if (element.addEventListener) {
            element.addEventListener(eventName, fn, false);
        }
    }
    ;
}
