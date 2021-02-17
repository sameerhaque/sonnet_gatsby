import { DecoratorUtils } from "../../decorators/DecoratorUtils";
import { VIEWPORT_PARAMETERS_META_KEY } from "../decorators/ViewportParameters";
import { ViewportProcessorFactory } from "../processor/ViewportProcessorFactory";
import { ViewportProcessorTypeEnum } from "../processor/domain/ViewportProcessorTypeEnum";
import { WebUtils } from "../../utils/WebUtils";
export class ViewportConfigurationService {
    constructor() { }
    static getInstance() {
        if (!ViewportConfigurationService.instance) {
            ViewportConfigurationService.instance = new ViewportConfigurationService();
        }
        return ViewportConfigurationService.instance;
    }
    register(target, _nodes, callback) {
        const mediaQueryInstances = WebUtils.getMediaQueryInstances();
        mediaQueryInstances.forEach((mediaQueryInstance) => {
            mediaQueryInstance.mediaQueryList.addListener((e) => {
                if (e.matches) {
                    callback.call(target);
                }
            });
        });
        callback.call(target);
    }
    process(target, context, properties) {
        let configuration = this.getConfiguration(target);
        let styles = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.STYLES);
        let classes = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.CLASSES);
        let attributes = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.ATTRIBUTES);
        // TODO: Need to add support for a quick check for active view port so we only call process on the element once it changes. Right now we are calling it every time
        properties.forEach(entry => {
            let propertyName = entry.getLeft();
            if (configuration.hasKey(propertyName)) {
                let parameters = configuration.getParametersByKey(propertyName).filter(parameter => parameter.inRange(Math.round(window.innerWidth), Math.round(window.innerHeight)));
                if (parameters.length > 0) {
                    if (configuration.hasStylesForKey(propertyName)) {
                        styles.process(entry.getRight(), parameters, context);
                    }
                    if (configuration.hasClassesForKey(entry.getLeft())) {
                        classes.process(entry.getRight(), parameters, context);
                    }
                    if (configuration.hasAttributesForKey(entry.getLeft())) {
                        attributes.process(entry.getRight(), parameters, context);
                    }
                }
            }
        });
    }
    getConfiguration(target) {
        return DecoratorUtils.getPropertyDecorator(target, VIEWPORT_PARAMETERS_META_KEY);
    }
}
