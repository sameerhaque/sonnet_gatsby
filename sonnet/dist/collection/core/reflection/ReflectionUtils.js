var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ReflectionUtils {
    static getObjectReference(value, base) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(base)) {
                base = yield import("./index");
            }
            return value.split('.').reduce(function (obj, i) {
                const reference = obj[i];
                if (reference) {
                    return reference;
                }
                throw Error(`Argument value with value ${value} does not exist.`);
            }, base);
        });
    }
}
