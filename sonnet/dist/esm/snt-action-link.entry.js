import { r as registerInstance, h, g as getElement } from './index-79f6678c.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { a as EventConfigurationUtils, E as EventConfigurationBuilder } from './EventConfigurationBuilder-7481df3b.js';
import './ReflectionUtils-6ed4bd5c.js';

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
const ActionLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionReference = StringUtils.empty();
        this.actionData = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.styleClasses = StringUtils.empty();
        this.linkId = StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    getEventConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.eventConfiguration;
        });
    }
    sntBtnEvent(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentWillLoad() {
        this.eventElems = this.element.querySelectorAll('snt-event');
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
        }
        if (!StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const link = h("snt-link", { "link-id": this.linkId, classNames: this.styleClasses, href: "javascript:void(0);" }, icon, this.linkTitle, h("slot", null));
        const events = this.eventElems.length == 0 ? [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })] : '';
        return [events, link];
    }
    get element() { return getElement(this); }
};
ActionLinkComponent.TAG_NAME = "snt-action-link";

export { ActionLinkComponent as snt_action_link };
