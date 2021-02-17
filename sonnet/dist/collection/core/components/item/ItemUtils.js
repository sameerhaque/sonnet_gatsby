import { ItemConfiguration } from "./domain/ItemConfiguration";
import { Item } from "./domain/Item";
export class ItemUtils {
    static generateConfigurationFromItemOptions(element) {
        const configuration = new ItemConfiguration();
        const components = Array.from(element.querySelectorAll("snt-item"));
        components.forEach((item) => {
            configuration.add(new Item(item.hasAttribute('data-key') ? item.getAttribute('data-key') : '', item.hasAttribute('value') ? item.getAttribute('value') : '', item.hasAttribute('disabled') ? Boolean(item.getAttribute('disabled')) : false, item.hasAttribute('selected') ? Boolean(item.getAttribute('selected')) : false));
        });
        return configuration;
    }
}
