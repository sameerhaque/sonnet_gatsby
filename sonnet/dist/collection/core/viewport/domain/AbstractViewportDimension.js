export class AbstractViewportDimension {
    constructor(minimum, maximum) {
        this.minimum = minimum;
        this.maximum = maximum;
    }
    inRange(value) {
        return (((this.minimum) ? (value >= this.minimum) : true) && ((this.maximum) ? (value <= this.maximum) : true));
    }
}
