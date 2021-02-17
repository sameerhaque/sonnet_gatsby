var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractConfiguration = /** @class */ (function () {
    function AbstractConfiguration() {
        this.configurations = new Map();
    }
    AbstractConfiguration.prototype.remove = function (key) {
        this.configurations.delete(key);
    };
    AbstractConfiguration.prototype.hasConfigurations = function () {
        return (this.configurations.size > 0);
    };
    AbstractConfiguration.prototype.getConfigurations = function () {
        return this.configurations;
    };
    AbstractConfiguration.prototype.values = function () {
        return this.configurations.values();
    };
    AbstractConfiguration.prototype.keys = function () {
        return this.configurations.keys();
    };
    return AbstractConfiguration;
}());
var ItemConfiguration = /** @class */ (function (_super) {
    __extends(ItemConfiguration, _super);
    function ItemConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemConfiguration.prototype.add = function (value) {
        this.configurations.set(value.key, value);
    };
    return ItemConfiguration;
}(AbstractConfiguration));
var Item = /** @class */ (function () {
    function Item(key, value, disabled, selected) {
        this.key = key;
        this.value = value;
        this.disabled = disabled;
        this.selected = selected;
    }
    return Item;
}());
var ItemUtils = /** @class */ (function () {
    function ItemUtils() {
    }
    ItemUtils.generateConfigurationFromItemOptions = function (element) {
        var configuration = new ItemConfiguration();
        var components = Array.from(element.querySelectorAll("snt-item"));
        components.forEach(function (item) {
            configuration.add(new Item(item.hasAttribute('data-key') ? item.getAttribute('data-key') : '', item.hasAttribute('value') ? item.getAttribute('value') : '', item.hasAttribute('disabled') ? Boolean(item.getAttribute('disabled')) : false, item.hasAttribute('selected') ? Boolean(item.getAttribute('selected')) : false));
        });
        return configuration;
    };
    return ItemUtils;
}());
export { ItemUtils as I };
