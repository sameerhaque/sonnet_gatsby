export declare abstract class AbstractViewportDimension {
    private readonly minimum?;
    private readonly maximum?;
    constructor(minimum?: number, maximum?: number);
    inRange(value: number): boolean;
}
