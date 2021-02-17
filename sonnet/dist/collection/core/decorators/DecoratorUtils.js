import "reflect-metadata";
import "core-js/es/symbol";
export class DecoratorUtils {
    static getPropertyDecorator(target, name) {
        return Reflect.getMetadata(name, target);
    }
}
