'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const StringUtils = require('./StringUtils-cfa686e8.js');
const EventConfigurationBuilder = require('./EventConfigurationBuilder-ca448050.js');
require('./ReflectionUtils-89506fdc.js');

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
        index.registerInstance(this, hostRef);
        this.actionReference = StringUtils.StringUtils.empty();
        this.actionData = StringUtils.StringUtils.empty();
        this.linkTitle = StringUtils.StringUtils.empty();
        this.iconClassName = StringUtils.StringUtils.empty();
        this.styleClasses = StringUtils.StringUtils.empty();
        this.linkId = StringUtils.StringUtils.empty();
        this.eventConfiguration = null;
        this.actionDataJsonObj = null;
    }
    getEventConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.eventConfiguration;
        });
    }
    sntBtnEvent(event) {
        EventConfigurationBuilder.EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference, this.actionDataJsonObj);
    }
    componentWillLoad() {
        this.eventElems = this.element.querySelectorAll('snt-event');
    }
    componentDidLoad() {
        if (StringUtils.StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
        }
        if (!StringUtils.StringUtils.isEmpty(this.actionData)) {
            try {
                this.actionDataJsonObj = JSON.parse(this.actionData);
            }
            catch (error) {
                throw new Error("Invalid JSON string in ActionButtonComponent's action-data property.");
            }
        }
        this.eventConfiguration = EventConfigurationBuilder.EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.StringUtils.notEmpty(this.iconClassName)) ? index.h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const link = index.h("snt-link", { "link-id": this.linkId, classNames: this.styleClasses, href: "javascript:void(0);" }, icon, this.linkTitle, index.h("slot", null));
        const events = this.eventElems.length == 0 ? [index.h("snt-event", { type: "click" }), index.h("snt-event", { type: "keydown", filters: "space" })] : '';
        return [events, link];
    }
    get element() { return index.getElement(this); }
};
ActionLinkComponent.TAG_NAME = "snt-action-link";

exports.snt_action_link = ActionLinkComponent;
