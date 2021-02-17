import { AbstractConfiguration } from "../../../configuration/AbstractConfiguration";
export class ItemConfiguration extends AbstractConfiguration {
    add(value) {
        this.configurations.set(value.key, value);
    }
}
