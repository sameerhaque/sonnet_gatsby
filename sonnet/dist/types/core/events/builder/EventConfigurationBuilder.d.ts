import { EventConfiguration } from "../domain/EventConfiguration";
export declare class EventConfigurationBuilder {
    private element;
    private constructor();
    static newInstanceof(): EventConfigurationBuilder;
    withComponent(element: HTMLElement): EventConfigurationBuilder;
    build(): EventConfiguration;
}
