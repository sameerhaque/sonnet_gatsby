import { StringUtils } from "../../../utils/StringUtils";
export class AbstractContentBuilder {
    withConditionalBooleanArgument(fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalObjectArgument(fn, arg) {
        return (arg) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalStringArgument(fn, arg) {
        return (StringUtils.notEmpty(arg)) ? this.withConditionalArguments(fn, arg) : this;
    }
    withConditionalArguments(fn, ...args) {
        return (args && args.length > 0) ? fn.apply(this, args) : this;
    }
}
