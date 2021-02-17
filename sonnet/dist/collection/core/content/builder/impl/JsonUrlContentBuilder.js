import { AbstractUrlContentBuilder } from "./AbstractUrlContentBuilder";
export class JsonUrlContentBuilder extends AbstractUrlContentBuilder {
    constructor() {
        super();
    }
    static newInstance() {
        return new JsonUrlContentBuilder();
    }
    withValue(value) {
        this.value = value;
        this.url = null;
        return this;
    }
    build() {
        if ((!(this.value)) && (this.url)) {
            return super.build();
        }
        else if (this.value) {
            return this.parse(this.value);
        }
        throw new Error("No JSON content has been defined using this builder.");
    }
    parse(value) {
        return JSON.parse(value);
    }
}
