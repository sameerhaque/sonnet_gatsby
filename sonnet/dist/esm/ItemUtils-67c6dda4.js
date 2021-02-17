class AbstractConfiguration {
    constructor() {
        this.configurations = new Map();
    }
    remove(key) {
        this.configurations.delete(key);
    }
    hasConfigurations() {
        return (this.configurations.size > 0);
    }
    getConfigurations() {
        return this.configurations;
    }
    values() {
        return this.configurations.values();
    }
    keys() {
        return this.configurations.keys();
    }
}

class ItemConfiguration extends AbstractConfiguration {
    add(value) {
        this.configurations.set(value.key, value);
    }
}

class Item {
    constructor(key, value, disabled, selected) {
        this.key = key;
        this.value = value;
        this.disabled = disabled;
        this.selected = selected;
    }
}

class ItemUtils {
    static generateConfigurationFromItemOptions(element) {
        const configuration = new ItemConfiguration();
        const components = Array.from(element.querySelectorAll("snt-item"));
        components.forEach((item) => {
            configuration.add(new Item(item.hasAttribute('data-key') ? item.getAttribute('data-key') : '', item.hasAttribute('value') ? item.getAttribute('value') : '', item.hasAttribute('disabled') ? Boolean(item.getAttribute('disabled')) : false, item.hasAttribute('selected') ? Boolean(item.getAttribute('selected')) : false));
        });
        return configuration;
    }
}

export { ItemUtils as I };
