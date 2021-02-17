export class List {
    constructor() {
        this._values = [];
    }
    size() {
        return this._values.length;
    }
    add(value) {
        this._values.push(value);
    }
    get(index) {
        return this._values[index];
    }
    values() {
        return this._values;
    }
    hasValues() {
        return ((this._values != null) && (this._values.length > 0));
    }
}
