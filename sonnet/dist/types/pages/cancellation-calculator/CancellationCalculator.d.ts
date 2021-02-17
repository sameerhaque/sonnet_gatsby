export declare class CancellationCalculator {
    static COST_CALCULATOR_SHORT_RATES: number[][];
    static listen(): void;
    static executeEditCancellationCalculator(): void;
    static setMobileResultHeight(): void;
    static resetResultHeight(): void;
    static isMobile(): boolean;
    static calculateCancellationPenalty(annualPremium: number, renewalDate: Date, sonnetMoveDate: Date): number;
    static getDaysInForce(renewalDate: Date, sonnetMoveDate: Date): number;
    static getProRateAmount(annualPremium: number, daysInForce: number): number;
    static getShortRateAmount(annualPremium: number, daysInForce: number): number;
    static getShortRate(days: number): number;
}
