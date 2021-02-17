import { Item } from "./Item";
import { AbstractConfiguration } from "../../../configuration/AbstractConfiguration";
export declare class ItemConfiguration extends AbstractConfiguration<string, Item> {
    add(value: Item): void;
}
