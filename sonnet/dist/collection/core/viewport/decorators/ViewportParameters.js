import "reflect-metadata";
import "core-js/es/symbol";
import { ViewportConfiguration } from "../domain/ViewportConfiguration";
export const VIEWPORT_PARAMETERS_META_KEY = Symbol('ViewportParameters');
export function ViewportParameters(viewports) {
    function register(target, propertyKey) {
        let configuration = Reflect.getMetadata(VIEWPORT_PARAMETERS_META_KEY, target);
        if (!(configuration)) {
            configuration = new ViewportConfiguration();
            Reflect.defineMetadata(VIEWPORT_PARAMETERS_META_KEY, configuration, target);
        }
        configuration.addParameters(propertyKey, viewports);
    }
    return register;
}
